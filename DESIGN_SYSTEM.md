# Sacred Line Studio - Design System Documentation

## Brand Identity

**Sacred Line Studio** embodies a refined, spiritual aesthetic that combines elegance with sacred geometry and luxurious minimalism. The design philosophy centers around clean lines, generous white space, and a sophisticated color palette that evokes both earthiness and transcendence.

---

## Color Palette

### Primary Colors
- **Sacred Charcoal** - `#1a1a1a` - Main text, headers, and dark elements
- **Sacred White** - `#ffffff` - Backgrounds and light elements
- **Sacred Gold** - `#d4af37` - Primary accent, call-to-action elements

### Secondary Colors
- **Sacred Sage** - `#8b9d83` - Natural, calming accent
- **Sacred Terracotta** - `#c4756f` - Warm, earthy accent
- **Sacred Warm Grey** - `#f5f3f0` - Background tint, subtle sections
- **Sacred Beige** - `#e8e4de` - Borders, dividers, subtle backgrounds
- **Sacred Dark Grey** - `#3a3a3a` - Secondary text

### Color Usage
```css
--color-sacred-charcoal: #1a1a1a
--color-sacred-white: #ffffff
--color-sacred-gold: #d4af37
--color-sacred-gold-light: #e8c968
--color-sacred-gold-dark: #b8952f
--color-sacred-sage: #8b9d83
--color-sacred-terracotta: #c4756f
--color-sacred-warm-grey: #f5f3f0
--color-sacred-beige: #e8e4de
--color-sacred-dark-grey: #3a3a3a
```

---

## Typography

### Font Families
- **Headings**: `'Playfair Display', 'Georgia', serif`
  - Elegant, refined, with personality
  - Used for: H1-H6, brand name, section titles
  
- **Body**: `'Inter', 'system-ui', sans-serif`
  - Clean, modern, highly readable
  - Used for: Paragraphs, buttons, UI elements

### Type Scale
```
H1: 3rem (48px) - Letter spacing: -0.02em
H2: 2.25rem (36px) - Letter spacing: -0.01em
H3: 1.875rem (30px)
H4: 1.5rem (24px)
H5: 1.25rem (20px)
H6: 1rem (16px)
Body: 1rem (16px) - Line height: 1.6
```

### Mobile Type Scale
```
H1: 2rem (32px)
H2: 1.75rem (28px)
H3: 1.5rem (24px)
```

---

## Spacing System

Consistent spacing creates rhythm and hierarchy throughout the interface.

```css
--spacing-xs: 0.25rem (4px)
--spacing-sm: 0.5rem (8px)
--spacing-md: 1rem (16px)
--spacing-lg: 1.5rem (24px)
--spacing-xl: 2rem (32px)
--spacing-2xl: 3rem (48px)
--spacing-3xl: 4rem (64px)
```

**Usage Guidelines:**
- Use `xs` for tight spacing (badges, inline elements)
- Use `sm-md` for component internal spacing
- Use `lg-xl` for section spacing
- Use `2xl-3xl` for major section breaks

---

## Border Radius

Rounded corners soften the design and create a modern feel.

```css
--radius-sm: 0.25rem (4px) - Buttons, inputs, small elements
--radius-md: 0.5rem (8px) - Cards, product items
--radius-lg: 1rem (16px) - Major sections, feature cards
```

---

## Shadows

Shadows create depth and hierarchy. Use sparingly for maximum impact.

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05) - Subtle elevation
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1) - Cards, buttons
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1) - Modals, popovers
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1) - Hero sections, elevated cards
```

---

## Transitions

Smooth transitions enhance the user experience.

```css
--transition-fast: 150ms ease-in-out - Hovers, small UI changes
--transition-base: 300ms ease-in-out - Standard transitions
--transition-slow: 500ms ease-in-out - Images, large animations
```

---

## Component Library

### Buttons

#### Primary Button
```html
<button class="btn-primary">Shop Now</button>
```
- Black background with gold hover
- Uppercase text with letter spacing
- Smooth transform on hover

#### Secondary Button
```html
<button class="btn-secondary">Learn More</button>
```
- Outlined button with fill on hover
- Same styling as primary but inverted

### Cards
```html
<div class="card">
  <!-- Card content -->
</div>
```
- White background with shadow
- Subtle hover lift effect
- Rounded corners

### Badges
```html
<span class="badge">New</span>
<span class="badge badge-secondary">Sale</span>
<span class="badge badge-tertiary">Featured</span>
```

### Product Items
- Image hover with scale effect
- Gold accent line on top (appears on hover)
- Elevated shadow on hover
- Typography hierarchy: Title (heading font) + Price (gold)

---

## Layout Guidelines

### Container
```html
<div class="container">
  <!-- Max-width: 1400px, centered -->
</div>
```

### Header
- Height: 80px
- Sticky positioning
- Subtle shadow and backdrop blur
- Gold accent on hover for nav items

### Footer
- Dark charcoal background
- Gold top border accent
- Generous padding
- Hover underline animation for links

---

## Interaction Patterns

### Hover States
- **Links**: Color change to gold
- **Buttons**: Background color change + slight lift
- **Images**: Subtle scale (1.02-1.05)
- **Cards**: Increased shadow + lift

### Focus States
- 2px gold outline
- 2px offset for clarity
- Applied to all interactive elements

### Loading States
- Shimmer animation with gradient
- Uses warm grey and beige

---

## Accessibility

### Focus Indicators
All interactive elements have visible focus indicators using the gold accent color.

### Color Contrast
- Text on white backgrounds: AAA compliant
- Links and buttons: Clear visual distinction
- Gold accent used strategically for emphasis

### Selection
- Custom selection color: Gold background with white text

---

## Sacred Geometry Elements

Subtle decorative elements inspired by sacred geometry can be used to enhance the spiritual aesthetic:

```css
.sacred-geometry::before {
  /* Star/flower pattern using clip-path */
  /* Placed above section titles or as dividers */
}
```

---

## Grid Systems

### Product Grid
```css
grid-template-columns: repeat(auto-fit, minmax(355px, 1fr));
gap: var(--spacing-2xl);
```

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Animation Library

### Fade In
```css
.fade-in {
  animation: fadeIn 0.6s ease-out forwards;
}
```

### Shimmer (Loading)
```css
.loading {
  animation: shimmer 2s infinite;
}
```

---

## Best Practices

1. **Consistency**: Use design tokens (CSS variables) throughout
2. **Hierarchy**: Establish clear visual hierarchy with typography and spacing
3. **White Space**: Don't be afraid of generous spacing
4. **Subtlety**: Animations and effects should be smooth and subtle
5. **Accessibility**: Always consider keyboard navigation and screen readers
6. **Performance**: Optimize images, use transform for animations
7. **Mobile First**: Design and test for mobile devices first

---

## File Structure

```
app/styles/
  ├── reset.css        # CSS reset
  ├── tailwind.css     # Tailwind v4 configuration
  └── app.css          # Sacred Line Studio design system
```

---

## Implementation Checklist

- [x] Color palette defined
- [x] Typography system implemented
- [x] Spacing system created
- [x] Component styles updated
- [x] Button variants created
- [x] Card component styled
- [x] Header redesigned
- [x] Footer enhanced
- [x] Product items styled
- [x] Cart interface improved
- [x] Search interface refined
- [x] Account pages styled
- [x] Blog layout enhanced
- [x] Form inputs standardized
- [x] Utility classes added
- [x] Animations implemented
- [x] Accessibility features added

---

## Future Enhancements

1. Add more sacred geometry patterns as decorative elements
2. Implement dark mode variant
3. Create animation presets for page transitions
4. Add more badge variants
5. Create pattern library for backgrounds
6. Implement custom icon set
7. Add micro-interactions for enhanced UX

---

## Credits

Design System Created: October 3, 2025
Typography: Playfair Display + Inter
Inspiration: Sacred geometry, minimalism, luxury e-commerce

---

*This design system is a living document and should be updated as the Sacred Line Studio brand evolves.*
