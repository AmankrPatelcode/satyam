import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "valuation";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `Property Valuation Engineer | Bank Approved Valuer | Er. Satyam Singh`,
        description: service.shortDescription + " Professional valuation for bank loans, legal issues, and personal use.",
        keywords: "Property Valuation, Valuer Engineer, Bank Valuation, Market Value Report, Civil Valuer",
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
