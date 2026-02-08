export interface Feedback {
    name: string;
    role: string;
    message: string;
    rating: number;
    image?: string;
}

export const FEEDBACK_DATA: Feedback[] = [
    {
        name: 'Prince',
        role: 'Businessman',
        message: 'worked on the dataset of stock market and provided the insights',
        rating: 5
    },
    {
        name: 'Ankit',
        role: 'Startup Founder',
        message: 'made a complete n8n setup for my startup and it was very helpful by automating my email followups and other processes. Highly recommended!',
        rating: 5
    },
    {
        name: 'Siddharth',
        role: 'Startup Founder',
        message: 'He helped me to start my business online via digital marketing and it was very helpful. Highly recommended!',
        rating: 5
    },
];