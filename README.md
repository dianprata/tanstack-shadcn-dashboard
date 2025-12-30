# TanStack Shadcn Dashboard

A modern, responsive, and clean dashboard template built with the latest frontend technologies.

## Tech Stack

- **Client-Side Framework:** [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Routing:** [TanStack Router](https://tanstack.com/router/latest)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Hugeicons](https://hugeicons.com/)
- **Charts:** [Recharts](https://recharts.org/)

## Features

- **SPA Architecture:** Fully client-side rendered for fast navigation and interactions.
- **Responsive Layout:** Adaptive sidebar that collapses on desktop and becomes a drawer on mobile.
- **Dark Mode Support:** Built-in dark mode toggle.
- **Advanced Sidebar:** Collapsible, nested menus, and custom styling using `shadcn/ui` sidebar components.
- **Data Visualization:** Interactive charts and graphs.
- **Clean Architecture:** Organized file structure with route-based code splitting.

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── app-sidebar.tsx # Main sidebar configuration
│   ├── layout/        # Layout components (Header, etc.)
│   ├── ui/            # shadcn/ui primitives
│   └── charts/        # Chart components
├── routes/            # Application routes (pages)
│   ├── __root.tsx     # Root layout wrapper
│   ├── index.tsx      # Dashboard home
│   ├── analytics.tsx  # Analytics page
│   ├── users.tsx      # User management
│   └── settings.tsx   # Settings page
├── main.tsx           # Entry point
└── router.tsx         # Router configuration
```

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- pnpm, npm, or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dianprata/tanstack-shadcn-dashboard
   cd tanstack-shadcn-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   bun install
   ```

3. Start the development server:
   ```bash
   pnpm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the client-side application for deployment:

```bash
npm run build
```

The build artifacts will be located in the `dist` directory. You can deploy this directory to any static file host (Vercel, Netlify, Github Pages, S3, etc.).
