# mehrabbz.github.io

Personal academic website for Mehrab Beikzadeh — PhD Candidate, UCLA Computer Science.

---

## 📁 What's in this repo

```
mehrabbz.github.io/
├── index.html          ← the main page (edit text here)
├── README.md           ← this file
└── assets/
    ├── style.css       ← all styling (colors, fonts, layout)
    ├── script.js       ← navigation, scroll animations
    ├── cv.pdf          ← your CV (already included)
    └── portrait.jpg    ← ⚠️  YOU NEED TO ADD THIS — see below
```

---

## 🚀 How to deploy in 3 steps

### Step 1 — Create the GitHub repo

1. Go to <https://github.com/new>
2. Repository name: **`mehrabbz.github.io`** (must be exactly this — your username + `.github.io`)
3. Set it to **Public**
4. **Do not** initialize with a README/license/gitignore (we have our own files)
5. Click **Create repository**

### Step 2 — Upload all files

Easiest way (no terminal needed):

1. On the new empty repo page, click **"uploading an existing file"**
2. Drag and drop **everything inside this folder** (`index.html`, `README.md`, and the entire `assets/` folder)
3. Scroll down → commit message: `initial site` → click **Commit changes**

Or with git on your machine:

```bash
git clone https://github.com/mehrabbz/mehrabbz.github.io.git
cd mehrabbz.github.io
# copy all the files from this folder into here
git add .
git commit -m "initial site"
git push origin main
```

### Step 3 — Enable GitHub Pages

1. In your repo, go to **Settings** → **Pages** (left sidebar)
2. Under "Build and deployment" → Source: **Deploy from a branch**
3. Branch: **main** / folder: **/ (root)** → **Save**
4. Wait ~1–2 minutes
5. Visit **<https://mehrabbz.github.io>** 🎉

---

## 📸 Adding your photo

1. Pick a clean headshot — ideally portrait orientation, ~600×800px or larger
2. Rename it exactly: **`portrait.jpg`**
3. Place it in the `assets/` folder (same folder as `style.css`)
4. Commit + push (or re-upload through GitHub web UI)

> **If you don't add a photo**, the site shows an elegant red italic "M" placeholder — so it still looks great. But adding the photo is highly recommended.

> Want a different filename or format (PNG, WebP)? Open `index.html`, find `assets/portrait.jpg` (around line 90), and change it to whatever you used.

---

## ✏️ How to edit text

Everything is in `index.html`. The file is heavily commented with section markers like `<!-- ============== HERO ============== -->` so you can find what you need quickly.

| Want to change…              | Open `index.html` and find… |
| ---------------------------- | --------------------------- |
| Your name / title            | `<h1 class="display">`      |
| Bio paragraphs               | `<section id="about">`      |
| Research projects            | `<section id="research">`   |
| Publications                 | `<section id="publications">` |
| Internships / education      | `<section id="experience">` |
| Awards                       | `<section id="awards">`     |
| Personal interests           | `<section id="beyond">`     |
| Email / social links         | `<section id="contact">`    |

### ⚠️ Update these social links

Open `index.html`, search for `id="xLink"` and `id="igLink"`, and replace the placeholder URLs with your actual handles:

```html
<a href="https://x.com/YOUR_HANDLE" ... id="xLink">
<a href="https://instagram.com/YOUR_HANDLE" ... id="igLink">
```

---

## 🎨 Tweaking the colors

All colors live at the top of `assets/style.css` as CSS variables:

```css
:root {
  --bg:      #0a0a0a;     /* page background — near black */
  --crimson: #dc1f2e;     /* main accent — bold red */
  --ink:     #f4f1ec;     /* body text — warm off-white */
  /* ... */
}
```

Change one variable, save, and the entire site updates.

---

## 🧪 Test locally before pushing

If you want to preview before going live:

```bash
cd this-folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or just double-click `index.html` — it'll open directly in your browser.

---

## 🔧 Updating your CV

Replace `assets/cv.pdf` with a newer version (keep the same filename). Commit and push — done.

---

## ✅ Pre-launch checklist

- [ ] Repo is named exactly `mehrabbz.github.io`
- [ ] All files uploaded, including the `assets/` folder
- [ ] Added your `portrait.jpg` to `assets/`
- [ ] Updated X and Instagram links in `index.html`
- [ ] GitHub Pages enabled in Settings
- [ ] Visited `https://mehrabbz.github.io` and confirmed everything loads

---

Built with care · 2026
