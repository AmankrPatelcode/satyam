import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck, ChevronRight } from "lucide-react";
import { services } from "@/data/services";

const Footer = () => {
    return (
        <footer className="bg-gray-950 text-white pt-16 pb-8">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold font-display tracking-tight">Er. Satyam Singh</h3>
                            <p className="text-brand text-xs font-semibold uppercase tracking-wider mt-1">
                                Chartered Engineer (India)
                            </p>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Professional engineering services for municipal approvals, structural stability, and technical valuation. Establishing technical authority across UP and Delhi NCR.
                        </p>
                        <div className="flex items-center space-x-3 text-sm text-gray-300">
                            <ShieldCheck className="w-5 h-5 text-brand" />
                            <span>Government Registered Engineer</span>
                        </div>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-100 mb-6">Our Services</h4>
                        <ul className="space-y-3">
                            {services.slice(0, 5).map((service) => (
                                <li key={service.id}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-gray-400 hover:text-brand text-sm transition-colors flex items-center group"
                                    >
                                        <ChevronRight className="w-3 h-3 mr-2 text-brand transition-transform group-hover:translate-x-1" />
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-100 mb-6">Explore</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-gray-400 hover:text-brand text-sm transition-colors">
                                    About the Consultant
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-brand text-sm transition-colors">
                                    Contact & Consultation
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-gray-400 hover:text-brand text-sm transition-colors">
                                    All Engineering Services
                                </Link>
                            </li>
                            <li>
                                <span className="text-sm text-brand font-medium">Available in UP & Delhi NCR</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-100 mb-6">Contact Details</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <Phone className="w-5 h-5 text-brand mt-0.5" />
                                <div>
                                    <a href="tel:+918299854096" className="text-gray-300 hover:text-white block text-sm">
                                        +91 8299854096
                                    </a>
                                </div>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="w-5 h-5 text-brand mt-0.5" />
                                <a href="mailto:satyamdeep18@gmail.com" className="text-gray-300 hover:text-white text-sm">
                                    satyamdeep18@gmail.com
                                </a>
                            </li>
                            <li className="flex items-start space-x-3 text-sm text-gray-400">
                                <MapPin className="w-5 h-5 text-brand mt-0.5 shrink-0" />
                                <span>Freelancing Services – Serving Uttar Pradesh & Delhi NCR</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-500 text-xs text-center md:text-left">
                    <p>© {new Date().getFullYear()} Tech solutions. All Rights Reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                        <p className="text-brand/50">AMIE (India) | B.Tech (Civil)</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
