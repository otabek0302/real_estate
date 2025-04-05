# Real Estate Template Project

## Project Overview
This is a collaborative real estate template project developed by our team. The project aims to create a modern, responsive, and user-friendly real estate website template that can be customized for various real estate businesses.

## Technology Stack & Libraries
### Core Technologies
- **Next.js (15.2.4)**: React framework for server-side rendering and static site generation
- **React (19.0.0)**: JavaScript library for building user interfaces
- **TailwindCSS (4)**: Utility-first CSS framework for rapid UI development

### UI Components & Styling
- **@radix-ui/react-slot**: Primitive component for building custom components
- **class-variance-authority**: Utility for managing component variants
- **clsx**: Utility for constructing className strings conditionally
- **tailwind-merge**: Utility for merging Tailwind CSS classes
- **tw-animate-css**: CSS animations library for Tailwind

### Animation & Icons
- **framer-motion**: Production-ready motion library for React
- **lucide-react**: Beautiful & consistent icon toolkit
- **react-icons**: Popular icons pack for React applications

## Getting Started

### Prerequisites
- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation
1. Clone the repository:
```bash
git clone [repository-url]
cd real_estate
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Development
To start the development server with Turbopack:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Building for Production
```bash
npm run build
# or
yarn build
```

### Starting Production Server
```bash
npm run start
# or
yarn start
```

### Linting
```bash
npm run lint
# or
yarn lint
```

## Project Structure
```
real_estate/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── public/          # Static assets
├── styles/          # Global styles and Tailwind config
├── lib/             # Utility functions and helpers
└── package.json     # Project dependencies and scripts
```

## Key Features
- Modern and responsive design using TailwindCSS
- Server-side rendering with Next.js
- Smooth animations with Framer Motion
- Comprehensive icon system with Lucide and React Icons
- Component variants management with class-variance-authority
- Optimized performance with Turbopack

## Team Members
- [Team Member 1 Name] - Role
- [Team Member 2 Name] - Role
- [Team Member 3 Name] - Role
- [Team Member 4 Name] - Role

## Contribution Guidelines
1. Create a new branch for your feature
2. Follow the coding standards
3. Test your changes
4. Submit a pull request
5. Get code reviewed by team members

## Communication
- Team meetings: [Specify schedule]
- Communication channels: [Specify channels]
- Project management: [Specify tool]

## License
[Specify license type]

## Contact
For any questions or concerns, please contact the project maintainer at [email address]

## Git Workflow Guide

### Initial Setup
1. Clone the repository:
```bash
git clone [repository-url]
cd real_estate
```

2. Set up your remote:
```bash
git remote add origin [repository-url]
```

### Working on Features
1. Always start with the latest main branch:
```bash
git checkout main
git pull origin main
```

2. Create a new branch for your feature:
```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

3. Make your changes and commit them:
```bash
git add .
git commit -m "Description of your changes"
```

4. Push your branch to remote:
```bash
git push origin feature/your-feature-name
```

### Creating Pull Requests
1. Go to the repository on GitHub/GitLab
2. Click "New Pull Request"
3. Select your feature branch as the source
4. Select main branch as the target
5. Add a descriptive title and detailed description
6. Request review from team members

### Code Review Process
1. Team members review the code
2. Address any feedback or requested changes
3. Make additional commits if needed
4. Push changes to your feature branch
5. Once approved, merge the pull request

### Best Practices
- Always create a new branch for each feature/fix
- Write clear, descriptive commit messages
- Keep your branch up to date with main
- Don't commit directly to main branch
- Review code before creating pull requests
- Resolve merge conflicts locally
