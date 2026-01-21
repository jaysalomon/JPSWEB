# JP Salomon | Personal Website

Personal website and portfolio for JP Salomon — Independent Researcher & Technical Architect.

## 🌐 Live Site

Visit: [jpsalomon.com](https://jpsalomon.com) *(or your GitHub Pages URL)*

## 📁 Structure

```
├── index.html          # Main website
├── css/styles.css      # Custom styling
├── js/
│   ├── main.js         # Core functionality
│   └── manifest.js     # Auto-generated content manifest
├── assets/
│   ├── images/         # Book covers, photos
│   ├── videos/         # Featured talks
│   └── papers/         # Downloadable PDFs
└── update_site_manifest.ps1  # Script to regenerate manifest
```

## 🛠 Development

**Local preview:**

```bash
python -m http.server 8000
# Open http://localhost:8000
```

**After adding new videos or papers:**

```powershell
.\update_site_manifest.ps1
```

## 📚 Featured Content

- **Book:** *Decline: A Systems Study* — Available on Amazon
- **Papers:** Research on AI alignment, cognitive topology, complexity science
- **Videos:** Featured talks on intelligence, architecture, and systems

## 📄 License

Content © JP Salomon. All rights reserved.
