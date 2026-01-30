import React from "react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";

export const metadata = {
    title: "Engineering Services | Er. Satyam Singh | Building Approvals & Valuation",
    description: "Comprehensive list of civil engineering services including Building Plans, BOQ, Structure Stability certificates, and Valuation in Uttar Pradesh & Delhi NCR.",
};

export default function ServicesListPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gray-50 border-b border-gray-100">
                <div className="container-custom">
                    <div className="max-w-3xl text-center mx-auto">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">Professional <span className="text-brand">Engineering</span> Catalogue</h1>
                        <p className="text-text-muted text-lg md:text-xl leading-relaxed">
                            Every service is delivered with a focus on authority compliance, structural integrity, and financial accuracy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
