# RoboCollective.ai - Next.js

A Next.js e-commerce site for robotics products, built with TypeScript, Tailwind CSS, Redux Toolkit, TanStack Query, React Hook Form, Yup, and Axios.

## Tech Stack

- **Next.js 15** with TypeScript
- **Tailwind CSS** for styling
- **Redux Toolkit** for state management
- **TanStack Query** for API/data management
- **Axios** for API calls
- **React Hook Form** + **Yup** for form handling and validation
- **Radix UI Tooltips** for tooltips

## Setup

### 1. Install dependencies

````bash
npm install
````

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Features

- **Home** – Hero, services, product categories, CTA
- **Shop** – Categories and product listing
- **Product detail** – Product info with **Buy / Request Quote** button
- **Purchase flow** – Modal with contact form (name, email, phone, company, message); uses mailto to open the user's email app, addressed to **mohamedrad2022@gmail.com**
- **Contact** – Contact form with validation, uses mailto to mohamedrad2022@gmail.com (no API keys needed)
- **Theme toggle** – Dark/light mode (Redux)
- **Tooltips** – On theme toggle and form fields

## Project structure

```
src/
├── app/
│   ├── shop/         # Shop and category pages
│   ├── products/     # Product detail with purchase modal
│   ├── contact/      # Contact page
│   ├── about/        # About page
│   └── blog/         # Blog listing
├── components/       # PurchaseForm, Tooltip, Header, Footer
└── lib/              # Store, slices, axios, products, API
```

## Build

```bash
npm run build
npm start
```
