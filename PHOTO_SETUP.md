# 📸 Adding Your Profile Photo

## 🎯 Quick Setup (2 minutes)

### Option 1: Replace the Placeholder (Recommended)

1. **Prepare your photo:**
   - **Format**: JPG, PNG, or WebP
   - **Size**: At least 400x400 pixels (800x800 recommended)
   - **Style**: Professional headshot or clear face photo
   - **Background**: Clean, professional background

2. **Add your photo:**
   - Rename your photo to `profile.jpg` (or `profile.png`)
   - Place it in the `public/` folder
   - Replace the existing `profile.svg` file

3. **Update the code:**
   - Change `src="/profile.svg"` to `src="/profile.jpg"` in:
     - `src/components/sections/hero.tsx` (line ~95)
     - `src/components/sections/about.tsx` (line ~45)

### Option 2: Use a Different Filename

If you want to keep a different filename:

1. **Add your photo** to the `public/` folder (e.g., `my-photo.jpg`)
2. **Update both files** to use your filename:
   ```typescript
   src="/my-photo.jpg"
   ```

## 🖼️ Photo Requirements

### **Recommended Specifications:**
- **Dimensions**: 800x800 pixels (minimum 400x400)
- **Format**: JPG, PNG, or WebP
- **File size**: Under 2MB for fast loading
- **Aspect ratio**: 1:1 (square) for best results

### **Photo Guidelines:**
- ✅ **Professional headshot** or clear face photo
- ✅ **Good lighting** - avoid shadows on face
- ✅ **Clean background** - solid color or blurred
- ✅ **High quality** - sharp and clear
- ✅ **Professional attire** - business casual or formal
- ✅ **Friendly expression** - approachable and confident

### **What to Avoid:**
- ❌ **Group photos** - should be just you
- ❌ **Casual selfies** - keep it professional
- ❌ **Dark or blurry** photos
- ❌ **Busy backgrounds** - keep it simple
- ❌ **Very old photos** - should be recent

## 🔧 Code Changes Needed

### **Hero Section** (`src/components/sections/hero.tsx`):
```typescript
// Find this line (around line 95):
<Image
  src="/profile.svg"  // ← Change this
  alt={site.name}
  fill
  className="rounded-full object-cover shadow-2xl"
  priority
/>

// Change to:
<Image
  src="/profile.jpg"  // ← Your photo filename
  alt={site.name}
  fill
  className="rounded-full object-cover shadow-2xl"
  priority
/>
```

### **About Section** (`src/components/sections/about.tsx`):
```typescript
// Find this line (around line 45):
<Image
  src="/profile.svg"  // ← Change this
  alt={site.name}
  fill
  className="rounded-full object-cover shadow-2xl"
/>

// Change to:
<Image
  src="/profile.jpg"  // ← Your photo filename
  alt={site.name}
  fill
  className="rounded-full object-cover shadow-2xl"
/>
```

## 📱 Testing Your Photo

1. **Local testing**: Run `npm run dev` and check both sections
2. **Build test**: Run `npm run build` to ensure no errors
3. **Responsive test**: Check how it looks on mobile and desktop

## 🎨 Photo Styling

Your photo will automatically get:
- **Circular crop** with rounded corners
- **Hover zoom effect** (1.05x scale)
- **Glowing border** with gradient colors
- **Shadow effects** for depth
- **Responsive sizing** for all devices

## 🚀 Advanced Customization

### **Custom Photo Sizes:**
If you want different sizes for different sections:

```typescript
// Hero section - larger photo
className="relative w-80 h-80 lg:w-96 lg:h-96"

// About section - medium photo  
className="relative w-80 h-80"
```

### **Custom Effects:**
You can modify the hover effects in the CSS:

```css
/* In src/styles/globals.css */
.profile-image::before {
  content: '';
  @apply absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl;
  animation: pulse 2s ease-in-out infinite;
}
```

## 📋 Checklist

- [ ] **Photo prepared** (800x800px, professional, good quality)
- [ ] **Photo added** to `public/` folder
- [ ] **Code updated** in hero section
- [ ] **Code updated** in about section
- [ ] **Local testing** completed
- [ ] **Build test** successful
- [ ] **Responsive testing** completed

## 🆘 Troubleshooting

### **Photo not showing:**
- Check file path in `public/` folder
- Verify filename matches exactly (case-sensitive)
- Ensure file format is supported (JPG, PNG, WebP)

### **Photo looks distorted:**
- Use a square photo (1:1 aspect ratio)
- Ensure minimum 400x400 pixels
- Check photo quality isn't too low

### **Build errors:**
- Verify file exists in `public/` folder
- Check for typos in filename
- Ensure file isn't corrupted

## 🎉 Final Result

After following these steps, you'll have:
- ✅ **Professional profile photo** in hero section
- ✅ **Matching photo** in about section
- ✅ **Responsive design** for all devices
- ✅ **Beautiful animations** and effects
- ✅ **Fast loading** optimized images

Your portfolio will look much more professional and personal! 🚀