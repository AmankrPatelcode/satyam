import { Service } from "@/data/services";
import * as Icons from "lucide-react";
import CTASection from "./CTASection";
import React from "react";

interface ServiceDetailProps {
    service: Service;
}

const ServiceDetail = ({ service }: ServiceDetailProps) => {
    const IconComponent = (Icons as unknown as Record<string, React.ElementType>)[service.icon] || Icons.FileText;

    return (
        <div className="bg-white">
            {/* Service Hero */}
            <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gray-950 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-brand opacity-10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-brand/20 text-brand px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <IconComponent className="w-4 h-4" />
                            <span>Technical Engineering Service</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            {service.title}
                        </h1>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            {service.longDescription}
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Left Column: Details */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Compliance & Legal */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                                    <Icons.ShieldCheck className="w-6 h-6 text-brand" />
                                    <span>Legal & Regulatory Compliance</span>
                                </h2>
                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8">
                                    <p className="text-text-muted mb-6">
                                        This service is executed in strict adherence to state building bye-laws and national standards.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-xs font-bold uppercase text-gray-400 mb-2">Applicable By-laws</h4>
                                            <p className="font-semibold text-text">{service.compliance.bylaws}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold uppercase text-gray-400 mb-2">IS Codes Followed</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {service.compliance.isCodes.map((code, i) => (
                                                    <span key={i} className="bg-white border border-gray-200 px-2 py-1 rounded text-xs font-bold text-brand">
                                                        {code}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Authorities */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                                    <Icons.Landmark className="w-6 h-6 text-brand" />
                                    <span>Applicable Authorities</span>
                                </h2>
                                <p className="text-text-muted mb-6">
                                    Our reports and drawings for {service.title} are accepted by the following bodies:
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    {service.authorities.map((auth, i) => (
                                        <div key={i} className="flex items-center space-x-2 bg-white border border-gray-200 px-4 py-2 rounded-xl shadow-sm">
                                            <Icons.CheckCircle2 className="w-4 h-4 text-brand" />
                                            <span className="text-sm font-bold text-text">{auth}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Requirements Checklist */}
                            <div>
                                <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
                                    <Icons.ClipboardList className="w-6 h-6 text-brand" />
                                    <span>Required Documents Checklist</span>
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {service.documentsRequired.map((doc, i) => (
                                        <div key={i} className="flex items-center space-x-3 p-4 border border-gray-100 rounded-xl hover:bg-gray-50 transition-colors">
                                            <div className="bg-brand/10 p-1 rounded-md">
                                                <Icons.ArrowRight className="w-3 h-3 text-brand" />
                                            </div>
                                            <span className="text-sm font-medium text-text">{doc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Sample / Template Note */}
                            <div className="p-8 bg-brand/5 border-2 border-dashed border-brand/20 rounded-2xl text-center">
                                <Icons.FileText className="w-12 h-12 text-brand mx-auto mb-4 opacity-40" />
                                <h3 className="font-bold text-lg mb-2">Technical Report Preview</h3>
                                <p className="text-sm text-text-muted mb-6 max-w-md mx-auto">
                                    Contact us to view a sample of our authority-approved {service.title.toLowerCase()} report as per current municipal standards.
                                </p>
                                <a href={`https://wa.me/918299854096?text=I&apos;m interested in viewing a sample for ${service.title}`} className="inline-flex items-center space-x-2 text-brand font-bold hover:underline">
                                    <span>Request Sample via WhatsApp</span>
                                    <Icons.MessageSquare className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="space-y-8">
                            {/* Service Stats */}
                            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                                <h3 className="text-lg font-bold mb-6 border-b border-gray-100 pb-4">Service Overview</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-muted">Turnaround Time</span>
                                        <span className="text-sm font-bold text-text flex items-center">
                                            <Icons.Clock className="w-4 h-4 mr-2 text-brand" />
                                            {service.turnaroundTime}
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-muted">Legal Validity</span>
                                        <span className="text-sm font-bold text-green-600">Lifetime (Project)</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-text-muted">Digital Signature</span>
                                        <span className="text-sm font-bold text-text">Available</span>
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <a href="tel:+918299854096" className="btn-primary w-full shadow-brand/20">
                                        Call Now
                                    </a>
                                </div>
                            </div>

                            {/* Contact Info Card */}
                            <div className="bg-gray-950 text-white rounded-2xl p-8 relative overflow-hidden">
                                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-brand opacity-20 blur-2xl rounded-full" />
                                <h3 className="text-lg font-bold mb-4">Direct Consulting</h3>
                                <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                                    Have specific queries regarding {service.title}? Speak directly with Er. Satyam Singh.
                                </p>
                                <div className="space-y-4">
                                    <a href="mailto:satyamdeep18@gmail.com" className="flex items-center space-x-3 text-sm hover:text-brand transition-colors">
                                        <Icons.Mail className="w-4 h-4 text-brand" />
                                        <span>satyamdeep18@gmail.com</span>
                                    </a>
                                    <a href="tel:+918299854096" className="flex items-center space-x-3 text-sm hover:text-brand transition-colors">
                                        <Icons.Phone className="w-4 h-4 text-brand" />
                                        <span>+91 8299854096</span>
                                    </a>
                                </div>
                            </div>

                            {/* Disclaimer */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                                <div className="flex items-center space-x-2 text-xs font-bold uppercase text-gray-400 mb-3">
                                    <Icons.AlertCircle className="w-4 h-4" />
                                    <span>Legal Disclaimer</span>
                                </div>
                                <p className="text-[11px] leading-relaxed text-text-muted italic">
                                    {service.compliance.disclaimer} All technical certifications are subject to physical site inspection and verification of original property documents. Signature and seal will only be provided after thorough auditing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title={`Need a ${service.title} for your property?`}
                subtitle={`Connect with Er. Satyam Singh for authority-compliant ${service.title.toLowerCase()} and expert civil consultation.`}
            />
        </div>
    );
};

export default ServiceDetail;
