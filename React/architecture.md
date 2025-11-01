# React Architecture & Folder Structure

## Recommended Folder Structure

```
src/
├── assets/              # Static files (images, fonts, etc.)
├── components/          # Shared/reusable components
│   ├── ui/             # Basic UI components (Button, Input, Card, etc.)
│   ├── forms/          # Form components
│   └── layouts/        # Layout components (Header, Footer, Sidebar)
├── features/           # Feature-based modules
│   ├── auth/
│   │   ├── api/       # API calls related to auth
│   │   ├── components/ # Feature-specific components
│   │   ├── hooks/     # Feature-specific hooks
│   │   ├── types/     # Feature-specific types
│   │   └── utils/     # Feature-specific utilities
│   └── users/
│       ├── api/
│       ├── components/
│       ├── hooks/
│       └── types/
├── hooks/              # Shared custom hooks
├── lib/                # Third-party library configurations
├── pages/              # Page components (if using React Router)
├── routes/             # Route definitions
├── services/           # API services and external integrations
├── stores/             # State management (Redux, Zustand, etc.)
├── styles/             # Global styles, themes, CSS modules
├── types/              # Shared TypeScript types/interfaces
├── utils/              # Utility functions and helpers
├── constants/          # Application constants
├── config/             # App configuration files
└── App.tsx             # Root component
```

## Key Principles

1. **Feature-based organization**: Group related files by feature/domain rather than file type
2. **Colocation**: Keep related files close together
3. **Clear separation**: Distinguish between shared and feature-specific code
4. **Scalability**: Structure should support growth without major refactoring
5. **Discoverability**: Easy to find where code lives

## File Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE or camelCase (e.g., `API_ENDPOINTS.ts`)
- **Types**: PascalCase (e.g., `User.types.ts` or `types.ts`)

## Templates

https://github.com/alan2207/bulletproof-react/blob/master/apps/nextjs-app/src/features/discussions/api/create-discussion.ts

https://profy.dev/article/react-folder-structure

https://nullvoxpopuli.com/2019-04-15-a-general-project-structure-that-works-in-any-ecosystem/
