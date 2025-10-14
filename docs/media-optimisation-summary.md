### Summary
This pull request introduces a targeted media optimisation and SEO improvement pass for DovecoteEstate.com.au.  
Large PNG and JPG assets have been converted to modern WebP format for faster load speeds, while maintaining originals for compatibility.  
A new Open Graph image has been added for improved link previews and social share performance.

### Key Updates
✅ Added `dovecote-og-1200x630.jpg` under `public/assets/og/` for social sharing and structured data.  
✅ Generated WebP versions for all heavy hero and banner images in `public/assets/` (94–96% reduction in file size).  
✅ Updated `package.json` and `package-lock.json` to include Sharp (image processing dependency).  
✅ No modifications made to `/client/src/data/`, JDR content, or Available Lots data.

### Impact
- Improves Core Web Vitals and LCP scores.
- Enhances Open Graph and Twitter card visibility.
- Optimises media delivery for SEO and UX without altering visible design or content.

### Next Steps
After merging:
1. Run `git pull` on main in Replit.
2. Deploy as usual.
3. Validate image references and OG tags in the live build via [https://pagespeed.web.dev](https://pagespeed.web.dev) and the Meta Debugger.
