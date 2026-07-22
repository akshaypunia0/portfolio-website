# Full Stack Developer Portfolio

A modern, recruiter-focused portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Professional dark theme optimized for hiring managers
- Fully responsive layout with smooth scrolling
- Fade-in scroll animations and subtle hover effects
- SEO-friendly meta tags and structured data
- Easy content management via a single data file

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** for fast development and builds
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **React Icons** for iconography

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

All portfolio content lives in `src/data/portfolio.ts`. Update your name, experience, skills, projects, and links there — no need to touch component files.

### Add your assets

Place these files in the `public/` folder:

| File | Purpose |
|------|---------|
| `public/profile.jpg` | Your profile photo (shown in Hero, rounded) |
| `public/resume.pdf` | Your resume (downloaded when clicking Resume buttons) |

The download button saves the file as `Akshay_Chaudhary_Resume.pdf`. Change the filename in `portfolio.ts` under `resumeFileName` if needed.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── layout/     # Navbar, Footer
│   └── ui/         # Button, FadeIn, Section
├── data/
│   └── portfolio.ts  # All content (edit this!)
├── sections/       # Hero, About, Experience, etc.
├── types/          # TypeScript interfaces
├── App.tsx
└── main.tsx
```

## License

MIT
