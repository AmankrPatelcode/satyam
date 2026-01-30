import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "route-map";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} | Location Plan Expert | Er. Satyam Singh`,
        description: service.shortDescription + " Required for property registry and authority approvals.",
        keywords: "Route Map, Location Plan, Property Registry Map, Site Plan, Engineer Ghaziabad",
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
