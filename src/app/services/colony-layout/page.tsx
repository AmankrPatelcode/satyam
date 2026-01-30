import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "colony-layout";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} & Town Planning | Er. Satyam Singh`,
        description: service.shortDescription + " Infrastructure and layout planning as per state norms.",
        keywords: "Colony Planning, Layout Design, Town Planning UP, Residential Colony Map",
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
