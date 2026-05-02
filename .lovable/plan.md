# Generate Static Portfolio ZIP

Create a standalone, frontend-only static version of the portfolio and package it as a ZIP file ready for Netlify drag-and-drop deployment.

## Output
- File: `/mnt/documents/byneedi-bhargavi-portfolio.zip`
- Delivered as a downloadable artifact in chat

## Structure inside ZIP
```
dist/
├── index.html          (all sections: Hero, About, Education, Experience, Skills, Services, Projects, Contact)
├── _redirects          (Netlify SPA fallback)
└── assets/
    ├── css/style.css   (dark theme, glassmorphism, responsive grid/flex, scroll animations)
    └── js/script.js    (sticky nav, mobile menu, IntersectionObserver reveals, EmailJS form)
```

## Technical Details
- **Pure HTML5 / CSS3 / ES6** — no frameworks, no build tools
- **EmailJS** integrated via CDN with existing credentials (`service_b97qqjf`, `template_xqmkiis`, public key `QUrsaOkq3heMrkgS2`)
- **Resume button** linked to existing Cloudinary URL
- **Content** mirrors current React site (Byneedi Bhargavi, AIML Engineer, Retech internship, projects, skills)
- **Fonts** loaded from Google Fonts (Space Grotesk + Inter)
- **Responsive** mobile + desktop with hamburger menu
- **Animations** scroll-reveal via IntersectionObserver, hover effects, smooth scrolling

## Steps
1. Build `dist/` folder with `index.html`, `style.css`, `script.js`, `_redirects`
2. Zip to `/mnt/documents/byneedi-bhargavi-portfolio.zip`
3. Return download artifact

Approve and I'll generate it.