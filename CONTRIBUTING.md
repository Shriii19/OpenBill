# Contributing to Openbill

Thank you for your interest in contributing to Openbill! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [How to Contribute](#how-to-contribute)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Issues](#reporting-issues)

## Getting Started

Before you begin contributing, please:

1. Read through the project [README.md](README.md) to understand the project's purpose
2. Check the [Issues](../../issues) page for open tasks or bugs
3. Join our community discussions to connect with other contributors

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Supabase account (for database)
- Git

### Installation Steps

1. **Fork the repository**
   ```bash
   # Click the 'Fork' button on GitHub, then clone your fork
   git clone https://github.com/YOUR_USERNAME/Openbill.git
   cd Openbill
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure Environment Variables**
   
   Create `.env` files in both backend and frontend directories:
   
   **Backend (.env)**
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_KEY=your_supabase_service_key
   PORT=3001
   JWT_SECRET=your_jwt_secret
   ```
   
   **Frontend (.env.local)**
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Set up Database**
   ```bash
   # Run migrations in Supabase dashboard or using Supabase CLI
   cd backend/supabase/migrations
   # Apply 001_initial_schema.sql to your Supabase project
   ```

6. **Start Development Servers**
   
   **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```
   
   **Terminal 2 - Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

7. **Access the Application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:3001

## Project Structure

```
Openbill/
├── backend/              # Node.js/TypeScript backend
│   ├── src/
│   │   ├── auth/        # Authentication module
│   │   ├── clients/     # Client management
│   │   ├── common/      # Shared utilities, guards, interceptors
│   │   ├── config/      # Configuration files
│   │   ├── invoices/    # Invoice management
│   │   ├── payments/    # Payment processing
│   │   ├── products/    # Product/service catalog
│   │   ├── settings/    # Application settings
│   │   ├── tickets/     # Support ticket system
│   │   └── users/       # User management
│   └── supabase/        # Database migrations
│
└── frontend/            # Next.js frontend
    └── src/
        ├── app/         # Next.js app router pages
        ├── components/  # Reusable React components
        └── lib/         # Utility functions and API clients
```

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

- 🐛 **Bug Fixes**: Fix issues and improve stability
- ✨ **New Features**: Add new functionality
- 📝 **Documentation**: Improve or add documentation
- 🎨 **UI/UX**: Enhance user interface and experience
- ♻️ **Refactoring**: Improve code quality
- ✅ **Tests**: Add or improve test coverage

### Contribution Workflow

1. **Find or Create an Issue**
   - Check existing issues or create a new one
   - Discuss your proposed changes before starting work
   - Get assigned to the issue to avoid duplicate work

2. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/issue-description
   ```

3. **Make Your Changes**
   - Write clean, readable code
   - Follow the coding standards below
   - Test your changes thoroughly

4. **Commit Your Changes**
   - Follow commit message guidelines
   - Make atomic commits (one logical change per commit)

5. **Push and Create Pull Request**
   ```bash
   git push origin feature/your-feature-name
   ```
   - Open a Pull Request on GitHub
   - Fill out the PR template completely
   - Link related issues

## Coding Standards

### TypeScript/JavaScript

- Use TypeScript for type safety
- Follow ESLint configuration
- Use meaningful variable and function names
- Write self-documenting code with comments where necessary
- Avoid `any` types; use proper typing

### Backend Standards

- Follow the existing module structure (routes, service, dto)
- Use DTOs for request/response validation
- Implement proper error handling
- Use decorators where applicable
- Keep routes thin; business logic goes in services

**Example Module Structure:**
```typescript
// module.routes.ts
export const moduleRoutes = (app: Express) => {
  app.get('/api/module', authGuard, getModules);
};

// module.service.ts
export class ModuleService {
  async getAll() {
    // Business logic here
  }
}

// module.dto.ts
export interface CreateModuleDto {
  name: string;
  // other fields
}
```

### Frontend Standards

- Use functional components with hooks
- Keep components small and focused
- Use TypeScript for props and state
- Follow Next.js conventions (app router)
- Use Tailwind CSS for styling
- Implement proper loading and error states

### Database

- Write migrations for schema changes
- Use descriptive table and column names
- Add proper indexes for performance
- Include rollback scripts in migrations

## Commit Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Commit Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(invoices): add PDF export functionality

fix(auth): resolve token expiration issue

docs(readme): update installation instructions

refactor(clients): simplify client service methods
```

## Pull Request Process

1. **Before Submitting**
   - Ensure your code builds without errors
   - Run linting: `npm run lint`
   - Test your changes manually
   - Update documentation if needed
   - Add or update tests if applicable

2. **PR Description**
   - Clearly describe what changes you made
   - Explain why the changes are needed
   - Reference related issues (e.g., "Closes #123")
   - Include screenshots for UI changes
   - List any breaking changes

3. **Review Process**
   - Respond to review comments promptly
   - Make requested changes in new commits
   - Keep discussions focused and professional
   - Be open to feedback and suggestions

4. **After Approval**
   - Maintainers will merge your PR
   - You may be asked to squash commits
   - Your contribution will be acknowledged

## Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to Reproduce**: Detailed steps to reproduce the bug
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Environment**: OS, Node version, browser, etc.
- **Screenshots**: If applicable
- **Error Messages**: Complete error logs

### Feature Requests

For feature requests, please include:

- **Problem Statement**: What problem does this solve?
- **Proposed Solution**: How should it work?
- **Alternatives**: Other approaches you've considered
- **Additional Context**: Any other relevant information

## Code Review

All contributions go through code review. Reviewers will check for:

- Code quality and readability
- Adherence to coding standards
- Test coverage
- Documentation completeness
- Performance implications
- Security considerations

## Questions?

If you have questions:

- Check existing documentation
- Search closed issues
- Open a new issue with the "question" label
- Reach out to maintainers

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

---

Thank you for contributing to Openbill! 🎉
