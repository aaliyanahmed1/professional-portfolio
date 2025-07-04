# AI Engineer Portfolio Website

## Overview

This is a modern, professional portfolio website for Aaliyan Ahmed, an AI Engineer and Computer Vision Specialist. The application is built using a full-stack architecture with React frontend and Express backend, showcasing AI projects, skills, and professional experience.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Tailwind CSS for responsive styling
- **Component Library**: Radix UI components with shadcn/ui design system
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL session store
- **API**: RESTful API design
- **Build**: ESBuild for server-side bundling

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Professional introduction with call-to-action buttons
- **About Section**: Personal background and qualifications
- **Skills Section**: Technical expertise showcased with icons and descriptions
- **Projects Section**: Portfolio of AI/ML projects with detailed descriptions
- **Contact Section**: Interactive contact form with project type selection
- **UI Components**: Comprehensive set of reusable components (buttons, cards, forms, etc.)

### Backend Components
- **Contact API**: Handles form submissions and stores contact messages
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Route Management**: Centralized API route handling
- **Middleware**: Request logging and error handling

## Data Flow

### Contact Form Flow
1. User fills out contact form with name, email, project type, and message
2. Frontend validates form data using Zod schema
3. Form submission triggers API call to `/api/contact`
4. Backend validates data and stores in database
5. Success/error response returned to frontend
6. User receives toast notification with result

### Content Delivery
1. Static assets served via Vite development server
2. API routes handled by Express backend
3. Database queries executed through Drizzle ORM
4. Real-time updates managed by TanStack Query

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Libraries**: Radix UI primitives, Lucide React icons, React Icons
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query
- **Utilities**: date-fns, embla-carousel-react

### Backend Dependencies
- **Database**: Drizzle ORM, @neondatabase/serverless
- **Validation**: Zod for schema validation
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with live reload
- **Database**: PostgreSQL with Drizzle migrations

### Production Build
- **Frontend**: Vite build to `dist/public`
- **Backend**: ESBuild bundle to `dist/index.js`
- **Database**: Drizzle push for schema deployment

### Environment Configuration
- **Database**: PostgreSQL connection via `DATABASE_URL`
- **Session**: PostgreSQL session store
- **Static Files**: Served from build directory

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```