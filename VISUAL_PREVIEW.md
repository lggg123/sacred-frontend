# Sacred Line Studio - Visual Design Preview

## 🎨 Color Palette

### Primary Colors
```
█████ Sacred Charcoal (#1a1a1a)
█████ Sacred White (#ffffff)
█████ Sacred Gold (#d4af37)
```

### Secondary Colors
```
█████ Sacred Sage (#8b9d83)
█████ Sacred Terracotta (#c4756f)
█████ Sacred Warm Grey (#f5f3f0)
█████ Sacred Beige (#e8e4de)
```

---

## 📱 Component Preview

### Header
```
┌────────────────────────────────────────────────────────┐
│  Sacred Line Studio    HOME  SHOP  ABOUT  CONTACT     │
│                        (gold underline on hover)       │
│                                      🔍  👤  🛒        │
└────────────────────────────────────────────────────────┘
```
- Height: 80px
- Sticky with backdrop blur
- White background with subtle shadow
- Gold accents on hover

---

### Product Card
```
┌─────────────────────────┐
│ ▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔  │ ← Gold accent line (on hover)
│                         │
│   [Product Image]       │ ← Scales to 1.05 on hover
│                         │
│   Product Title         │ ← Playfair Display (serif)
│   $99.00               │ ← Gold color
└─────────────────────────┘
```
- White background
- Soft shadow → strong shadow on hover
- Lifts up 8px on hover
- Rounded corners (8px)

---

### Featured Collection Hero
```
┌────────────────────────────────────────────────────────┐
│                                                        │
│          [Large Collection Image]                     │
│                                                        │
│    Collection Title                                   │ ← Bottom left
│                                                        │
└────────────────────────────────────────────────────────┘
```
- Full width
- Dark gradient overlay at bottom
- Image scales on hover
- Title in white with text shadow

---

### Buttons

#### Primary Button
```
┌─────────────────┐
│   ADD TO CART   │ ← Dark bg, white text
└─────────────────┘
     ↓ (hover)
┌─────────────────┐
│   ADD TO CART   │ ← Gold bg, dark text, lifts up
└─────────────────┘
```

#### Secondary Button
```
┌─────────────────┐
│  LEARN MORE     │ ← Outlined, transparent bg
└─────────────────┘
     ↓ (hover)
┌─────────────────┐
│  LEARN MORE     │ ← Filled dark, white text
└─────────────────┘
```

---

### Product Grid
```
┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Product │  │ Product │  │ Product │  │ Product │
│  Card   │  │  Card   │  │  Card   │  │  Card   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘

┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐
│ Product │  │ Product │  │ Product │  │ Product │
│  Card   │  │  Card   │  │  Card   │  │  Card   │
└─────────┘  └─────────┘  └─────────┘  └─────────┘
```
- 4 columns on desktop
- 2 columns on tablet
- 1-2 columns on mobile
- Gap: 48px

---

### Cart Sidebar
```
┌───────────────────────────┐
│ Cart           ✕         │
├───────────────────────────┤
│                           │
│ [img] Product Name        │
│       Qty: 1  $99.00     │
│                           │
├───────────────────────────┤
│                           │
│ [img] Product Name        │
│       Qty: 2  $198.00    │
│                           │
├═══════════════════════════┤
│ Subtotal:        $297.00 │
│                           │
│ ┌───────────────────────┐ │
│ │   CHECKOUT            │ │
│ └───────────────────────┘ │
└───────────────────────────┘
```
- Slides in from right
- White background
- Gold accents
- Warm grey header

---

### Footer
```
┌────────────────────────────────────────────────────────┐
│ ▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂▂ │ ← Gold top border
│                                                        │
│     SHOP     ABOUT     CONTACT     TERMS     PRIVACY │
│     (underline animation on hover)                    │
│                                                        │
└────────────────────────────────────────────────────────┘
```
- Dark charcoal background
- Gold border on top
- White/warm grey text
- Link underline animations

---

### Form Inputs
```
Email Address
┌────────────────────────────────┐
│ you@example.com                │
└────────────────────────────────┘
    ↓ (focus)
┌────────────────────────────────┐
│ you@example.com                │ ← Gold border + glow
└────────────────────────────────┘
```

---

## 🎭 Animation Examples

### Hover Effects
- **Links**: Color changes to gold (150ms)
- **Buttons**: Background changes + lifts 2px (300ms)
- **Cards**: Shadow increases + lifts 8px (300ms)
- **Images**: Scales to 1.05 (500ms)

### Loading State
```
▓▓▓▓▓▓▓░░░░░░░░░░░░  → shimmer animation
```

### Underline Animation
```
Link Text
         → Link Text
            ▔▔▔▔▔▔▔▔  (gold line expands from center)
```

---

## 📐 Spacing System

```
xs   ▌ 4px
sm   ▌▌ 8px
md   ▌▌▌▌ 16px
lg   ▌▌▌▌▌▌ 24px
xl   ▌▌▌▌▌▌▌▌ 32px
2xl  ▌▌▌▌▌▌▌▌▌▌▌▌ 48px
3xl  ▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌▌ 64px
```

---

## 🔤 Typography Scale

```
H1   Sacred Line Studio     (48px / 3rem)
H2   Featured Collection    (36px / 2.25rem)
H3   Product Category       (30px / 1.875rem)
H4   Product Title          (24px / 1.5rem)
H5   Section Label          (20px / 1.25rem)
H6   Subsection             (16px / 1rem)
P    Body text             (16px / 1rem)
```

**Fonts:**
- Headings: Playfair Display (serif, elegant)
- Body: Inter (sans-serif, clean)

---

## 📱 Responsive Breakpoints

```
Mobile      Tablet        Desktop
< 768px     768-1024px    > 1024px
┌─────┐    ┌─────────┐   ┌──────────────┐
│  1  │    │  2  │ 2 │   │ 4 │ 4 │ 4 │ 4 │
│  1  │    │  2  │ 2 │   │ 4 │ 4 │ 4 │ 4 │
└─────┘    └─────────┘   └──────────────┘
```

---

## 🎯 Focus States

All interactive elements:
```
┌──────────────┐
│   Button     │
└──────────────┘
     ↓ (tab focus)
╔══════════════╗  ← Gold outline (2px)
║   Button     ║     2px offset
╚══════════════╝
```

---

## ✨ Sacred Geometry Element

```
    ✦     ← Star/flower pattern
         (subtle, decorative)
         Used as section dividers
```

---

## 🌈 Gradient Accents

Used sparingly for visual interest:
```
Gold → Terracotta → Sage
▓▓▓▓▓▒▒▒▒▒░░░░░
```

Applications:
- Top accent line on product cards
- Section dividers
- Badge backgrounds

---

## 🎨 Design Philosophy

### Visual Hierarchy
```
1. Large serif headings (attention)
2. Gold accents (emphasis)
3. Clean body text (readability)
4. Subtle animations (delight)
```

### Spacing Rhythm
```
Tight    → UI elements, badges
Medium   → Cards, sections
Generous → Page layout, major sections
```

### Color Strategy
```
Neutral base (warm grey/beige)
+ Dark charcoal (structure)
+ Gold accents (emphasis)
+ Earth tones (character)
= Elegant, sophisticated, spiritual
```

---

## 💡 Key Design Features

✅ Sophisticated serif + sans-serif pairing
✅ Warm, earthy color palette with gold accents
✅ Generous white space for breathing room
✅ Subtle animations that don't distract
✅ Consistent hover/focus states
✅ Accessible contrast ratios
✅ Mobile-first responsive design
✅ Premium feel with shadows and depth
✅ Sacred geometry influences
✅ Professional e-commerce aesthetic

---

## 🚀 Live Preview

To see these designs in action:
1. Make sure dev server is running: `npm run dev`
2. Open browser to local URL
3. Navigate through different pages
4. Try hover effects and interactions
5. Test on different screen sizes

---

**Sacred Line Studio** - Elegant, spiritual, and refined. ✨
