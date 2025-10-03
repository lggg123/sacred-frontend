# Debugging: Products Not Showing

## Quick Checks

### 1. Check Browser Console
Open your browser's Developer Tools (F12 or Right-click > Inspect) and look at the Console tab for any errors.

**Common errors to look for:**
- GraphQL query errors
- Network errors
- JavaScript errors

### 2. Check Network Tab
1. Open Developer Tools > Network tab
2. Refresh the page
3. Look for GraphQL requests
4. Check if they're returning data

### 3. Visual Inspection
Open the browser and check:
- [ ] Can you see the "Recommended Products" heading?
- [ ] Can you see "Loading..." text?
- [ ] Is there a white box where products should be?
- [ ] Can you see the Featured Collection (hero image)?

### 4. Check Shopify Store
- [ ] Does your Shopify store have products?
- [ ] Are the products published?
- [ ] Is your store connected properly?

## Troubleshooting Steps

### If you see "Recommended Products" heading but no products:

**Option A: No Products in Store**
```bash
# You might not have products in your Shopify store yet
# Go to your Shopify admin and add some products
```

**Option B: GraphQL Query Issue**
Check the browser console for GraphQL errors. The query might be failing.

### If you don't see any content at all:

**Check the page structure:**
1. Right-click on the page
2. Select "Inspect Element"
3. Look for `<div class="home">` in the HTML
4. Check if `<div class="recommended-products">` exists
5. Check if `<div class="recommended-products-grid">` exists

### If products exist but are invisible:

**Check CSS:**
```bash
# Look for these classes in DevTools
.home
.recommended-products
.recommended-products-grid
.product-item
```

## Quick Fixes I've Applied

✅ Added padding to `.home` container (40px)
✅ Added max-width constraint (1400px)
✅ Added min-height to `.recommended-products` (400px)
✅ Ensured proper spacing

## Testing in Browser

### Step 1: Open DevTools Console
Press F12 or Cmd+Option+I (Mac)

### Step 2: Check for these elements
```javascript
// Paste this in the console:
console.log('Home:', document.querySelector('.home'));
console.log('Recommended Products:', document.querySelector('.recommended-products'));
console.log('Products Grid:', document.querySelector('.recommended-products-grid'));
console.log('Product Items:', document.querySelectorAll('.product-item').length);
```

### Step 3: Check Data Loading
```javascript
// Check if React is rendering the component
// You should see the structure even if no products
```

## Common Issues & Solutions

### Issue: "Products grid is empty"
**Solution**: Your Shopify store might not have products yet.
1. Go to Shopify Admin
2. Add some products
3. Make sure they're published
4. Refresh your dev site

### Issue: "Console shows GraphQL errors"
**Solution**: Check your Shopify connection
```bash
npx shopify hydrogen env pull
```

### Issue: "Everything is white/blank"
**Solution**: The CSS might need a browser refresh
- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Issue: "I see 'Loading...' forever"
**Solution**: Check the Network tab for failing requests
- The GraphQL query might be timing out
- Your store might not be connected

### Issue: "Products are there but styled incorrectly"
**Solution**: Check the ProductItem component
```bash
# Check if ProductItem.tsx is using the right classes
```

## Testing with Sample Data

If you want to test without products, you can temporarily modify `_index.tsx`:

```tsx
// Add this temporarily to see if layout works:
<div className="recommended-products">
  <h2>Recommended Products</h2>
  <div className="recommended-products-grid">
    <div className="product-item">
      <div style={{width: '100%', height: '300px', background: '#ddd'}}></div>
      <h4>Sample Product 1</h4>
      <small>$99.00</small>
    </div>
    <div className="product-item">
      <div style={{width: '100%', height: '300px', background: '#ddd'}}></div>
      <h4>Sample Product 2</h4>
      <small>$149.00</small>
    </div>
  </div>
</div>
```

## What Should You See?

### Expected Layout:
```
┌──────────────────────────────────────┐
│                                      │
│     [Featured Collection Image]     │ ← Hero section
│                                      │
└──────────────────────────────────────┘

┌──────────────────────────────────────┐
│   Recommended Products               │ ← White box
│   ───────────────                    │ ← Gold line under title
│                                      │
│  [Product] [Product] [Product] [Pr] │ ← Grid of 4
│                                      │
└──────────────────────────────────────┘
```

### On Mobile (< 768px):
- 2-column grid instead of 4
- Smaller hero image
- Stacked layout

## Still Not Working?

### Share These Details:
1. **Browser Console Errors**: Copy any red errors
2. **Network Tab**: Are GraphQL requests succeeding?
3. **What You See**: Describe exactly what's on the page
4. **Shopify Store**: Do you have products in your store?

### Quick Commands:
```bash
# Restart dev server
# Press Ctrl+C to stop, then:
npm run dev

# Check if store is connected
npx shopify hydrogen env pull

# Clear cache and restart
rm -rf node_modules/.vite
npm run dev
```

## Next Steps

1. ✅ Open your browser to the dev URL
2. ✅ Open DevTools (F12)
3. ✅ Check Console for errors
4. ✅ Check Network tab for GraphQL requests
5. ✅ Look at the page structure in Elements tab
6. ✅ Share what you find!

The most common issue is simply that there are no products in your Shopify store yet, or the GraphQL query is failing to fetch them. Let me know what you see in the console!
