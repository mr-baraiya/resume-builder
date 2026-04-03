# Resume Builder

A responsive web app for creating, previewing, and downloading resumes in real time.

## Features

- Live resume preview while editing
- Multiple resume templates
- Section-based editor for skills, experience, education, awards, and more
- Export-friendly layout

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Zustand

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run test` - Run tests

## Project Structure

- `src/modules` - Page layouts and feature modules
- `src/templates` - Resume templates
- `src/stores` - Zustand stores and types
- `src/helpers` - Shared constants and utilities

## Notes

- Template data defaults are in `src/helpers/constants/resume-data.json`.
