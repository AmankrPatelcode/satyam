import React from "react";
import { MessageSquare, Phone, ArrowUpRight } from "lucide-react";

interface CTASectionProps {
    title?: string;
    subtitle?: string;
}

const CTASection = ({
    title = "Ready to Get Started with Your Engineering Projects?",
    subtitle = "Professional consultation for building plans, property valuation, and structural stability. Trusted by municipal authorities and banks."
}: CTASectionProps) => {
    return (
        <section className="py-20 bg-gray-950 overflow-hidden relative">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand opacity-10 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-brand opacity-10 blur-[80px] rounded-full" />

            <div className="container-custom relative z-10">
                <div className="bg-brand/5 border border-white/10 rounded-3xl p-8 md:p-16 text-center backdrop-blur-sm">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
                        {title}
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                        {subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="https://wa.me/918299854096"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-transform hover:scale-105"
                        >
                            <MessageSquare className="w-5 h-5" />
                            <span>WhatsApp Inquiry</span>
                        </a>

                        <a
                            href="tel:+918299854096"
                            className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-transform hover:scale-105"
                        >
                            <Phone className="w-5 h-5" />
                            <span>Call +91 8299854096</span>
                        </a>

                        <a
                            href="/contact"
                            className="w-full sm:w-auto bg-transparent text-white border border-white/20 px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-white/5 transition-all"
                        >
                            <span>Book Consultation</span>
                            <ArrowUpRight className="w-4 h-4" />
                        </a>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 opacity-50">

                        <div className="flex items-center space-x-2 text-white text-xs font-semibold uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            <span>Chartered Engineer (India)</span>
                        </div>
                        <div className="flex items-center space-x-2 text-white text-xs font-semibold uppercase tracking-widest">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                            <span>Group Of Registered Valuer Affiliate</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
