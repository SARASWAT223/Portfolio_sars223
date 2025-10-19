This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


## PORTFOLIO_SARS223
portfolio/
│
├── package.json
├── next.config.js
├── postcss.config.js
├── tailwind.config.js
├── README.md
│
├── public/
│   ├── favicon.ico
│   ├── profile.jpg
│   ├── resume.pdf
│   └── projects/
│       ├── project1.png
│       ├── project2.png
│       └── ...
│
├── src/
│   ├── app/                      # (for Next.js App Router)
│   │   ├── layout.jsx
│   │   ├── page.jsx              # Home page
│   │   ├── globals.css
│   │   │
│   │   ├── about/
│   │   │   └── page.jsx
│   │   │
│   │   ├── projects/
│   │   │   └── page.jsx
│   │   │
│   │   ├── contact/
│   │   │   └── page.jsx
│   │   │
│   │   └── not-found.jsx
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Education.jsx
│   │   ├── ContactForm.jsx
│   │   ├── Footer.jsx
│   │   └── UI/                   # optional reusable UI elements
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── SectionTitle.jsx
│   │
│   ├── data/                     # all content data here
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   ├── achievements.js
│   │   └── education.js
│   │
│   ├── styles/
│   │   └── custom.css            # any custom classes beyond Tailwind
│   │
│   └── utils/
│       ├── constants.js
│       ├── motion.js             # Framer Motion animations
│       └── helpers.js
│
└── .gitignore