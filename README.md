# DCH-Page - HFC Software Website

Marketing website for **HFC Software**, a software studio building products for cloud kitchens, restaurants and digital-first businesses.

## What it is

A single-page marketing site with dedicated hub pages for each product line, built on the Next.js App Router. Content (products, reviews, FAQs, stats) lives in one data file, so the site is easy to update.

## Product hubs

- **Cloud Kitchen Software** - multi-brand order management, kitchen display system, delivery partner integrations, inventory and recipe costing, daily P&L reports
- **Restaurant Software** - table and reservation management, QR digital menu, captain order app, kitchen order tickets (KOT), staff and shift management
- **Digital Business POS Billing** - touch-screen POS, GST-compliant billing and invoicing, multiple payment modes, sales and tax reports, barcode and product catalogue
- **Custom Software** - requirement analysis, UI/UX design, web and mobile development, API integrations, ongoing support

## Tech stack

- Next.js 15 (App Router) with React 19, JavaScript
- Formik + Yup for forms and validation
- Framer Motion, GSAP and Lenis for animation and smooth scrolling
- lucide-react icons
- Light and dark theme (light is the default)

## Project structure

```
app/            Routes, root layout, API route
app/hubs/       Product hub detail pages
components/     Page sections (Hero, Hubs, Features, About, Careers, FAQ, Reviews, Footer, FloatingChat)
lib/data.js     Hub, review, FAQ and stats content
```

## Getting started

```bash
npm install
npm run dev      # development server
npm run build    # production build
npm start        # serve the production build
```
