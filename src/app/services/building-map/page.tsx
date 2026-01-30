import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "building-map";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Er. Satyam Singh`,
        description: service.shortDescription + " Professional engineering services in UP and Delhi NCR.",
        keywords: `Building Map, Building Plan Approval, ${service.authorities.join(", ")}, Chartered Engineer UP`,
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
