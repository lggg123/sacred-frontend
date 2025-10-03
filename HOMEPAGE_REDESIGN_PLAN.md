# Sacred Line Studio - Homepage Redesign Plan

## Design Philosophy
Minimalist luxury meets spiritual aesthetic. Long-scrolling, immersive experience that tells a story while showcasing products.

## Page Structure

### 1. Hero Section (Full Viewport)
**Purpose**: Immediate impact, brand introduction
- Large, cinematic image or video background
- Centered brand statement/tagline
- Sacred geometry overlay (subtle)
- CTA button: "Explore Collection"
- Fade-in animation on load

**Visual Elements**:
- Full-screen height (100vh)
- Dark overlay on image (30% opacity)
- White text with gold accents
- Serif heading (4rem)
- Scroll indicator at bottom

---

### 2. Brand Story Section
**Purpose**: Connect emotionally, explain the brand
- Short paragraph about Sacred Line Studio
- 2-3 key values/principles
- Centered, narrow column (max 600px)
- Sacred geometry divider

**Layout**:
```
    ═══════ ✦ ═══════
    
    Our Story
    
    "Where ancient wisdom meets 
     modern craftsmanship..."
    
    [Short brand description]
    
    ═══════ ✦ ═══════
```

---

### 3. Featured Collection Showcase
**Purpose**: Highlight main collection with large imagery
- Large image (current featured collection)
- Overlaid title
- Description snippet
- "View Collection" button
- Hover effects

**Layout**: Side-by-side on desktop
```
┌──────────────┬──────────────┐
│              │  Collection  │
│    Image     │    Name      │
│              │  Description │
│              │   [Button]   │
└──────────────┴──────────────┘
```

---

### 4. Featured Products Grid
**Purpose**: Showcase best products (4-8 items)
- Centered section title
- 4-column grid (desktop), 2-column (tablet), 1-column (mobile)
- Product cards with hover effects
- "Shop All" link at bottom

---

### 5. Values/Features Section
**Purpose**: Build trust, communicate differentiators
- 3-4 value propositions
- Icon + Title + Short description
- Horizontal layout (desktop), stacked (mobile)

**Examples**:
```
┌─────────────┬─────────────┬─────────────┐
│   ◆ Icon    │   ◆ Icon    │   ◆ Icon    │
│  Handcrafted│   Ethical   │   Sacred    │
│  Description│ Description │ Description │
└─────────────┴─────────────┴─────────────┘
```

---

### 6. Collection Grid
**Purpose**: Show all collections, enable exploration
- 2x2 or 3-column grid
- Collection cards with images
- Hover effects with overlay
- Links to each collection

---

### 7. Testimonials / Social Proof (Optional)
**Purpose**: Build credibility
- Customer quotes
- Carousel or static grid
- Photos + names + quotes
- Star ratings (if applicable)

---

### 8. Newsletter / CTA Section
**Purpose**: Capture emails, encourage action
- Centered content
- Background: Sacred Beige
- Email input + Subscribe button
- Optional: Special offer for signup

---

### 9. Instagram Feed (Optional)
**Purpose**: Show social presence, lifestyle
- Grid of latest Instagram posts
- "Follow Us" CTA
- Links to Instagram

---

## Color Usage Strategy

### Hero Section
- Background: Dark image with overlay
- Text: Sacred White
- Accent: Sacred Gold
- Button: Gold with charcoal hover

### Content Sections (Alternating)
- Section 1: Sacred Warm Grey background
- Section 2: Sacred White background
- Section 3: Sacred Warm Grey background
- Pattern continues...

### CTAs Throughout
- Primary CTA: Sacred Charcoal → Gold hover
- Secondary CTA: Outlined Gold → Filled Gold hover

---

## Typography Hierarchy

```
Hero Heading:        4rem (64px)  - Playfair Display
Section Headings:    2.5rem (40px) - Playfair Display
Subsection Headings: 1.875rem (30px) - Playfair Display
Body Large:          1.125rem (18px) - Inter
Body Regular:        1rem (16px) - Inter
Body Small:          0.875rem (14px) - Inter
```

---

## Spacing Strategy

```
Section Padding:     6rem (96px) top/bottom
Content Max-Width:   1400px
Narrow Content:      800px (for text-heavy sections)
Grid Gaps:           3rem (48px)
```

---

## Animation Strategy

### On Scroll Animations
1. Fade-in + slide-up for section headings
2. Stagger animations for product grids
3. Parallax effect for hero image (subtle)
4. Hover scale on images (1.05x)

### Transitions
- All animations: 300-500ms ease-out
- Smooth scrolling between sections
- Lazy loading for images below fold

---

## Mobile Considerations

### Hero Section
- Reduce font size (2.5rem)
- Ensure text is readable
- Adjust padding

### Grids
- 4-col → 2-col → 1-col
- Increase touch targets (min 44px)
- Stack side-by-side layouts

### Navigation
- Sticky header
- Hamburger menu
- Easy access to cart

---

## SEO Optimization

- H1: Brand name or value proposition (hero)
- H2: Section headings
- Alt text on all images
- Structured data for products
- Meta description focusing on brand values

---

## Performance

- Hero image: WebP format, optimized
- Lazy load images below fold
- Critical CSS inline
- Defer non-critical JavaScript
- Use Shopify CDN for images

---

## Accessibility

- Keyboard navigation throughout
- Skip to main content link
- Focus indicators on all interactive elements
- Color contrast WCAG AAA
- Screen reader labels

---

## Implementation Priority

### Phase 1 (Now)
1. ✅ Hero section
2. ✅ Featured products grid (improve)
3. ✅ Featured collection showcase
4. ✅ Newsletter section

### Phase 2 (Next)
5. Brand story section
6. Values section
7. Collection grid

### Phase 3 (Polish)
8. Animations on scroll
9. Testimonials
10. Instagram feed

---

## Component Structure

```tsx
export default function Homepage() {
  return (
    <>
      <HeroSection />
      <BrandStorySection />
      <FeaturedCollectionShowcase collection={featuredCollection} />
      <FeaturedProductsSection products={featuredProducts} />
      <ValuesSection />
      <CollectionsGridSection collections={collections} />
      <NewsletterSection />
    </>
  );
}
```

---

## Design Inspiration References

- Luxury jewelry sites (clean, minimal)
- Spiritual/wellness brands (calming, purposeful)
- High-end fashion (editorial layouts)
- Sacred geometry patterns (decorative elements)

---

This plan creates a 7-9 section homepage that's:
✅ Scrollable and engaging
✅ Tells a brand story
✅ Showcases products naturally
✅ Maintains Sacred Line Studio aesthetic
✅ Converts visitors to customers
