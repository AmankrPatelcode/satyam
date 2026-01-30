import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "estimate";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} (BOQ) | Er. Satyam Singh`,
        description: service.shortDescription + " Bank loan estimates and PWD based BOQ in UP/NCR.",
        keywords: "Cost Estimation, BOQ, Bank Loan Estimate, Civil Engineer Estimate, Satyam Singh",
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
