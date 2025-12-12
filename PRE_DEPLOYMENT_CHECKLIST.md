# Pre-Deployment Checklist

**Project:** AGENCE Fouad ABI - Insurance Agency  
**Date:** 2025-01-27  
**Auditor:** Senior Full-Stack Engineer

---

## ✅ 1. Build & Dependencies

### Build
- [x] `npm install` - successful ✅
- [x] `npm run build` - successful ✅
- [x] No build errors ✅
- [x] Acceptable bundle size (204 KB) ✅

### Dependencies
- [x] `npm audit` - 0 vulnerabilities ✅
- [x] All dependencies updated ✅
- [ ] Can remove unused dependencies (optional)

---

## ✅ 2. Environment Variables

### Production Environment
- [ ] Create `.env.production` (or configure in Vercel/similar)
- [ ] Set `NEXT_PUBLIC_SITE_URL=https://agence-lovabel.ma`
- [ ] Ensure `.env` not in git

**Verification:**
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://agence-lovabel.ma
```

---

## ✅ 3. Configuration Files

### next.config.js
- [x] Static export config correct ✅
- [x] Images config correct ✅

### tsconfig.json
- [x] Strict mode enabled ✅
- [x] Paths config correct ✅

### package.json
- [x] Scripts correct ✅
- [x] Dependencies specified ✅

---

## ✅ 4. SEO & Metadata

### Meta Tags
- [x] Title tag present ✅
- [x] Description present ✅
- [x] Open Graph tags present ✅
- [x] Twitter Cards present ✅

### Structured Data
- [x] Schema.org structured data present ✅
- [ ] Can add FAQPage structured data (optional)
- [ ] Can add Review structured data (optional)

### Sitemap & Robots
- [x] sitemap.xml present ✅
- [ ] Update lastmod in sitemap.xml
- [x] robots.txt present ✅
- [ ] Add Sitemap URL in robots.txt

**Verification:**
```xml
<!-- sitemap.xml -->
<lastmod>2025-01-27</lastmod>
```

```txt
# robots.txt
Sitemap: https://agence-lovabel.ma/sitemap.xml
```

---

## ✅ 5. Security

### Links
- [x] All external links contain `rel="noopener noreferrer"` ✅
- [x] No secrets in code ✅

### Security Headers (Server/CDN)
- [ ] Add X-Content-Type-Options
- [ ] Add X-Frame-Options
- [ ] Add X-XSS-Protection
- [ ] Add Content-Security-Policy
- [ ] Add Referrer-Policy

**Example (Nginx):**
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

---

## ✅ 6. Performance

### Build Output
- [x] Acceptable bundle size ✅
- [x] First Load JS: 204 KB ✅

### Images
- [x] Next.js Image component used ✅
- [x] Images optimized ✅
- [ ] Can optimize image sizes further (optional)

---

## ✅ 7. Accessibility

### ARIA
- [x] ARIA labels present ✅
- [x] Roles specified ✅
- [x] States specified (aria-expanded, aria-current) ✅

### Images
- [x] Alt text present ✅

### Keyboard Navigation
- [x] Skip links present ✅
- [ ] Can improve focus indicators (optional)

---

## ✅ 8. Testing

### Build Test
- [x] Build successful ✅
- [x] Lint successful ✅

### Manual Testing
- [ ] Test all links
- [ ] Test language switching
- [ ] Test responsive design
- [ ] Test mobile menu
- [ ] Test all sections
- [ ] Test forms (if present)

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## ✅ 9. URLs & Links

### Internal Links
- [ ] Test all anchor links (#services, #contact, etc.)
- [ ] Test navigation links

### External Links
- [ ] Test all external links
- [ ] Verify URL correctness

---

## ✅ 10. Content

### Text
- [ ] Review all text
- [ ] Verify translation correctness (AR/FR)
- [ ] Verify no spelling errors

### Images
- [ ] Verify all images present
- [ ] Verify image sizes appropriate

---

## ✅ 11. Domain & Hosting

### Domain
- [ ] Link domain to hosting
- [ ] Configure SSL/HTTPS
- [ ] Verify DNS records

### Hosting (Vercel example)
- [ ] Link GitHub/GitLab repository
- [ ] Configure Environment Variables
- [ ] Configure Build settings
- [ ] Test deployment

---

## ✅ 12. Monitoring & Analytics

### Analytics (Optional)
- [ ] Setup Google Analytics (if desired)
- [ ] Setup Google Search Console

### Monitoring
- [ ] Setup error tracking (Sentry example)
- [ ] Setup uptime monitoring

---

## ✅ 13. Final Checks

### Before Deploy
- [ ] Review all report files
- [ ] Review CODE_HEALTH_SCORE.md
- [ ] Review SECURITY_AUDIT.md
- [ ] Review SEO_REPORT.md
- [ ] Review ACCESSIBILITY_REPORT.md

### After Deploy
- [ ] Test website after deployment
- [ ] Test all links
- [ ] Test HTTPS
- [ ] Test mobile view
- [ ] Test language switching

---

## 📝 Quick Deployment Guide

### 1. Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
NEXT_PUBLIC_SITE_URL=https://agence-lovabel.ma
```

### 2. Static Hosting (GitHub Pages, Netlify, etc.)

```bash
# Build
npm run build

# Output will be in 'out' directory
# Upload 'out' directory to hosting provider
```

---

## ⚠️ Important Notes

1. **Environment Variables:** Ensure `NEXT_PUBLIC_SITE_URL` is set in production
2. **Security Headers:** Must be added at Server/CDN level
3. **Sitemap:** Update lastmod before deployment
4. **Testing:** Test website in different browsers

---

## ✅ Status Summary

### Critical (Must Do)
- [x] Build successful ✅
- [ ] Set `NEXT_PUBLIC_SITE_URL` ⚠️
- [ ] Test all links ⚠️
- [ ] Configure security headers ⚠️

### Important (Should Do)
- [ ] Update sitemap lastmod ⚠️
- [ ] Add sitemap to robots.txt ⚠️
- [ ] Manual testing ⚠️
- [ ] Browser testing ⚠️

### Optional (Nice to Have)
- [ ] Add FAQPage structured data
- [ ] Add Review structured data
- [ ] Improve focus indicators
- [ ] Add analytics

---

**Prepared by:** Senior Full-Stack Engineer  
**Date:** 2025-01-27