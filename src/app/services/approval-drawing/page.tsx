import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "approval-drawing";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `Authority Approval Drawings | OBPAS Submission | Er. Satyam Singh`,
        description: service.shortDescription + " Submission drawings for LDA, GDA, NOIDA, DDA.",
        keywords: "Approval Drawing, Authority Drawing, OBPAS Drawing, Nagar Nigam Map, Submission Map",
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
