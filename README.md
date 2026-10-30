# Haitham Al-Kamel — Portfolio

Personal portfolio website of **Haitham Al-Kamel | هيثم الكامل**, Software Developer (Istanbul, Türkiye).

Built with plain **HTML5, CSS3 and JavaScript** — no build step and no dependencies, so it is fast, SEO-friendly and can be hosted anywhere (GitHub Pages, Netlify, Vercel…).

## Features
- One immersive, interactive page — no classic menu
- Animated aurora gradients, glassmorphism (blur), noise texture and a cursor glow
- Interactive particle network background that reacts to the mouse
- Draggable 3D sphere of skills, a skill "orbit" with planets, live-typed code card
- 3D tilt cards, magnetic buttons, mouse spotlight, gradient marquee, scroll progress
- Journey timeline whose line lights up as you scroll
- Bilingual: Arabic (RTL) / English (LTR) with a language toggle (remembers the choice)
- Dark / light themes (follows the system on first visit)
- Fully responsive (desktop, tablet, mobile); respects "reduce motion"
- Data-driven content: skills, services, projects, education, experience
- Contact form with validation (email app or a form service)
- "Download CV" button
- SEO: meta tags, Open Graph, JSON-LD (schema.org Person), semantic HTML, accessibility

## Project structure
```
index.html          Page markup + icon sprite
css/style.css       All styles (design tokens, themes, RTL, responsive)
js/config.js        Email, CV path, form endpoint, social links
js/i18n.js          Interface text in English and Arabic
js/data.js          Content: skills, services, projects, education, experience
js/main.js          Interactions and rendering
assets/favicon.svg  Site icon
assets/cv/          Put your CV PDF here
```

## How to edit
| What | Where |
|---|---|
| Email, GitHub / LinkedIn links | `js/config.js` |
| CV | Save it as `assets/cv/Haitham-Al-Kamel-CV.pdf` |
| Add a project | Add an entry to `projects` in `js/data.js` (`image`, `live` and `code` are optional) |
| Add a job or dates | Add/edit entries in `experience` / `education` in `js/data.js` (`period` shows the dates) |
| Texts / translations | `js/i18n.js` |
| Colors | Variables at the top of `css/style.css` |

## Contact form
By default the form opens the visitor's email app with the message ready.
To receive messages directly, create a free form at [Formspree](https://formspree.io) and put its URL in `formEndpoint` in `js/config.js`.

## Run locally
Open `index.html` in a browser, or use the VS Code **Live Server** extension.
