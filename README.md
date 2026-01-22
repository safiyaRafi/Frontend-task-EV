# 🚀 Exterview.ai UI Replication

**Live Demo:** [https://frontend-task-ev.vercel.app/](https://frontend-task-ev.vercel.app/)

A high-fidelity, responsive, and modular replication of the [Exterview.ai](https://exterview.ai/) home page. Built with a focus on modern frontend standards, clean architecture, and premium aesthetics.

---

## ✨ Features

### 🏛️ Modular Design
The page is decomposed into independent, reusable components located in `src/components`. This ensures ease of maintenance and scalability.
- **Dynamic Navbar**: Scroll-aware sticky navigation with backdrop-blur effects.
- **Interactive Steps**: A state-managed "How it Works" section that updates visuals base on user selection.
- **Hiring Suite**: A responsive grid of feature cards with custom-styled SVGs.

### 🎨 Premium Aesthetics
- **Tailwind v4 tokens**: Leveraged the latest `@theme` features for unified color and typography management.
- **Custom Gradients**: Implementation of "Mesh gradients" to simulate the AI-themed aura of the original site.
- **Typography**: Integrated **Plus Jakarta Sans** via Next.js Font optimization.

### 📱 Fully Responsive
Designed with a "Mobile-First" approach, ensuring a seamless experience from high-resolution monitors to small handheld devices.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | [Next.js 15+](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Fonts** | [Google Fonts](https://fonts.google.com/) (Plus Jakarta Sans) |
| **Icons** | Custom SVGs |

---

## 📁 Project Structure

```text
src/
├── app/
│   ├── globals.css      # Tailwind v4 configuration & base styles
│   ├── layout.tsx       # Root layout & Typography setup
│   └── page.tsx         # Main entry point (Assembled components)
├── components/
│   ├── home/            # Page-specific components
│   │   ├── Hero.tsx
│   │   ├── Stats.tsx
│   │   ├── Workflow.tsx
│   │   ├── StepSection.tsx
│   │   └── HiringSuite.tsx
│   └── layout/          # Global layout components
│       ├── Navbar.tsx
│       └── Footer.tsx
└── ui/                  # Shared base UI elements (if expanded)
```

---

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies using `npm`.

```bash
git clone <your-repo-url>
cd Frontend-task-EV
npm install
```

### 2. Development
Launch the development server.

```bash
npm run dev
```
Navigate to [http://localhost:3000](http://localhost:3000) to view the project.

### 3. Production Build
Create an optimized production bundle.

```bash
npm run build
```

---

## 📐 Implementation Notes

- **Performance**: Zero external library dependencies beyond Next.js and React, keeping the bundle size minimal.
- **Accessibility**: Used semantic HTML elements (`<main>`, `<nav>`, `<footer>`, `<section>`) for better SEO and screen reader support.
- **Animations**: Subtle CSS-only micro-animations (pulse, bounce, scale) to provide a premium feel without overhead.


