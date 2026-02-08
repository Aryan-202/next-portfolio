
"use client";

import LegalPage from "@/components/legal/LegalPage";
import { PROFILE_INFO } from "@/data";

export default function TermsOfService() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <LegalPage title="Terms of Service" lastUpdated={currentDate}>
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">1. Agreement to Terms</h2>
                <p>
                    By accessing this website, you are agreeing to be bound by these Terms of Service, all applicable laws and regulations,
                    and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of
                    these terms, you are prohibited from using or accessing this site.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">2. Intellectual Property Rights</h2>
                <p>
                    Unless otherwise stated, {PROFILE_INFO.name} owns the intellectual property rights for all material on this website.
                    All intellectual property rights are reserved. You may access this from the website for your own personal use
                    subjected to restrictions set in these terms and conditions.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">3. User Representations</h2>
                <p>
                    By using the site, you represent and warrant that: (1) all registration information you submit will be true, accurate,
                    current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration
                    information as necessary.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">4. Prohibited Activities</h2>
                <p>
                    You may not access or use the site for any purpose other than that for which we make the site available. The site
                    may not be used in connection with any commercial endeavors except those that are specifically endorsed or
                    approved by us.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">5. Disclaimer</h2>
                <p>
                    The materials on this website are provided on an &apos;as is&apos; basis. {PROFILE_INFO.name} makes no warranties,
                    expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
                    implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
                    of intellectual property or other violation of rights.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">6. Governing Law</h2>
                <p>
                    These terms and conditions are governed by and construed in accordance with the laws of India and you
                    irrevocably submit to the exclusive jurisdiction of the courts in {PROFILE_INFO.location}.
                </p>
            </section>
        </LegalPage>
    );
}
