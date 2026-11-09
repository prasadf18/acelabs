# ACE Labs

**AI, Cloud & Engineering.** The source code for the [ACE Labs website](https://prasadf18.github.io/acelabs/).

ACE Labs is an independent technology and product innovation lab focused on building intelligent solutions, transforming businesses, and solving complex engineering challenges. This repository is the lab's public website: a small, fast, static site with no backend, no tracking and no client-side framework.

> **Status:** early. The site is live, the structure is stable, and the content is deliberately modest. See [Content policy](#content-policy) for why.

---

## Contents

- [What is in here](#what-is-in-here)
- [Quick start](#quick-start)
- [Project structure](#project-structure)
- [Where to change things](#where-to-change-things)
- [Writing a note](#writing-a-note)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Design system](#design-system)
- [Accessibility and performance](#accessibility-and-performance)
- [Content policy](#content-policy)
- [Contact](#contact)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## What is in here

A multi-page site built with [Astro](https://astro.build) and plain TypeScript, CSS and Markdown.

| Page | Path | What it is |
| --- | --- | --- |
| Home | `/` | What the lab does, how it works, latest notes |
| Services | `/services/` | Four areas of work and how an engagement is structured |
| Systems | `/systems/` | The kinds of systems the lab focuses on (QMS, ERP, SaaS, healthcare) |
| Projects | `/projects/` | Project blueprints: reference designs, clearly labelled as ideas |
| Notes | `/notes/` | Short articles on AI, cloud and engineering, written in Markdown |
| About | `/about/` | What ACE means, principles, the founder and a FAQ |
| Contact | `/contact/` | A real email link with a prefilled message |

I chose Astro because the site is mostly content. It ships almost no JavaScript, builds to plain HTML, and lets pages share a layout and components instead of repeating the same header and footer in every file.

---

## Quick start

You need **Node.js 22.12 or newer**.

```bash
git clone https://github.com/prasadf18/acelabs.git
cd acelabs
npm install
npm run dev
```

The dev server starts at `http://localhost:4321/acelabs/`. The `/acelabs/` part is the base path, explained under [Configuration](#configuration).

Other commands:

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built `dist/` folder locally, the closest thing to production |

Before pushing a change, run `npm run build` and open the result with `npm run preview`. A passing build catches broken imports and invalid note metadata.

---

## Project structure

```text
acelabs/
├── .github/
│   └── workflows/
│       └── deploy.yml          Builds the site and publishes it to GitHub Pages
├── public/                     Files copied as-is to the site root
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/             Reusable pieces of page
│   │   ├── Cta.astro             "Get in touch" band used at the bottom of pages
│   │   ├── FaqList.astro         Collapsible question list
│   │   ├── Footer.astro
│   │   ├── Header.astro          Navigation, with the mobile menu
│   │   ├── NetworkCanvas.astro   Animated background for the home page hero
│   │   └── PageHead.astro        Title block at the top of inner pages
│   ├── config/
│   │   └── site.ts             Name, email, founder, links and navigation
│   ├── content/
│   │   └── notes/              One Markdown file per note
│   ├── content.config.ts       The shape every note must follow
│   ├── data/                   Page content kept out of the markup
│   │   ├── blueprints.ts         Project blueprints, grouped by industry
│   │   ├── faq.ts                Questions and answers
│   │   ├── services.ts           Services and engagement steps
│   │   └── systems.ts            Systems the lab focuses on
│   ├── layouts/
│   │   └── BaseLayout.astro    Head tags, header, footer and page frame
│   ├── pages/                  One file per URL
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── projects.astro
│   │   ├── services.astro
│   │   ├── systems.astro
│   │   ├── 404.astro
│   │   └── notes/
│   │       ├── index.astro       The list of notes
│   │       └── [slug].astro      One page per note
│   ├── scripts/                Small browser scripts, loaded only where needed
│   │   ├── copy-email.ts
│   │   ├── nav.ts
│   │   └── network.ts
│   ├── styles/                 All CSS, split by purpose
│   │   ├── tokens.css            Colours, fonts and sizes
│   │   ├── base.css              Resets and element defaults
│   │   ├── layout.css            Containers, sections and grids
│   │   ├── components.css        Styles for each component
│   │   └── global.css            Imports the four files above, in order
│   └── utils/
│       ├── reading-time.ts
│       └── url.ts              Builds links that respect the base path
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

The idea behind the layout is simple: **content lives in `data/`, `content/` and `config/`; markup lives in `pages/` and `components/`; looks live in `styles/`.** You can change what the site says without touching markup, and change how it looks without touching content.

---

## Where to change things

| I want to... | Edit this |
| --- | --- |
| Change the contact email, founder bio or navigation | `src/config/site.ts` |
| Add or reword a service | `src/data/services.ts` |
| Add a system area | `src/data/systems.ts` |
| Add a project blueprint | `src/data/blueprints.ts` |
| Add a FAQ entry | `src/data/faq.ts` |
| Write a new note | A new file in `src/content/notes/` |
| Change colours or fonts | `src/styles/tokens.css` |
| Change a page's layout | The matching file in `src/pages/` |
| Add a page | A new `.astro` file in `src/pages/`, plus a link in `site.ts` |

Because the services, systems, blueprints and FAQ are data, adding an entry to one of those lists is enough. The home page, the inner page and the cards all update on their own.

---

## Writing a note

Notes are Markdown files. The file name becomes the URL, so `src/content/notes/my-first-note.md` is published at `/notes/my-first-note/`.

Every note starts with a small block of metadata:

```markdown
---
title: "A clear, specific title"
description: "One sentence that shows in the notes list and in search results."
date: 2026-11-09
category: Engineering   # AI, Cloud or Engineering
draft: false            # set to true to hide it while you write
---

The note itself, in Markdown. Use `##` for section headings.
```

If the metadata is missing or wrong (for example a category that does not exist), the build fails and tells you which file to fix. Reading time is calculated automatically.

---

## Configuration

### Base path

The site is served from a sub-path on GitHub Pages: `https://prasadf18.github.io/acelabs/`. That is why internal links go through `url()` in `src/utils/url.ts` instead of being written as `/about/`. A plain `/about/` would point at the wrong place.

If the site moves to its own domain, nothing in the code has to change. Set two environment variables when building:

```bash
SITE_URL=https://example.com BASE_PATH=/ npm run build
```

The defaults live in `astro.config.mjs`.

### Contact email

The address is set once, in `src/config/site.ts`, and used by the footer and the contact page. **Check that it is an inbox you actually read before you share the site widely.**

---

## Deployment

The site is published to GitHub Pages by the workflow in `.github/workflows/deploy.yml`. On every push to `main` it installs dependencies, builds the site and deploys the `dist/` folder.

One-time setup in the GitHub repository:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Push to `main` and watch the run in the **Actions** tab.

The workflow gives the deploy job a `github-pages` environment, which GitHub requires. Without it the deployment fails with a "Missing environment" error.

### Moving from the old static site

This site replaced a hand-written HTML version. Page addresses changed:

| Old | New |
| --- | --- |
| `index.html` | `/` |
| `about.html` | `/about/` |
| `services.html` | `/services/` |
| `systems.html` | `/systems/` |
| `work.html` | `/projects/` |
| `contact.html` | `/contact/` |
| `blog/` | `/notes/` |

---

## Design system

The look is intentionally plain: system fonts, one accent colour, generous spacing, and a dark hero. Every value comes from `src/styles/tokens.css`, so re-theming means editing one file.

- **Light and dark mode** follow the visitor's system setting. The hero is dark in both.
- **Type** uses Georgia for reading text and the system UI font for headings, navigation and labels. Nothing is downloaded, so there is no flash of unstyled text.
- **Components** use plain class names such as `.card`, `.btn` and `.tag`. There is no CSS framework and no build step for styles.

---

## Accessibility and performance

Things this site does on purpose:

- A "Skip to content" link, a single `h1` per page and a labelled main navigation.
- The current page is marked with `aria-current` in the menu.
- Visible keyboard focus on every link and button.
- The animated hero background stops animating for visitors who prefer reduced motion.
- The mobile menu button reports its state with `aria-expanded`.
- The contact page works with JavaScript turned off. The email link is a normal `mailto:` link, and the copy button is only an extra.
- No cookies, no analytics and no third-party scripts.

I have checked the built pages and their internal links in a browser. I have **not** yet run a full automated audit (Lighthouse or axe), and that is on the [roadmap](#roadmap).

---

## Content policy

This site only says things that are true.

An earlier version of the site was written from a template and included claims that could not be backed up: statistics, client logos, a network of specialists and a terminal animation with made-up results. Those were removed. What remains is:

- A description of what the lab does and the areas it works in.
- **Project blueprints**, which are labelled as reference designs and ideas, not delivered client work.
- General engineering notes.
- The founder's real name and background.

If you add something to the site, it should be something you can stand behind. Do not add client names, results, numbers or testimonials unless they are real and you have permission to publish them.

---

## Contact

There is no contact form on purpose. A form needs a backend or a third-party service to receive messages, and this site has neither. Instead the contact page offers a plain email link that opens your mail app with a short prompt, plus a button to copy the address.

If a form is added later, the likely route is a hosted form service. It would need an account and a form ID, which would go in `src/config/site.ts`.

---

## Roadmap

Roughly in the order I would do them:

- [ ] Confirm the public contact address.
- [ ] Add real work to **Projects** as it ships, and keep blueprints clearly separate from it.
- [ ] Publish more notes. Three is a start, not a blog.
- [ ] Add a sitemap and an Open Graph image.
- [ ] Run Lighthouse and axe and fix whatever they find.
- [ ] Add a LinkedIn or X link once those accounts exist.
- [ ] Decide on a custom domain.

---

## Contributing

This is a personal lab website, so it is not set up for outside contributions. If you spot a bug, a typo or a broken link, please open an issue and say what you saw. A short description and the page address are plenty.

---

## License

No license has been chosen yet, so all rights are reserved by default. If you want to reuse the code, open an issue and ask.

---

Built by [Prasad Firame](https://github.com/prasadf18).
