# G-WITHUS Landing Page

A modern, fully responsive corporate landing page for G-WITHUS, empowering maritime and digital operations. Built with a strict Flexbox-first approach and a feature-driven architecture.

## 🚀 Tech Stack
* **Core:** React 18 + Vite (v6)
* **Styling:** Tailwind CSS v4 (Strict Flexbox Layouts, No Grid)
* **Routing:** React Router DOM
* **Icons:** Lucide React
* **Animations:** Anime.js

## 📁 Project Structure
The project follows a modular, feature-driven architecture for scalability and maintainability:

```text
src/
├── assets/             # Static assets (images, icons)
├── common/             # Reusable components and hooks
│   ├── components/     # Navbar, Footer
│   ├── hooks/          # useAnimeFadeIn
│   └── utils/          # Helper functions
├── features/           # Feature-specific modules
│   ├── about/          # About Us page components, data, and layouts
│   ├── contact/        # Contact page components, data, and layouts
│   ├── home/           # Home page components, data, and layouts
│   ├── jobs/           # Career/Jobs page components, data, and layouts
│   └── products/       # Products page components, data, and layouts
├── App.jsx             # Main router configuration
└── main.jsx            # Application entry point
