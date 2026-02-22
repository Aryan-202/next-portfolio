import LegalPage from "@/components/legal/LegalPage";
import { PROFILE_INFO } from "@/data";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Terms of Service for Aryan Vishwakarma's portfolio and services.",
};

export default function TermsOfService() {
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <LegalPage title="Terms of Service" lastUpdated={currentDate}>
            {/* 1. Agreement */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    1. Agreement to Terms
                </h2>
                <p>
                    By accessing or using this website, you agree to be bound by
                    these Terms of Service and all applicable laws and
                    regulations. If you do not agree with any part of these
                    terms, you must not use this website.
                </p>
            </section>

            {/* 2. Services */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    2. Services
                </h2>
                <p>
                    This website showcases the services offered by{" "}
                    {PROFILE_INFO.name}, which may include website development,
                    automation solutions, consulting, and related services. All
                    services are provided on a project or contract basis, with
                    scope, timelines, and pricing agreed upon before work
                    begins.
                </p>
            </section>

            {/* 3. No Guarantee */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    3. No Guarantee of Results
                </h2>
                <p>
                    While best efforts are made to deliver high-quality work,
                    {PROFILE_INFO.name} does not guarantee specific results,
                    including but not limited to increased revenue, leads,
                    traffic, or business growth. Outcomes depend on multiple
                    factors beyond our control.
                </p>
            </section>

            {/* 4. Client Responsibilities */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    4. Client Responsibilities
                </h2>
                <p>
                    Clients are responsible for providing accurate information,
                    content, approvals, and feedback required to complete a
                    project. Delays caused by missing information or late
                    responses from the client may impact project timelines and
                    delivery.
                </p>
            </section>

            {/* 5. Payments */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    5. Payments & Refunds
                </h2>
                <p>
                    Payment terms, pricing, and advance requirements will be
                    clearly communicated and agreed upon before the start of
                    any project. Unless stated otherwise in writing, all
                    payments made are non-refundable.
                </p>
            </section>

            {/* 6. Intellectual Property */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    6. Intellectual Property
                </h2>
                <p>
                    Unless otherwise agreed in writing, all intellectual
                    property related to this website remains the property of{" "}
                    {PROFILE_INFO.name}. Upon full payment, clients receive
                    rights to the final deliverables as defined in the project
                    agreement. {PROFILE_INFO.name} reserves the right to display
                    completed work in portfolios or case studies.
                </p>
            </section>

            {/* 7. Limitation of Liability */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    7. Limitation of Liability
                </h2>
                <p>
                    {PROFILE_INFO.name} shall not be liable for any indirect,
                    incidental, special, or consequential damages arising from
                    the use of this website or provided services, including but
                    not limited to loss of data, revenue, or business
                    opportunities.
                </p>
            </section>

            {/* 8. Governing Law */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-foreground">
                    8. Governing Law
                </h2>
                <p>
                    These Terms of Service are governed by and construed in
                    accordance with the laws of India. Any disputes shall be
                    subject to the exclusive jurisdiction of the courts located
                    in {PROFILE_INFO.location}.
                </p>
            </section>
        </LegalPage>
    );
}
