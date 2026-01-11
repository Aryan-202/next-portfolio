# Next.js Portfolio Project

## Overview
A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases personal information, projects, and contact functionality with a clean, professional design.

## Features
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme switching with system preference detection
- **Dynamic Sections**: Hero, About, Projects, and Contact sections
- **Project Showcase**: Display projects with details, technologies, and links
- **Contact Form**: Functional contact form with email integration
- **Modern UI**: Clean interface with smooth animations using Framer Motion
- **Type Safety**: Full TypeScript support throughout the application

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom CSS modules
- **UI Components**: shadcn/ui with custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React, Bootstrap Icons
- **Email**: Nodemailer for contact form
- **Theming**: next-themes for dark/light mode
- **Code Quality**: ESLint for linting

## Project Structure
```
/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes (contact form)
│   ├── blog/           # Blog page
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── projects/       # Projects page
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # React components
│   ├── layouts/        # Layout components (Hero, About, etc.)
│   ├── ui/             # Reusable UI components (Button, Card)
│   ├── theme-provider.tsx # Theme context provider
│   └── background.tsx  # Animated background component
├── data/              # Static data and configurations
├── lib/               # Utility functions
├── public/            # Static assets (images, icons, PDFs)
├── types/             # TypeScript type definitions
└── config files       # Project configuration files
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd next-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

### Development
Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production
Build the application:
```bash
npm run build
# or
yarn build
# or
pnpm build
```

Start the production server:
```bash
npm start
# or
yarn start
# or
pnpm start
```

## Configuration

### Customizing Content
1. **Personal Information**: Update `/data/personal-info.ts` with your details
2. **Projects**: Edit `/data/projects.ts` to add/update your projects
3. **Social Links**: Modify `/data/social-links.ts` with your social media profiles
4. **Navigation**: Update `/components/layouts/header/constants.ts` for menu items

### Styling
- Global styles are in `/app/globals.css`
- Component-specific styles are in `.module.css` files
- Theme colors are configured in `globals.css` under `:root` and `.dark` selectors
- Tailwind configuration uses CSS variables for theming

### Email Configuration
The contact form uses Gmail by default. To set it up:
1. Enable 2-Step Verification on your Google account
2. Generate an App Password
3. Add the email and app password to your `.env.local` file

## Key Components

### Layout Components
- **Header**: Responsive navigation with mobile menu
- **Hero**: Introduction section with social links and call-to-action
- **About**: Personal information and skills
- **Projects**: Project showcase with filtering
- **Contact**: Contact form and information
- **Footer**: Links and copyright information

### UI Components
- **Button**: Customizable button with variants
- **Card**: Card component for content containers
- **ThemeProvider**: Handles dark/light mode switching
- **Background**: Animated background component

## Features in Detail

### Responsive Navigation
- Mobile-friendly hamburger menu
- Smooth scrolling for anchor links
- Active link highlighting

### Project Showcase
- Filter projects by category
- View project details and technologies
- Links to GitHub repositories and live demos
- Featured projects highlighting

### Contact Form
- Form validation
- Success/error feedback
- Email integration via API route
- Accessible form controls

### Performance Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Optimized animations with Framer Motion
- Efficient CSS with Tailwind

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on Vercel
3. Add environment variables
4. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform that supports Next.js, including:
- Netlify
- AWS Amplify
- Railway
- Docker containers

## Customization Tips

### Adding New Pages
1. Create a new folder in `/app` (e.g., `/app/new-page`)
2. Add a `page.tsx` file with your content
3. Update navigation links in header constants

### Adding New Projects
1. Add project details to `/data/projects.ts`
2. Upload project images to `/public/projects/`
3. Import and use the assets in the projects data

### Modifying Styles
- Use Tailwind classes for most styling
- Create CSS modules for complex component styles
- Update theme colors in `globals.css` for brand consistency

## Troubleshooting

### Common Issues
1. **Email not sending**: Verify environment variables and app password
2. **Images not loading**: Check file paths and Next.js Image configuration
3. **TypeScript errors**: Ensure all types are properly defined
4. **Build errors**: Check Node.js version and dependency compatibility

### Development Tips
- Use the Next.js dev tools for debugging
- Check browser console for client-side errors
- Use TypeScript strict mode for better code quality
- Regularly update dependencies for security and performance

## License
This project is open source and available for personal and commercial use. See the LICENSE file for details.

## Support
For issues and feature requests, please create an issue in the repository or contact the maintainer.

## Acknowledgments
- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev) and [Bootstrap Icons](https://icons.getbootstrap.com)
- Animations with [Framer Motion](https://www.framer.com/motion/)