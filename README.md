# Zoftware Development Services

A modern, responsive website for a residential cleaning service built with Next.js 15, TypeScript, and Tailwind CSS.

<!-- Table of contents for easy navigation -->

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design**: Fully responsive UI built with Tailwind CSS and Radix UI components.
- **Hero Section**: Engaging hero with calls-to-action for booking and exploring services.
- **Services Showcase**: Detailed list of cleaning packages including Standard, Deep, Move-In/Move-Out, Post-Construction, and more.
- **About Section**: Highlights experience, trust, and eco-friendly practices.
- **Contact Form**: Integrated with Formspree for handling quote requests and inquiries.
- **Static Legal Pages**: Terms of Service and Privacy Policy pages.
- **Dark/Light Theme**: Toggleable theme support using `next-themes`.
- **Accessibility**: Built with accessibility best practices, including focus states and semantic HTML.
- **Notifications**: Toast notifications powered by Sonner.

## Technologies

- [Next.js 15](https://nextjs.org/) (App Router)
- [React 18](https://reactjs.org/) & TypeScript
- [Tailwind CSS](https://tailwindcss.com/) & [tailwind-merge](https://github.com/dcastil/tailwind-merge)
- [Radix UI](https://www.radix-ui.com/) for unstyled, accessible components
- [next-themes](https://github.com/pacocoursey/next-themes) for theme management
- [Formspree](https://formspree.io/) for form submissions
- [React Hook Form](https://react-hook-form.com/) & [Zod](https://github.com/colinhacks/zod) for form validation
- [react-phone-input-2](https://github.com/bl00mber/react-phone-input-2) for phone input
- [Lucide Icons](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/) for vector icons
- [Sonner](https://github.com/lucasbassetti/sonner) for toast notifications

## Getting Started

### Prerequisites

- Node.js v18 or later
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/cleaningservice.git
cd cleaningservice

# Install dependencies
npm install      # or pnpm install
```

### Running Locally

```bash
# Start development server
npm run dev      # or pnpm dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build the app
npm run build    # or pnpm build

# Start the production server
npm start        # or pnpm start
```

### Environment Variables

The contact form is currently configured with a Formspree form ID directly in `components/ContactForm.tsx`:

```js
// Replace "manojqzo" with your Formspree form ID
const [state, handleSubmit] = useForm("manojqzo");
```

To externalize the form ID, you can create an `.env.local` file:

```ini
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

And update the code:

```js
const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
```

## Project Structure

```text
├── app
│   ├── layout.tsx         # Root layout and providers
│   ├── page.tsx           # Home page
│   ├── services           # Services listing page
│   ├── terms              # Terms of Service page
│   └── privacy            # Privacy Policy page
├── components             # Reusable UI components (ContactForm, LogoIntro, theme provider)
├── hooks                  # Custom React hooks (e.g., useIsMobile, toast hook)
├── lib                    # Utility functions (cn for class merging)
├── public                 # Static assets (images, SVGs)
├── styles                 # Global and additional CSS
├── .github/workflows      # CI workflows (mirror to Zukoverse Repo)
├── next.config.mjs        # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── postcss.config.mjs     # PostCSS configuration
├── package.json           # Project metadata and scripts
└── tsconfig.json          # TypeScript configuration
```

## Deployment

This project is optimized for deployment on Vercel. Pushing to the `main` branch will trigger an automatic build and deployment.

**GitHub Action**: `.github/workflows/push-to-zukoverse.yml` mirrors changes to the Zukoverse repo.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request

## License
