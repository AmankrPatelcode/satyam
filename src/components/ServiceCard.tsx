import React from "react";
import Link from "next/link";
import * as Icons from "lucide-react";
import { Service } from "@/data/services";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
    // Dynamically get the icon component
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.icon] || Icons.FileText;

    return (
        <div className="service-card group flex flex-col h-full">
            <div className="mb-6 inline-flex p-3 rounded-xl bg-brand/5 text-brand group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                <IconComponent className="w-8 h-8" />
            </div>

            <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">
                {service.title}
            </h3>

            <p className="text-text-muted text-sm leading-relaxed mb-6 flex-grow">
                {service.shortDescription}
            </p>

            <div className="space-y-3 mb-6">
                <div className="flex items-center text-[11px] font-bold uppercase tracking-wider text-gray-400">
                    <Icons.CheckCircle className="w-3 h-3 mr-2 text-brand" />
                    <span>Legally Required for: {service.legalRequirements[0]}</span>
                </div>
            </div>

            <Link
                href={`/services/${service.slug}`}
                className="flex items-center text-sm font-bold text-brand group/link"
            >
                <span>Explore Details</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
            </Link>
        </div>
    );
};

export default ServiceCard;
