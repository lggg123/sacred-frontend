import {redirect, useLoaderData, Link, Await} from 'react-router';
import type {Route} from './+types/collections.$handle';
import {getPaginationVariables, Analytics, Image, Money} from '@shopify/hydrogen';
import {PaginatedResourceSection} from '~/components/PaginatedResourceSection';
import {redirectIfHandleIsLocalized} from '~/lib/redirect';
import {ProductItem} from '~/components/ProductItem';
import type {ProductItemFragment, FeaturedCollectionFragment, RecommendedProductsQuery} from 'storefrontapi.generated';
import {Suspense} from 'react';

export const meta: Route.MetaFunction = ({data, params}) => {
  // Special meta for frontpage
  if (params.handle === 'frontpage') {
    return [
      {title: 'Sacred Line Studio - Where Art Meets Spirituality'},
      {
        name: 'description',
        content: 'Discover handcrafted, spiritually-inspired pieces that elevate your space and soul.',
      },
    ];
  }
  
  // Type guard to check if data has collection property
  const collectionData = data && 'collection' in data ? data.collection : null;
  return [{title: `Hydrogen | ${collectionData?.title ?? ''} Collection`}];
};

export async function loader(args: Route.LoaderArgs) {
  const {handle} = args.params;
  
  // If it's the frontpage collection, load homepage data instead
  if (handle === 'frontpage') {
    return loadHomepageData(args);
  }
  
  // Otherwise load normal collection data
  const deferredData = loadDeferredData(args);
  const criticalData = await loadCriticalData(args);
  return {...deferredData, ...criticalData};
}

/**
 * Load homepage data when handle is 'frontpage'
 */
async function loadHomepageData({context}: Route.LoaderArgs) {
  const deferredProducts = context.storefront
    .query(FEATURED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      console.error(error);
      return null;
    });

  const [{collections}] = await Promise.all([
    context.storefront.query(HOMEPAGE_COLLECTIONS_QUERY),
  ]);

  return {
    isHomepage: true,
    featuredCollection: collections?.nodes?.[0] || null,
    collections: collections?.nodes?.slice(0, 6) || [],
    featuredProducts: deferredProducts,
  };
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context, params, request}: Route.LoaderArgs) {
  const {handle} = params;
  const {storefront} = context;
  const paginationVariables = getPaginationVariables(request, {
    pageBy: 8,
  });

  if (!handle) {
    throw redirect('/collections');
  }

  const [{collection}] = await Promise.all([
    storefront.query(COLLECTION_QUERY, {
      variables: {handle, ...paginationVariables},
      // Add other queries here, so that they are loaded in parallel
    }),
  ]);

  if (!collection) {
    throw new Response(`Collection ${handle} not found`, {
      status: 404,
    });
  }

  // The API handle might be localized, so redirect to the localized handle
  redirectIfHandleIsLocalized(request, {handle, data: collection});

  return {
    collection,
  };
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: Route.LoaderArgs) {
  return {};
}

export default function Collection() {
  const data = useLoaderData<typeof loader>();

  // If it's the homepage/frontpage, show the full 7-section layout
  if ('isHomepage' in data && data.isHomepage) {
    return <HomepageView data={data} />;
  }

  // Otherwise show normal collection view
  const {collection} = data as any;
  return (
    <div className="collection">
      <h1>{collection.title}</h1>
      <p className="collection-description">{collection.description}</p>
      <PaginatedResourceSection<ProductItemFragment>
        connection={collection.products}
        resourcesClassName="products-grid"
      >
        {({node: product, index}) => (
          <ProductItem
            key={product.id}
            product={product}
            loading={index < 8 ? 'eager' : undefined}
          />
        )}
      </PaginatedResourceSection>
      <Analytics.CollectionView
        data={{
          collection: {
            id: collection.id,
            handle: collection.handle,
          },
        }}
      />
    </div>
  );
}

// Homepage View Component
function HomepageView({data}: {data: any}) {
  return (
    <div className="homepage">
      <HeroSection />
      <BrandStorySection />
      <FeaturedCollectionShowcase collection={data.featuredCollection} />
      <FeaturedProductsSection products={data.featuredProducts} />
      <ValuesSection />
      <CollectionsGridSection collections={data.collections} />
      <NewsletterSection />
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Sacred Line Studio</h1>
          <p className="hero-subtitle">Where Art Meets Spirituality</p>
          <p className="hero-description">
            Discover handcrafted pieces inspired by ancient wisdom and modern design
          </p>
          <Link to="/collections/all" className="btn-primary hero-cta">
            Explore Collection
          </Link>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll to explore</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}

// Brand Story Section
function BrandStorySection() {
  return (
    <section className="brand-story-section">
      <div className="brand-story-content">
        <div className="sacred-geometry-divider"></div>
        <h2>Our Story</h2>
        <p className="brand-story-quote">
          "Where ancient wisdom meets modern craftsmanship"
        </p>
        <p className="brand-story-text">
          Sacred Line Studio creates mindfully crafted pieces that honor both tradition and
          innovation. Each item is designed to bring beauty, meaning, and intention into your
          daily life.
        </p>
        <div className="brand-values">
          <div className="brand-value">
            <h3>Handcrafted</h3>
            <p>Every piece made with care and attention to detail</p>
          </div>
          <div className="brand-value">
            <h3>Sustainable</h3>
            <p>Ethically sourced materials and conscious production</p>
          </div>
          <div className="brand-value">
            <h3>Meaningful</h3>
            <p>Designs inspired by sacred geometry and intention</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Featured Collection Showcase
function FeaturedCollectionShowcase({collection}: {collection: any}) {
  if (!collection) return null;
  const image = collection?.image;
  return (
    <section className="featured-collection-showcase">
      <div className="featured-collection-grid">
        {image && (
          <div className="featured-collection-image-wrapper">
            <Image
              data={image}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="featured-collection-img"
            />
          </div>
        )}
        <div className="featured-collection-content">
          <h2>{collection.title}</h2>
          <p className="featured-collection-description">
            Explore our curated collection of spiritually-inspired pieces designed to elevate
            your space and soul.
          </p>
          <Link
            to={`/collections/${collection.handle}`}
            className="btn-secondary"
          >
            View Collection
          </Link>
        </div>
      </div>
    </section>
  );
}

// Featured Products Section
function FeaturedProductsSection({products}: {products: any}) {
  return (
    <section className="featured-products-section">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p className="section-subtitle">Handpicked pieces from our latest collection</p>
      </div>
      <Suspense fallback={<div className="loading">Loading products...</div>}>
        <Await resolve={products}>
          {(response: any) => (
            <div className="featured-products-grid">
              {response && response.products.nodes.length > 0 ? (
                response.products.nodes.map((product: any) => (
                  <ProductItem key={product.id} product={product} loading="lazy" />
                ))
              ) : (
                <p className="no-products">No products available yet.</p>
              )}
            </div>
          )}
        </Await>
      </Suspense>
      <div className="section-cta">
        <Link to="/collections/all" className="btn-secondary">
          Shop All Products
        </Link>
      </div>
    </section>
  );
}

// Values Section
function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-grid">
        <div className="value-item">
          <div className="value-icon">✦</div>
          <h3>Handcrafted Quality</h3>
          <p>Each piece is meticulously crafted by skilled artisans with attention to every detail</p>
        </div>
        <div className="value-item">
          <div className="value-icon">◆</div>
          <h3>Ethically Made</h3>
          <p>Sustainable materials and fair trade practices guide every step of our process</p>
        </div>
        <div className="value-item">
          <div className="value-icon">✧</div>
          <h3>Sacred Design</h3>
          <p>Inspired by ancient symbols and geometry that bring intention to your space</p>
        </div>
        <div className="value-item">
          <div className="value-icon">⬡</div>
          <h3>Free Shipping</h3>
          <p>Complimentary shipping on all orders over $75 within the continental US</p>
        </div>
      </div>
    </section>
  );
}

// Collections Grid Section
function CollectionsGridSection({collections}: {collections: any[]}) {
  if (!collections || collections.length === 0) return null;
  
  return (
    <section className="collections-grid-section">
      <div className="section-header">
        <h2>Shop by Collection</h2>
        <p className="section-subtitle">Explore our curated collections</p>
      </div>
      <div className="collections-grid">
        {collections.map((collection) => (
          <Link
            key={collection.id}
            to={`/collections/${collection.handle}`}
            className="collection-card"
          >
            {collection.image && (
              <div className="collection-card-image">
                <Image
                  data={collection.image}
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            )}
            <div className="collection-card-content">
              <h3>{collection.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// Newsletter Section
function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h2>Join Our Community</h2>
        <p>Subscribe to receive exclusive offers, new product launches, and inspiration</p>
        <form className="newsletter-form" method="post" action="/api/newsletter">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="newsletter-input"
          />
          <button type="submit" className="btn-primary">
            Subscribe
          </button>
        </form>
        <p className="newsletter-privacy">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}

const PRODUCT_ITEM_FRAGMENT = `#graphql
  fragment MoneyProductItem on MoneyV2 {
    amount
    currencyCode
  }
  fragment ProductItem on Product {
    id
    handle
    title
    featuredImage {
      id
      altText
      url
      width
      height
    }
    priceRange {
      minVariantPrice {
        ...MoneyProductItem
      }
      maxVariantPrice {
        ...MoneyProductItem
      }
    }
  }
` as const;

// NOTE: https://shopify.dev/docs/api/storefront/2022-04/objects/collection
const COLLECTION_QUERY = `#graphql
  ${PRODUCT_ITEM_FRAGMENT}
  query Collection(
    $handle: String!
    $country: CountryCode
    $language: LanguageCode
    $first: Int
    $last: Int
    $startCursor: String
    $endCursor: String
  ) @inContext(country: $country, language: $language) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      products(
        first: $first,
        last: $last,
        before: $startCursor,
        after: $endCursor
      ) {
        nodes {
          ...ProductItem
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          endCursor
          startCursor
        }
      }
    }
  }
` as const;

const HOMEPAGE_COLLECTIONS_QUERY = `#graphql
  fragment HomepageCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query HomepageCollections($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 6, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...HomepageCollection
      }
    }
  }
` as const;

const FEATURED_PRODUCTS_QUERY = `#graphql
  fragment FeaturedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    featuredImage {
      id
      url
      altText
      width
      height
    }
  }
  query FeaturedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedProduct
      }
    }
  }
` as const;
