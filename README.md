# Portfolio

A personal portfolio website built with Next.js, featuring a responsive design, dark/light mode, project showcase, and a functional contact form.

## Getting Started

**Prerequisites:** Node.js 16+

```bash
# Clone the repository
git clone <repository-url>
cd next-portfolio

# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the root directory:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

The contact form uses Gmail. Generate an App Password from your Google account settings and add it here.

## Customization

All content is driven by data files — no need to touch component logic:

- `data/personal-info.ts` — name, bio, and personal details
- `data/projects.ts` — project entries
- `data/social-links.ts` — social media profiles
- `components/layouts/header/constants.ts` — navigation items

## Deployment

Deploy to [Vercel](https://vercel.com) by importing the repository and adding the environment variables. Any push to the main branch triggers an automatic deployment.

## License

MIT
