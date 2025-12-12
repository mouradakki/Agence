# قائمة فحص ما قبل النشر - Pre-Deployment Checklist

**المشروع:** AGENCE Fouad ABI - وكالة فؤاد ABI للتأمين  
**تاريخ الإعداد:** 2025-01-27  
**المدقق:** Senior Full-Stack Engineer

---

## ✅ 1. Build & Dependencies

### Build
- [x] `npm install` - نجح ✅
- [x] `npm run build` - نجح ✅
- [x] لا توجد أخطاء في البناء ✅
- [x] Bundle size مقبول (204 KB) ✅

### Dependencies
- [x] `npm audit` - 0 vulnerabilities ✅
- [x] جميع dependencies محدثة ✅
- [ ] يمكن إزالة dependencies غير المستخدمة (اختياري)

---

## ✅ 2. Environment Variables

### Production Environment
- [ ] إنشاء `.env.production` (أو ضبط في Vercel/similar)
- [ ] ضبط `NEXT_PUBLIC_SITE_URL=https://agence-lovabel.ma`
- [ ] التأكد من عدم وجود `.env` في git

**التحقق:**
```bash
# .env.production
NEXT_PUBLIC_SITE_URL=https://agence-lovabel.ma
```

---

## ✅ 3. Configuration Files

### next.config.js
- [x] Static export config صحيح ✅
- [x] Images config صحيح ✅

### tsconfig.json
- [x] Strict mode مفعّل ✅
- [x] Paths config صحيح ✅

### package.json
- [x] Scripts صحيحة ✅
- [x] Dependencies محددة ✅

---

## ✅ 4. SEO & Metadata

### Meta Tags
- [x] Title tag موجود ✅
- [x] Description موجود ✅
- [x] Open Graph tags موجودة ✅
- [x] Twitter Cards موجودة ✅

### Structured Data
- [x] Schema.org structured data موجود ✅
- [ ] يمكن إضافة FAQPage structured data (اختياري)
- [ ] يمكن إضافة Review structured data (اختياري)

### Sitemap & Robots
- [x] sitemap.xml موجود ✅
- [ ] تحديث lastmod في sitemap.xml
- [x] robots.txt موجود ✅
- [ ] إضافة Sitemap URL في robots.txt

**التحقق:**
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
- [x] جميع الروابط الخارجية تحتوي `rel="noopener noreferrer"` ✅
- [x] لا توجد secrets في الكود ✅

### Security Headers (Server/CDN)
- [ ] إضافة X-Content-Type-Options
- [ ] إضافة X-Frame-Options
- [ ] إضافة X-XSS-Protection
- [ ] إضافة Content-Security-Policy
- [ ] إضافة Referrer-Policy

**مثال (Nginx):**
```nginx
add_header X-Content-Type-Options "nosniff" always;
add_header X-Frame-Options "DENY" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

---

## ✅ 6. Performance

### Build Output
- [x] Bundle size مقبول ✅
- [x] First Load JS: 204 KB ✅

### Images
- [x] Next.js Image component مستخدم ✅
- [x] Images محسّنة ✅
- [ ] يمكن تحسين حجم الصور أكثر (اختياري)

---

## ✅ 7. Accessibility

### ARIA
- [x] ARIA labels موجودة ✅
- [x] Roles محددة ✅
- [x] States محددة (aria-expanded, aria-current) ✅

### Images
- [x] Alt text موجود ✅

### Keyboard Navigation
- [x] Skip links موجودة ✅
- [ ] يمكن تحسين focus indicators (اختياري)

---

## ✅ 8. Testing

### Build Test
- [x] Build نجح ✅
- [x] Lint نجح ✅

### Manual Testing
- [ ] اختبار جميع الروابط
- [ ] اختبار language switching
- [ ] اختبار responsive design
- [ ] اختبار mobile menu
- [ ] اختبار جميع sections
- [ ] اختبار forms (إن وُجدت)

### Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

---

## ✅ 9. URLs & Links

### Internal Links
- [ ] اختبار جميع anchor links (#services, #contact, etc.)
- [ ] اختبار navigation links

### External Links
- [ ] اختبار جميع الروابط الخارجية
- [ ] التأكد من صحة URLs

---

## ✅ 10. Content

### Text
- [ ] مراجعة جميع النصوص
- [ ] التأكد من الترجمة الصحيحة (AR/FR)
- [ ] التأكد من عدم وجود أخطاء إملائية

### Images
- [ ] التأكد من وجود جميع الصور
- [ ] التأكد من حجم الصور مناسب

---

## ✅ 11. Domain & Hosting

### Domain
- [ ] ربط domain بالـ hosting
- [ ] إعداد SSL/HTTPS
- [ ] التأكد من DNS records

### Hosting (Vercel مثال)
- [ ] ربط GitHub/GitLab repository
- [ ] ضبط Environment Variables
- [ ] ضبط Build settings
- [ ] اختبار deployment

---

## ✅ 12. Monitoring & Analytics

### Analytics (اختياري)
- [ ] إعداد Google Analytics (إن أردت)
- [ ] إعداد Google Search Console

### Monitoring
- [ ] إعداد error tracking (Sentry مثال)
- [ ] إعداد uptime monitoring

---

## ✅ 13. Final Checks

### Before Deploy
- [ ] مراجعة جميع ملفات التقارير
- [ ] مراجعة CODE_HEALTH_SCORE.md
- [ ] مراجعة SECURITY_AUDIT.md
- [ ] مراجعة SEO_REPORT.md
- [ ] مراجعة ACCESSIBILITY_REPORT.md

### After Deploy
- [ ] اختبار الموقع بعد النشر
- [ ] اختبار جميع الروابط
- [ ] اختبار HTTPS
- [ ] اختبار mobile view
- [ ] اختبار language switching

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

1. **Environment Variables:** تأكد من ضبط `NEXT_PUBLIC_SITE_URL` في production
2. **Security Headers:** يجب إضافتها في Server/CDN level
3. **Sitemap:** تحديث lastmod قبل النشر
4. **Testing:** اختبر الموقع في browsers مختلفة

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

**تم الإعداد بواسطة:** Senior Full-Stack Engineer  
**التاريخ:** 2025-01-27
