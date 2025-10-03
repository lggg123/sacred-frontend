import {Await, useLoaderData, Link} from 'react-router';
import type {Route} from './+types/_index';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';
import type {
  FeaturedCollectionFragment,
  RecommendedProductsQuery,
  CollectionFragment,
} from 'storefrontapi.generated';
import {ProductItem} from '~/components/ProductItem';

export const meta: Route.MetaFunction = () => {
  return [
    {title: 'Sacred Line Studio - Where Art Meets Spirituality'},
    {
      name: 'description',
      content: 'Discover handcrafted, spiritually-inspired pieces that elevate your space and soul.',
    },
  ];
};

export async function loader(args: Route.LoaderArgs) {
  // Start fetching non-critical data without blocking time to first byte
  const deferredData = loadDeferredData(args);

  // Await the critical data required to render initial state of the page
  const criticalData = await loadCriticalData(args);

  return {...deferredData, ...criticalData};
}

/**
 * Load data necessary for rendering content above the fold. This is the critical data
 * needed to render the page. If it's unavailable, the whole page should 400 or 500 error.
 */
async function loadCriticalData({context}: Route.LoaderArgs) {
  try {
    const [{collections}] = await Promise.all([
      context.storefront.query(COLLECTIONS_QUERY),
      // Add other queries here, so that they are loaded in parallel
    ]);

    return {
      featuredCollection: collections?.nodes?.[0] || null,
      collections: collections?.nodes?.slice(0, 4) || [], // Get up to 4 collections
    };
  } catch (error) {
    console.error('Error loading homepage data:', error);
    // Return empty data instead of throwing to prevent page crash
    return {
      featuredCollection: null,
      collections: [],
    };
  }
}

/**
 * Load data for rendering content below the fold. This data is deferred and will be
 * fetched after the initial page load. If it's unavailable, the page should still 200.
 * Make sure to not throw any errors here, as it will cause the page to 500.
 */
function loadDeferredData({context}: Route.LoaderArgs) {
  const featuredProducts = context.storefront
    .query(FEATURED_PRODUCTS_QUERY)
    .catch((error: Error) => {
      // Log query errors, but don't throw them so the page can still render
      console.error(error);
      return null;
    });

  return {
    featuredProducts,
  };
}

export default function Homepage() {
  const data = useLoaderData<typeof loader>();
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
function FeaturedCollectionShowcase({
  collection,
}: {
  collection: FeaturedCollectionFragment | null;
}) {
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
function FeaturedProductsSection({
  products,
}: {
  products: Promise<RecommendedProductsQuery | null>;
}) {
  return (
    <section className="featured-products-section">
      <div className="section-header">
        <h2>Featured Products</h2>
        <p className="section-subtitle">Handpicked pieces from our latest collection</p>
      </div>
      <Suspense fallback={<div className="loading">Loading products...</div>}>
        <Await resolve={products}>
          {(response) => (
            <div className="featured-products-grid">
              {response && response.products.nodes.length > 0 ? (
                response.products.nodes.map((product) => (
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
function CollectionsGridSection({
  collections,
}: {
  collections: FeaturedCollectionFragment[];
}) {
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

const COLLECTIONS_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
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
  query Collections($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 6, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
` as const;

const FEATURED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
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
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
` as const;
