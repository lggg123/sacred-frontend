# Sacred Line Studio - Quick Style Guide

## Quick Reference for Developers

### Color Classes
```tsx
// Text colors
className="text-gold"      // Sacred Gold
className="text-charcoal"  // Sacred Charcoal  
className="text-sage"      // Sacred Sage
```

### Spacing Utilities
```tsx
// Margin
className="mt-lg"   // margin-top: 1.5rem
className="mb-2xl"  // margin-bottom: 3rem

// Padding
className="p-xl"    // padding: 2rem
```

### Common Component Patterns

#### Product Card
```tsx
<Link className="product-item" to={`/products/${product.handle}`}>
  <Image data={product.image} />
  <h4>{product.title}</h4>
  <small><Money data={product.price} /></small>
</Link>
```

#### Primary Button
```tsx
<button className="btn-primary" type="submit">
  Add to Cart
</button>
```

#### Secondary Button
```tsx
<button className="btn-secondary">
  Learn More
</button>
```

#### Card Container
```tsx
<div className="card">
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</div>
```

#### Badge
```tsx
<span className="badge">New</span>
<span className="badge badge-secondary">Sale</span>
```

#### Container Wrapper
```tsx
<div className="container">
  {/* Max-width content */}
</div>
```

### CSS Variables to Use

```css
/* Colors */
var(--color-sacred-charcoal)
var(--color-sacred-white)
var(--color-sacred-gold)
var(--color-sacred-sage)
var(--color-sacred-terracotta)
var(--color-sacred-warm-grey)
var(--color-sacred-beige)

/* Typography */
var(--font-heading)
var(--font-body)

/* Spacing */
var(--spacing-xs) through var(--spacing-3xl)

/* Border Radius */
var(--radius-sm) through var(--radius-lg)

/* Shadows */
var(--shadow-sm) through var(--shadow-xl)

/* Transitions */
var(--transition-fast)
var(--transition-base)
var(--transition-slow)
```

### Layout Structure

```tsx
// Typical page layout
<div className="home">
  <div className="container">
    <section className="featured-collection">
      {/* Hero content */}
    </section>
    
    <section className="recommended-products">
      <h2>Featured Products</h2>
      <div className="recommended-products-grid">
        {/* Product items */}
      </div>
    </section>
  </div>
</div>
```

### Form Elements

```tsx
<form>
  <label htmlFor="email">Email Address</label>
  <input 
    type="email" 
    id="email" 
    name="email"
    placeholder="you@example.com"
  />
  
  <button type="submit" className="btn-primary">
    Submit
  </button>
</form>
```

### Responsive Utilities

```tsx
// Hide on mobile
<div className="hide-mobile">Desktop only content</div>

// Hide on desktop
<div className="hide-desktop">Mobile only content</div>
```

### Animation Classes

```tsx
// Fade in animation
<div className="fade-in">Content</div>

// Loading state
<div className="loading">Loading...</div>
```

### Grid Layouts

```tsx
// Products grid
<div className="products-grid">
  {products.map(product => (
    <ProductItem key={product.id} product={product} />
  ))}
</div>

// Collections grid
<div className="collections-grid">
  {collections.map(collection => (
    <CollectionItem key={collection.id} collection={collection} />
  ))}
</div>

// Blog grid
<div className="blog-grid">
  {articles.map(article => (
    <ArticleCard key={article.id} article={article} />
  ))}
</div>
```

### Common Patterns

#### Hover Effects (CSS)
```css
.my-element {
  transition: all var(--transition-base);
}

.my-element:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
  color: var(--color-sacred-gold);
}
```

#### Image Hover
```css
.image-container img {
  transition: transform var(--transition-slow);
}

.image-container:hover img {
  transform: scale(1.05);
}
```

#### Underline Animation
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-sacred-gold);
  transition: width var(--transition-base);
}

.link:hover::after {
  width: 100%;
}
```

### Accessibility Reminders

1. Always include alt text for images
2. Use semantic HTML (h1-h6, nav, main, footer)
3. Ensure sufficient color contrast
4. Make interactive elements keyboard accessible
5. Use aria-labels for icon buttons
6. Test with screen readers

### Performance Tips

1. Use `loading="lazy"` for images below the fold
2. Optimize image sizes (use Shopify's image CDN)
3. Use CSS transforms for animations (not top/left)
4. Minimize use of box-shadow on many elements
5. Use will-change sparingly

### TypeScript Component Example

```tsx
import {Link} from 'react-router';
import {Image, Money} from '@shopify/hydrogen';
import type {ProductFragment} from 'storefrontapi.generated';

interface ProductCardProps {
  product: ProductFragment;
  loading?: 'eager' | 'lazy';
}

export function ProductCard({product, loading = 'lazy'}: ProductCardProps) {
  return (
    <Link 
      className="product-item" 
      to={`/products/${product.handle}`}
      prefetch="intent"
    >
      {product.featuredImage && (
        <Image
          data={product.featuredImage}
          alt={product.featuredImage.altText || product.title}
          aspectRatio="1/1"
          loading={loading}
          sizes="(min-width: 45em) 400px, 100vw"
        />
      )}
      <h4>{product.title}</h4>
      <small>
        <Money data={product.priceRange.minVariantPrice} />
      </small>
    </Link>
  );
}
```

### Testing Checklist

- [ ] Test on mobile (< 768px)
- [ ] Test on tablet (768px - 1024px)
- [ ] Test on desktop (> 1024px)
- [ ] Test hover states
- [ ] Test focus states (keyboard navigation)
- [ ] Test with screen reader
- [ ] Verify color contrast
- [ ] Check loading states
- [ ] Test dark mode (if implemented)

---

## Need Help?

- Full documentation: `DESIGN_SYSTEM.md`
- Inspect styles: `app/styles/app.css`
- Component examples: Check existing components in `app/components/`
