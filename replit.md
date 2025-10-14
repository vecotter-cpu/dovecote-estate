# Seaside Serenity Real Estate Application

## Overview
This full-stack real estate application serves as a marketing website and inquiry management system for Dovecote Estate Stanley, a premium coastal subdivision in Tasmania. It showcases residential lots and home packages, aiming to provide a comprehensive online presence for property sales. The project integrates modern web technologies to deliver a high-quality user experience and efficient inquiry management.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with a custom coastal color scheme
- **UI Components**: Radix UI and shadcn/ui
- **State Management**: TanStack Query
- **Routing**: Wouter
- **Build Tool**: Vite
- **UI/UX Decisions**: Responsive, mobile-first design; modular components; a sophisticated dark header with a light logo and navigation; dynamic header scroll behavior transitioning to a dark green background with white text; a custom color palette of dark green, forest green, caramel, mist, and smoke white; and elegant typography using Prata and Inter fonts.

### Backend
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **API Design**: RESTful
- **Session Management**: Express sessions with PostgreSQL store

### Database
- **ORM**: Drizzle ORM
- **Database**: PostgreSQL (configured for Neon Database)
- **Migrations**: Drizzle-kit
- **Schema**: Type-safe with Zod validation, including `lots`, `home_packages`, and `inquiries` tables. `features` are stored as `jsonb`.

### Key Features
- **API Endpoints**: CRUD operations for lots, home packages, and inquiries.
- **Frontend Pages**: Multi-section landing page (hero, about, lots, lifestyle, homes, contact), News & Updates page, and Gallery.
- **SEO**: Comprehensive meta tags, Open Graph, Twitter Cards, JSON-LD (RealEstateAgent, LocalBusiness, FAQ, Product, BreadcrumbList schemas), sitemap.xml, robots.txt, descriptive alt text for images, and optimized internal linking.
- **Content Marketing**: News & Updates page for SEO-optimized articles, social proof integration.
- **Home & Land Package Rebranding**: Lifestyle-driven names and taglines for home packages.

## External Dependencies

- **@neondatabase/serverless**: PostgreSQL database connection
- **drizzle-orm**: Type-safe database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **vite**: Build tool and development server
- **typescript**: Type safety
- **tsx**: TypeScript execution for server development
- **esbuild**: Fast bundling for production builds