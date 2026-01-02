# Feeble Hero Assignment

A responsive hero section built with Next.js, featuring animated vectors, mobile navigation, and a modern UI.

## Tech Stack

- **Next.js 16.1.1** - React framework with App Router
- **React 19** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion 12** - Animation library
- **pnpm** - Package manager

## Implementation Notes

### Architecture
- **Server Components by default** - Client components only when needed (hooks, animations, event handlers)
- **Constants-driven** - All colors, content, and configuration in `src/constants/`
- **Type-safe** - TypeScript interfaces in `src/types/` for all component props
- **Responsive design** - Mobile-first approach with breakpoints (sm, md, lg, xl)

### Key Features
- Responsive navigation with hamburger menu for mobile
- Animated decorative vectors (hidden on mobile for performance)
- Smooth transitions and hover effects
- Accessible components with proper ARIA labels

### Assumptions
- Decorative vectors are hidden on screens < 1024px (lg breakpoint) to improve mobile performance
- Navigation links collapse into hamburger menu on screens < 768px (md breakpoint)
- All animations use viewport-based units (vw/vh) for responsive scaling

## Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

The app will be available at `http://localhost:3000`.

