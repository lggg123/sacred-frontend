# Sacred Line Studio

Sacred Line Studio's headless e-commerce storefront built with Shopify Hydrogen and Remix.

**A sophisticated, spiritual e-commerce experience with custom design system.**

## 🎨 Design System

This project features a comprehensive custom design system with:
- **Sacred Gold** (#d4af37) accent color
- **Playfair Display** serif headings + **Inter** body text
- Elegant hover effects and smooth transitions
- Accessible, responsive design
- Sacred geometry influences

📖 **[Full Design System Documentation](DESIGN_SYSTEM.md)**  
🚀 **[Quick Style Guide](STYLE_GUIDE.md)**  
✨ **[Visual Preview](VISUAL_PREVIEW.md)**

[Check out Hydrogen docs](https://shopify.dev/custom-storefronts/hydrogen)
[Get familiar with Remix](https://remix.run/docs/en/v1)

## What's included

- Remix
- Hydrogen
- Oxygen
- Vite
- Shopify CLI
- ESLint
- Prettier
- GraphQL generator
- TypeScript and JavaScript flavors
- Minimal setup of components and routes

## Getting started

**Requirements:**

- Node.js version 18.0.0 or higher

**Setup:**

1. Install dependencies:
```bash
npm install
```

2. Link to your Shopify store:
```bash
npx shopify hydrogen link
```

3. Pull environment variables:
```bash
npx shopify hydrogen env pull
```

## Building for production

```bash
npm run build
```

## Local development

```bash
npm run dev
```

## Setup for using Customer Account API (`/account` section)

Follow step 1 and 2 of <https://shopify.dev/docs/custom-storefronts/building-with-the-customer-account-api/hydrogen#step-1-set-up-a-public-domain-for-local-development>
