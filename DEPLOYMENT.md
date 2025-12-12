# 🚀 دليل النشر - AGENCE Fouad ABI

## 📋 قائمة التحقق قبل النشر

### ✅ 1. إعداد متغيرات البيئة

أنشئ ملف `.env.local` في جذر المشروع:

```env
NEXT_PUBLIC_SITE_URL=https://agence-lovabel.ma
```

**ملاحظة:** استبدل `agence-lovabel.ma` بالدومين الفعلي للموقع.

---

### ✅ 2. تحديث الدومين في جميع الملفات

بعد تحديد الدومين النهائي، تأكد من تحديث:

- ✅ `app/layout.tsx` - جميع روابط `NEXT_PUBLIC_SITE_URL`
- ✅ `app/page.tsx` - روابط Structured Data
- ✅ `public/sitemap.xml` - روابط Sitemap
- ✅ `public/.well-known/security.txt` - رابط Canonical
- ✅ `README.md` - أمثلة الدومين

---

### ✅ 3. فحص الأمان

```bash
# فحص الثغرات الأمنية
npm audit

# إصلاح الثغرات تلقائياً
npm audit fix

# إذا لم يتم الإصلاح تلقائياً
npm update
```

---

### ✅ 4. بناء المشروع محلياً

```bash
# تثبيت المكتبات
npm install

# بناء المشروع
npm run build

# التحقق من وجود مجلد out/
ls out/  # أو dir out/ في Windows
```

**التحقق:**

- ✅ لا توجد أخطاء في البناء
- ✅ مجلد `out/` موجود ويحتوي على الملفات
- ✅ جميع الصور موجودة في `out/`

---

### ✅ 5. اختبار محلي (اختياري)

```bash
# استخدام serve لتجربة الموقع المبنى
npx serve out

# أو استخدام http-server
npx http-server out -p 3000
```

افتح `http://localhost:3000` وتأكد من:

- ✅ الموقع يعمل بشكل صحيح
- ✅ تبديل اللغة يعمل
- ✅ جميع الصور تظهر
- ✅ الروابط تعمل

---

## 🌐 خيارات النشر

### خيار 1: Vercel (موصى به لـ Next.js) ⭐

1. **إنشاء حساب على Vercel:**

   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول بحساب GitHub

2. **ربط المشروع:**

   ```bash
   # تثبيت Vercel CLI
   npm i -g vercel

   # تسجيل الدخول
   vercel login

   # نشر المشروع
   vercel --prod
   ```

3. **إعداد متغيرات البيئة:**

   - في لوحة تحكم Vercel
   - Settings → Environment Variables
   - أضف: `NEXT_PUBLIC_SITE_URL` = `https://your-domain.com`

4. **إعداد الدومين:**
   - Settings → Domains
   - أضف الدومين الخاص بك
   - اتبع التعليمات لإعداد DNS

---

### خيار 2: Netlify

1. **إنشاء حساب على Netlify:**

   - اذهب إلى [netlify.com](https://netlify.com)

2. **ربط المشروع:**

   - اربط مع GitHub repository
   - أو اسحب مجلد `out/` إلى Netlify Drop

3. **إعدادات البناء:**

   ```
   Build command: npm run build
   Publish directory: out
   ```

4. **إعداد متغيرات البيئة:**
   - Site settings → Environment variables
   - أضف: `NEXT_PUBLIC_SITE_URL`

---

### خيار 3: GitHub Pages

1. **إعداد GitHub Actions:**

   - أنشئ `.github/workflows/deploy.yml`

2. **رفع الملفات:**

   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

3. **إعدادات Repository:**
   - Settings → Pages
   - Source: GitHub Actions

---

### خيار 4: استضافة ثابتة (cPanel/FTP)

1. **بناء المشروع:**

   ```bash
   npm run build
   ```

2. **رفع الملفات:**

   - ارفع جميع محتويات مجلد `out/` إلى `public_html/`
   - استخدم FTP client مثل FileZilla

3. **إعدادات DNS:**
   - أضف A record يشير إلى IP الخادم
   - أو CNAME إذا كان subdomain

---

## 🔒 إعدادات الأمان بعد النشر

### 1. تفعيل HTTPS

- **Vercel/Netlify:** تلقائي ✅
- **استضافة أخرى:** قم بشراء SSL certificate أو استخدم Let's Encrypt (مجاني)

### 2. إعداد Security Headers

إذا كنت تستخدم استضافة عادية، أضف في `.htaccess`:

```apache
<IfModule mod_headers.c>
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-Content-Type-Options "nosniff"
  Header set X-XSS-Protection "1; mode=block"
  Header set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"
  Header set Referrer-Policy "origin-when-cross-origin"
</IfModule>
```

---

## 📊 بعد النشر - خطوات مهمة

### 1. إضافة الموقع إلى Google Search Console

1. اذهب إلى [search.google.com/search-console](https://search.google.com/search-console)
2. أضف الموقع
3. تحقق من الملكية (DNS أو HTML file)
4. أرسل Sitemap: `https://your-domain.com/sitemap.xml`

### 2. اختبار SEO

استخدم أدوات:

- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)

**أهداف:**

- Performance: 90+
- SEO: 100
- Accessibility: 90+
- Best Practices: 90+

### 3. إضافة Google Analytics (اختياري)

1. أنشئ حساب على [analytics.google.com](https://analytics.google.com)
2. احصل على Tracking ID
3. أضف في `app/layout.tsx`:

```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-XXXXXXXXXX');
  `}
</Script>
```

---

## 🐛 حل المشاكل الشائعة

### المشكلة: الصور لا تظهر

**الحل:** تأكد من رفع جميع الملفات من `out/` وليس المجلد نفسه

### المشكلة: تبديل اللغة لا يعمل

**الحل:** تأكد من رفع جميع ملفات JavaScript من `out/_next/`

### المشكلة: 404 على الصفحات

**الحل:** تأكد من إعداد `trailingSlash: true` في `next.config.js` إذا لزم الأمر

### المشكلة: الموقع بطيء

**الحل:**

- استخدم CDN (Vercel/Netlify توفره تلقائياً)
- ضغط الصور قبل الرفع
- تفعيل Gzip compression

---

## 📞 الدعم

إذا واجهت أي مشاكل:

1. راجع ملف `REVIEW_REPORT.md`
2. راجع ملف `README.md`
3. تحقق من console في المتصفح (F12)

---

## ✅ قائمة التحقق النهائية

- [ ] تم تحديث `NEXT_PUBLIC_SITE_URL` في `.env.local`
- [ ] تم تحديث جميع الروابط بالدومين الصحيح
- [ ] `npm audit` لا يظهر ثغرات حرجة
- [ ] `npm run build` يعمل بدون أخطاء
- [ ] تم اختبار الموقع محلياً
- [ ] تم رفع الملفات للاستضافة
- [ ] تم إعداد DNS
- [ ] تم تفعيل HTTPS
- [ ] تم إضافة الموقع لـ Google Search Console
- [ ] تم إرسال Sitemap
- [ ] تم اختبار الأداء (Lighthouse)

---

**تاريخ الإنشاء:** 12 يناير 2025  
**آخر تحديث:** 12 يناير 2025
