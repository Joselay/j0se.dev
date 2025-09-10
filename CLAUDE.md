# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server on port 3000 with Turbopack
- `pnpm build` - Build production version with Turbopack
- `pnpm start` - Start production server
- `pnpm preview` - Build and start production server on port 3000
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Run ESLint with auto-fix
- `pnpm check-types` - Run TypeScript type checking
- `pnpm format:check` - Check Prettier formatting
- `pnpm format:write` - Apply Prettier formatting

## Component Registry System

This project includes a custom component registry system:

- `pnpm registry:build` - Build the component registry
- `pnpm capture` - Generate component screenshots for registry

Registry components are located in `/src/registry/` with individual folders for each component. The registry is built from TypeScript source files and generates an auto-generated JSON configuration.

## Architecture Overview

**Tech Stack**: Next.js 15 with React 19, TypeScript, Tailwind CSS, Radix UI

**Key Directories**:
- `/src/app` - Next.js App Router pages and layouts
- `/src/components` - Reusable UI components (including `/ui` subfolder)
- `/src/features` - Feature-based modules (profile, go-platform)
- `/src/config` - Configuration files (site settings, registry config)
- `/src/registry` - Custom component registry system
- `/src/scripts` - Build and automation scripts
- `/src/utils` - Utility functions

**Data Architecture**:
- User profile data centralized in `/src/features/profile/data/user.ts`
- Site configuration in `/src/config/site.ts`
- Environment-based configuration with fallbacks

**Component System**:
- Uses shadcn/ui patterns with Radix UI primitives
- Custom registry system for component distribution
- Components follow atomic design principles

**Special Features**:
- MDX support for blog posts with custom rewrites
- Component registry with screenshot generation
- Theme system with light/dark mode support
- Phone number internationalization (VN region)

## Package Manager

Uses `pnpm` as the package manager. Node.js 20+ required.