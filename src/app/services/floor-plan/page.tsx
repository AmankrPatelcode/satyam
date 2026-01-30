import { services } from "@/data/services";
import ServiceDetail from "@/components/ServiceDetail";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const SLUG = "floor-plan";

export async function generateMetadata(): Promise<Metadata> {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) return { title: "Service Not Found" };

    return {
        title: `${service.title} & Vastu Design | Er. Satyam Singh`,
        description: service.shortDescription + " Functional and Vastu-compliant residential floor plans.",
        keywords: "Floor Plan Design, 2D Layout, Vastu Plan, House Map Civil Engineer",
    };
}

export default function ServicePage() {
    const service = services.find((s) => s.slug === SLUG);
    if (!service) notFound();

    return <ServiceDetail service={service} />;
}
