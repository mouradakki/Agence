# ⚠️ تنبيه أمني - Security Notice

## المشكلة - Issue

تم اكتشاف أن ملف `.next/prerender-manifest.json` يحتوي على مفاتيح تشفير حساسة تم رفعها إلى Git repository:

- `previewModeSigningKey`: `bf7a61d4803d5f6af236d3e4ef1161f2c3dc9aafc1aeec51aa20aabd55b31bc5`
- `previewModeEncryptionKey`: `505b0a128e79de840f0020c8b0cbb05567f09c0bc32c55f3e616c3eaab277320`

هذه المفاتيح تستخدم لتوقيع وتشفير جلسات Preview Mode في Next.js.

## الإجراءات المتخذة - Actions Taken

✅ تم إزالة جميع ملفات `.next/` من Git tracking  
✅ تم التأكد من أن `.gitignore` يحتوي على `.next/` و `out/`  
✅ تم حذف الملفات من staging area (لكنها لا تزال موجودة محلياً)

## الإجراءات المطلوبة - Required Actions

### 1. إزالة المفاتيح من Git History (مهم جداً)

إذا كان Repository عام (public) أو تم مشاركته، يجب تنظيف Git History:

```bash
# استخدام git filter-branch أو BFG Repo-Cleaner
git filter-branch --force --index-filter \
  "git rm --cached --ignore-unmatch .next/prerender-manifest.json" \
  --prune-empty --tag-name-filter cat -- --all
```

**أو** إذا كان Repository جديد ولم يتم push بعد، يمكن:

```bash
# إعادة ضبط Git history
rm -rf .git
git init
git add .
git commit -m "Initial commit (cleaned)"
```

### 2. توليد مفاتيح جديدة

Next.js سيقوم بتوليد مفاتيح جديدة تلقائياً عند تشغيل `next dev` أو `next build` التالي.

### 3. إذا كان Repository تم رفعه بالفعل

إذا كان Repository موجود على GitHub/GitLab وكان عام:

1. يجب اعتبار المفاتيح معرضة للخطر
2. قم بتوليد مفاتيح جديدة
3. قم بتنظيف Git History أو إنشاء repository جديد
4. أبلغ أي فريق عمل عن المشكلة

## منع المشكلة في المستقبل

✅ `.gitignore` يحتوي على `.next/` - لا تقم بإضافة `.next/` يدوياً  
✅ دائماً تحقق من `git status` قبل الـ commit  
✅ استخدم `git check-ignore` للتحقق من أن الملفات في `.gitignore`

---

**تاريخ الاكتشاف**: $(Get-Date -Format "yyyy-MM-dd")


