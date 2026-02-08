export interface Feedback {
    name: string;
    role: string;
    message: string;
    rating: number;
    image?: string;
}

export const FEEDBACK_DATA: Feedback[] = [
    {
        name: 'Sarah Johnson',
        role: 'CEO at TechFlow',
        message: 'Working with you was a game-changer for our SaaS platform. The attention to detail in the React components and the smooth animations really set our product apart.',
        rating: 5
    },
    {
        name: 'Michael Chen',
        role: 'Product Manager',
        message: 'Exceptionally skilled in both frontend and backend. The mobile app you developed is lightning fast and the UI is incredibly intuitive. Highly recommended!',
        rating: 5
    },
    {
        name: 'Emma Williams',
        role: 'Founder of GreenEase',
        message: 'Converted our complex requirements into a sleek, functional web application. Your ability to solve architectural challenges is impressive.',
        rating: 5
    },
    {
        name: 'David Rodriguez',
        role: 'Technical Lead',
        message: 'A proactive developer who doesn\'t just write code but thinks about the user experience. The integration with our existing APIs was seamless.',
        rating: 4
    },
    {
        name: 'Sophia Lee',
        role: 'Marketing Director',
        message: 'The landing page you built for our campaign saw a 40% increase in conversion rates. The performance optimizations were spot on!',
        rating: 5
    },
    {
        name: 'James Wilson',
        role: 'Startup Founder',
        message: 'Delivered a high-quality MVP in record time. Your communication throughout the project was excellent and the final product exceeded expectations.',
        rating: 5
    },
    {
        name: 'Olivia Martinez',
        role: 'UX Designer',
        message: 'As a designer, I appreciate how accurately you translated my Figma designs into a living, breathing application. The pixel-perfection is rare.',
        rating: 5
    },
    {
        name: 'Alex Thompson',
        role: 'E-commerce Owner',
        message: 'The mobile shopping experience is now much smoother. Our customers have explicitly mentioned how easy it is to navigate the new app.',
        rating: 4
    },
    {
        name: 'Isabella Taylor',
        role: 'Systems Architect',
        message: 'Solid understanding of TypeScript and state management. The codebase you delivered is clean, well-documented, and easy to scale.',
        rating: 5
    },
    {
        name: 'Ryan Cooper',
        role: 'App Founder',
        message: 'Best developer I\'ve worked with on Upwork. Professional, talented, and always ready to go the extra mile to ensure project success.',
        rating: 5
    }
];