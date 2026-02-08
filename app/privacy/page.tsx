
"use client";

import LegalPage from "@/components/legal/LegalPage";
import { PROFILE_INFO } from "@/data";

export default function PrivacyPolicy() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <LegalPage title="Privacy Policy" lastUpdated={currentDate}>
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Introduction</h2>
                <p>
                    Welcome to the portfolio website of {PROFILE_INFO.name}. Your privacy is critically important to us.
                    This Privacy Policy documents the types of information that is collected and recorded by this website
                    and how we use it.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Information We Collect</h2>
                <p>
                    If you contact us directly via the contact form, we may receive additional information about you such as your name,
                    email address, phone number, the contents of the message and/or attachments you may send us, and any other
                    information you may choose to provide.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. How We Use Your Information</h2>
                <p>We use the information we collect in various ways, including to:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Provide, operate, and maintain our website</li>
                    <li>Improve, personalize, and expand our website</li>
                    <li>Understand and analyze how you use our website</li>
                    <li>Communicate with you, either directly or through one of our partners</li>
                    <li>Send you emails if you reach out via our contact forms</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Cookies and Web Beacons</h2>
                <p>
                    Like any other website, this portfolio uses &apos;cookies&apos;. These cookies are used to store information including
                    visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is
                    used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type
                    and/or other information.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Data Protection</h2>
                <p>
                    We take reasonable measures to protect your personal information in an effort to prevent loss, misuse,
                    and unauthorized access, disclosure, alteration, and destruction.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please feel free to contact us at:
                </p>
                <p className="font-medium text-primary">
                    {PROFILE_INFO.email}
                </p>
            </section>
        </LegalPage>
    );
}
