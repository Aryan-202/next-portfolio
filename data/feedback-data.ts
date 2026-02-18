export interface Feedback {
    name: string;
    role: string;
    message: string;
    rating: number;
    image?: string;
    result?: string;
}

export const FEEDBACK_DATA: Feedback[] = [
    {
        name: 'Prince',
        role: 'Businessman',
        message: 'Worked on our stock market dataset and delivered clear, actionable insights. Exactly what we needed to make faster decisions.',
        result: 'Saved 10+ hours of manual analysis per week',
        rating: 5
    },
    {
        name: 'Ankit',
        role: 'Startup Founder',
        message: 'Built a complete n8n automation setup for our startup — email follow-ups, lead tracking, and internal workflows. Everything runs on autopilot now.',
        result: 'Automated 3 workflows, saving 15+ hours/month',
        rating: 5
    },
    {
        name: 'Siddharth',
        role: 'Startup Founder',
        message: 'Helped us launch our business online with a proper digital presence and lead generation system. Highly recommended for anyone serious about growth.',
        result: 'Improved online response rate significantly',
        rating: 5
    },
];