# AGENTS.md - Development Guidelines

## Build/Lint/Test Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production (includes TypeScript compilation)
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build
- No test framework configured - verify changes manually in browser

## Code Style Guidelines
- **Language**: TypeScript with strict mode, ES modules
- **Framework**: React 19 with functional components and hooks
- **Imports**: Use double quotes, specific named imports preferred
- **Components**: PascalCase naming, default exports, arrow functions for simple components
- **Props**: Interface definitions for component props, destructure in parameters
- **Styling**: TailwindCSS for styling, inline classes preferred
- **Files**: .tsx for components, descriptive filenames in PascalCase
- **Types**: Explicit typing, avoid `any`, use TypeScript strict mode
- **Error handling**: Use optional chaining (?.) and nullish coalescing (??)
- **Dependencies**: React Big Calendar for calendars, Floating UI for positioning, date-fns for dates
- **Routing**: React Router v7 for navigation
- **ESLint**: Follows recommended TypeScript and React hooks rules
- **No comments**: Do not add code comments unless explicitly requested

## Key Libraries
- react-big-calendar, @floating-ui/react, date-fns, tailwindcss, react-router