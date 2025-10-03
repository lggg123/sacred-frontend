# Products Not Showing - Diagnostic Guide

## Current Status

✅ No console errors  
✅ Environment variables correct  
✅ Connected to store: `stx7iu-x1.myshopify.com`  
❌ Storefront API returns 0 products  

## Why This Happens

The Shopify **Storefront API** (used by Hydrogen) only shows products that are:
1. ✅ Published
2. ✅ Available for sale
3. ✅ **Published to the correct sales channel**

Your products might exist in Shopify admin but not be visible to the Storefront API.

---

## How to Fix: Publish Products to Hydrogen

### Step 1: Check if Products Exist

1. Go to: https://admin.shopify.com/store/stx7iu-x1/products
2. Do you see products listed?
   - **If NO** → You need to add products (see Step 3)
   - **If YES** → Continue to Step 2

### Step 2: Publish Products to Hydrogen Storefront

For EACH product:

1. **Open the product** in your Shopify admin
2. **Scroll down to "Product availability"** section
3. **Look for sales channels:**
   - Should see "Headless" or "Sacred Line Studio" 
   - Make sure it's **CHECKED** ✅
4. **If not checked:**
   - Check the box
   - Click "Save"
5. **Repeat for all products**

**OR use bulk actions:**

1. In Products page, select all products (checkbox at top)
2. Click "More actions" dropdown
3. Select "Make products available"
4. Choose "Headless" or your Hydrogen storefront
5. Click "Save"

### Step 3: If No Products Exist

You mentioned you have Printful products. Here's how to add them:

#### Option A: Import from Printful
1. Go to Printful app in your Shopify admin
2. Find your designs
3. Click "Publish to store"
4. Make sure "Headless" channel is selected

#### Option B: Create Test Products Manually
1. Go to Products → Add product
2. Add title, description, price
3. Add an image
4. **Important:** In "Product availability" section:
   - Check "Headless" or your Hydrogen storefront
5. Click "Save"

---

## Quick Test: Add One Test Product

Let's verify the setup works with one test product:

1. **Go to**: https://admin.shopify.com/store/stx7iu-x1/products/new

2. **Fill in:**
   - Title: "Test Sacred Line Product"
   - Description: "This is a test"
   - Price: $99.00
   - Add any image (can use a placeholder)

3. **Product availability:**
   - ✅ Check "Headless" or "Sacred Line Studio"
   - ✅ Check "Online Store" (if you want)

4. **Click "Save"**

5. **Refresh your Hydrogen dev site**
   - You should now see 1 product!

---

## Verify Products Are Published

After publishing products, verify they're visible to the API:

```bash
# Run this in terminal to check:
curl -s -X POST \
  "https://stx7iu-x1.myshopify.com/api/2024-10/graphql.json" \
  -H "Content-Type: application/json" \
  -H "X-Shopify-Storefront-Access-Token: 82c7d1f918a145e14dede6b2d4b22da2" \
  -d '{"query":"{ products(first: 5) { nodes { id title } } }"}' | python3 -m json.tool
```

If you see products listed, refresh your dev site!

---

## About Sales Channels

### What is a Sales Channel?
- A place where your products can be sold
- Examples: Online Store, Hydrogen storefront, Mobile app, etc.

### Why Does This Matter?
- Products must be published to a channel to be visible there
- Your Hydrogen storefront is a separate channel from your Online Store
- Products published to "Online Store" won't automatically show in Hydrogen

### How to Check Your Hydrogen Channel

1. Go to: https://admin.shopify.com/store/stx7iu-x1/settings/channels
2. Look for "Headless" or "Sacred Line Studio"
3. This is your Hydrogen sales channel

---

## Common Scenarios

### Scenario 1: Products Exist but Not Published to Hydrogen
**Fix:** Publish products to Hydrogen channel (Step 2 above)

### Scenario 2: No Products in Store
**Fix:** Add products or import from Printful (Step 3 above)

### Scenario 3: Printful Products Not Syncing
**Fix:** 
1. Open Printful app
2. Check sync settings
3. Make sure Hydrogen channel is enabled
4. Manually push products if needed

---

## Testing Checklist

After publishing products:

- [ ] At least 1 product exists in Shopify admin
- [ ] Product is published (not draft)
- [ ] Product has "Headless" channel checked
- [ ] Product has price and image
- [ ] Run API test command (shows products)
- [ ] Refresh Hydrogen dev site
- [ ] Products appear on homepage!

---

## Still Not Working?

### Share This Info:
1. **Do products exist in admin?**
   - Visit: https://admin.shopify.com/store/stx7iu-x1/products
   - How many products do you see?

2. **Are they published?**
   - Click on a product
   - Check "Product availability"
   - Which channels are checked?

3. **What does the API test show?**
   - Run the curl command above
   - Copy/paste the result

---

## Quick Links

- **Products**: https://admin.shopify.com/store/stx7iu-x1/products
- **Channels**: https://admin.shopify.com/store/stx7iu-x1/settings/channels
- **Hydrogen**: https://admin.shopify.com/store/stx7iu-x1/hydrogen

---

## Expected Result

Once products are published to the Hydrogen channel:

✅ API returns products  
✅ Homepage shows products in the grid  
✅ Beautiful Sacred Line Studio design displays your products  
✅ Everything just works! 🎉

The design system is ready - it's just waiting for products to display!
