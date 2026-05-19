# Materials Engineer Portfolio (Next.js)

A high-quality personal portfolio website for **Thermal Interface Materials / Epoxy Composite R&D / Materials Engineer** job applications.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Features

- Premium, clean visual style with soft gradients and glassmorphism cards
- Fully responsive layout for mobile, tablet, and desktop
- Sticky top navigation with section anchor scrolling
- Smooth reveal animations and hover motion on project cards
- Structured content for Hero, About, Skills, Projects, Experience, and Contact
- `mailto` contact button with placeholder email

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

Then open http://localhost:3000

### 3) Build for production

```bash
npm run build
```

### 4) Start production server

```bash
npm run start
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com), import the repository.
3. Keep default framework setting (**Next.js**).
4. Click **Deploy**.
5. Vercel will run `npm install` and `npm run build` automatically.

## Project Structure

```text
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── navbar.tsx
│   ├── project-card.tsx
│   └── section.tsx
├── data/
│   └── content.ts
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Notes

- Current setup is light-theme first.
- Code structure keeps styling tokens and sections modular so dark mode can be added easily later.
