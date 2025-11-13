# EdTech Answer Sheet Analysis Platform

## Overview

AI Learning Insights is a comprehensive EdTech platform that transforms handwritten answer sheet analysis into personalized learning insights. The platform uses AI to analyze student handwriting and provides detailed feedback on conceptual understanding, formula recall, calculation accuracy, and reading comprehension. Built for students grades 8-12, parents, and educational institutions, it offers a modern web-based solution with professional marketing pages and sophisticated data analysis capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **React + TypeScript**: Modern component-based architecture with strong typing
- **Vite**: Fast development server and build tool with hot module replacement
- **React Router (Wouter)**: Lightweight client-side routing for single-page application navigation
- **TanStack Query**: Server state management for API calls and caching
- **shadcn/ui + Radix UI**: Professional component library with accessibility-first design
- **Tailwind CSS**: Utility-first styling framework with custom design system

### Backend Architecture
- **Express.js**: Node.js web framework for API routing and middleware
- **TypeScript**: Full-stack type safety across client and server
- **Memory Storage Interface**: Abstracted data layer with in-memory implementation for development
- **RESTful API Design**: Clean API structure with centralized route management

### Database Layer
- **Drizzle ORM**: Type-safe database operations with PostgreSQL support
- **PostgreSQL Schema**: User management system with UUID primary keys
- **Database Migration System**: Drizzle Kit for schema version control

### Design System
- **Professional EdTech Aesthetic**: Clean, trustworthy design inspired by SaaS platforms
- **Color Palette**: Deep blue primary colors with educational focus
- **Typography**: Inter and Poppins fonts for modern, readable interface
- **Responsive Layout**: Mobile-first design with Tailwind breakpoints
- **Dark/Light Theme Support**: System preference detection with manual toggle

### Component Organization
- **Modular Architecture**: Reusable UI components with consistent patterns
- **Page-Level Components**: Landing page sections (Hero, Features, Pricing, etc.)
- **Layout Components**: Navigation, footer, and structural elements
- **Form Components**: Contact forms with validation and state management

### State Management
- **React Context**: Theme provider for global design system state
- **TanStack Query**: API state management with caching and synchronization
- **Local Component State**: React hooks for component-specific interactions

### Development Workflow
- **Hot Reload**: Vite development server with instant updates
- **TypeScript Compilation**: Build-time type checking across frontend and backend
- **Path Aliases**: Clean import statements with @ prefix for src directory
- **Error Handling**: Runtime error overlays and graceful error boundaries

## External Dependencies

### UI Framework Dependencies
- **@radix-ui**: Comprehensive accessible component primitives (dialogs, dropdowns, forms)
- **class-variance-authority**: Type-safe component variant management
- **clsx & tailwind-merge**: Conditional CSS class composition utilities
- **lucide-react**: Modern icon library for consistent iconography

### Database & ORM
- **@neondatabase/serverless**: PostgreSQL database connection for serverless environments
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **drizzle-kit**: Database migration and schema management tools
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Form Management
- **react-hook-form**: Performant form library with minimal re-renders
- **@hookform/resolvers**: Form validation resolvers
- **zod**: Runtime type validation for form schemas and API payloads

### Development Tools
- **@replit/vite-plugin-runtime-error-modal**: Development error handling
- **@replit/vite-plugin-cartographer**: Replit-specific development tooling
- **nanoid**: Unique ID generation for various application needs

### Styling & Animation
- **embla-carousel-react**: Smooth carousel components for testimonials
- **date-fns**: Date manipulation utilities for form handling
- **cmdk**: Command palette interface for advanced navigation

### Utility Libraries
- **@jridgewell/trace-mapping**: Source map handling for better debugging
- **postcss & autoprefixer**: CSS processing and browser compatibility