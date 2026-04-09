# Shamit Fatin - Research Profile

A Shibuya punk / Persona 5-inspired research profile website with bold asymmetric design.

## Files Structure

```
/
├── index.html              # Main HTML file
├── styles.css              # All CSS styling
├── script.js              # JavaScript for loading JSON data
├── data/
│   ├── publications.json  # Your publications data
│   └── timeline.json      # Your life stages/timeline data
└── README.md              # This file
```

## How to Use

### 1. **Local Development**
Simply open `index.html` in your browser. The page will automatically load data from the JSON files.

### 2. **Editing Your Information**

#### Update Publications
Edit `data/publications.json`:
```json
{
  "name": "Your Paper Title",
  "abstract": "Your paper abstract",
  "year": 2026,
  "coAuthors": ["Author 2", "Author 3"],
  "venue": "Conference/Journal Name",
  "type": "conference",
  "link": "https://link-to-paper.com"
}
```

#### Update Timeline
Edit `data/timeline.json`:
- The **first item (index 0)** is automatically displayed as "CURRENT"
- When you get a new position, just add it at the top!

```json
{
  "period": "2025 - Present",
  "type": "education",
  "title": "Your Position",
  "organization": "Your Organization",
  "description": "Brief description"
}
```

Available types: `"education"`, `"work"`, `"achievement"`

#### Update Your Photo
Replace the image URL in `index.html` (line ~27) with your own photo URL.

#### Update Footer Links
Edit the `<a href="#">` tags in the footer section of `index.html` with your actual profile URLs:
- CV
- LinkedIn
- Google Scholar
- DBLP
- GitHub
- Instagram

### 3. **Hosting**

You can host this on any static site hosting service:

- **GitHub Pages**: Push to a repository and enable GitHub Pages
- **Netlify**: Drag and drop the folder
- **Vercel**: Import from Git or deploy manually
- **Any web server**: Upload all files maintaining the folder structure

## Features

✨ **Persona 5-inspired design** with red and black color scheme
✨ **Asymmetric layouts** with diagonal cuts and skewed elements
✨ **Rebellious typography** using Bebas Neue and Rajdhani fonts
✨ **JSON-powered content** for easy updates
✨ **Expandable publication abstracts**
✨ **Responsive design** works on mobile and desktop
✨ **Zero dependencies** - pure HTML, CSS, and vanilla JavaScript

## Customization

All styling is in `styles.css`. Key color variables are at the top:

```css
:root {
    --color-red: #E60012;
    --color-black: #000000;
    --color-white: #ffffff;
    --color-gold: #FFD700;
}
```

Change these to customize the color scheme!

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).

---

Made with ❤️ and inspired by Persona 5's bold aesthetics
