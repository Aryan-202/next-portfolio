import React from 'react'
import Pricing from '@/components/layouts/pricing'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
    description: "Transparent pricing for automation services, AI workflow development, and lead generation systems.",
};

const PricingPage = () => {
    return (
        <div className="pt-20">
            <Pricing />
        </div>
    )
}

export default PricingPage
