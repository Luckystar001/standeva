# Modern Next.js Application

A well-structured, modern Next.js application built with the latest best practices and zero legacy conflicts.

## Features

- ⚡ **Next.js 15** - Latest version with App Router
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful and accessible UI components
- 📱 **Responsive Design** - Mobile-first approach
- 🔧 **TypeScript** - Full type safety
- 🎯 **ESLint** - Code linting and formatting
- 🚀 **Performance Optimized** - Built-in Next.js optimizations

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm 8.0 or later

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd modern-nextjs-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/                    # App Router pages and layouts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   └── about/            # About page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   └── navigation.tsx    # Navigation component
├── lib/                  # Utility functions
├── public/               # Static assets
└── ...config files
\`\`\`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

This application can be deployed on Vercel, Netlify, or any platform that supports Next.js.

### Deploy on Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

MIT License - see LICENSE file for details.
