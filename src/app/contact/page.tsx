import React from "react";
import { Phone, Mail, MessageSquare, MapPin, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Contact Er. Satyam Singh | Engineering Consultation & Site Visits",
    description: "Get in touch with Er. Satyam Singh for building plans, property valuation, and structure stability certificates. Serving Lucknow, Noida, Ghaziabad, and Delhi NCR.",
};

export default function ContactPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gray-950 text-white overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent" />
                <div className="container-custom relative z-10">
                    <div className="max-w-3xl">
                        <div className="inline-flex items-center space-x-2 text-brand font-bold text-xs uppercase tracking-widest mb-4">
                            <span className="w-8 h-[2px] bg-brand" />
                            <span>Contact & Consultation</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 italic">Secure Your Project&apos;s <br /><span className="text-brand">Legal Approval</span></h1>
                        <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                            Available for site visits, technical audits, and authority liaison across UP and Delhi NCR. Direct access to expert civil consultancy.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="py-24 -mt-12 group">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="lg:col-span-1 space-y-6">
                            <a
                                href="tel:+918299854096"
                                className="block p-8 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:border-brand/20 group/card"
                            >
                                <div className="bg-brand/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-brand group-hover/card:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Call Directly</h3>
                                <p className="text-text-muted text-sm mb-4">Speak with the consultant for immediate advice.</p>
                                <p className="text-2xl font-bold text-brand">+91 8299854096</p>
                            </a>

                            <a
                                href="https://wa.me/918299854096"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block p-8 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:border-brand/20 group/card"
                            >
                                <div className="bg-[#25D366]/10 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-[#25D366] group-hover/card:text-white transition-colors">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
                                <p className="text-text-muted text-sm mb-4">Send site photos or documents for review.</p>
                                <p className="text-2xl font-bold text-[#25D366]">Chat with us</p>
                            </a>

                            <a
                                href="mailto:satyamdeep18@gmail.com"
                                className="block p-8 bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-xl transition-all hover:border-brand/20 group/card"
                            >
                                <div className="bg-text/5 w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover/card:bg-text group-hover/card:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">Email Official</h3>
                                <p className="text-text-muted text-sm mb-4">Request detailed quotes and technical reports.</p>
                                <p className="text-lg font-bold text-text truncate">satyamdeep18@gmail.com</p>
                            </a>
                        </div>

                        {/* Right Side: Map/Info */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 h-full">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div>
                                        <h2 className="text-2xl font-bold mb-8">Operational Presence</h2>
                                        <div className="space-y-8">
                                            <div className="flex items-start space-x-4">
                                                <MapPin className="w-6 h-6 text-brand mt-1" />
                                                <div>
                                                    <h4 className="font-bold">Uttar Pradesh</h4>
                                                    <p className="text-sm text-text-muted mt-1 leading-relaxed">
                                                        Serving Lucknow, Kanpur, Ayodhya, Varanasi & Prayagraj.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex items-start space-x-4">
                                                <MapPin className="w-6 h-6 text-brand mt-1" />
                                                <div>
                                                    <h4 className="font-bold">Delhi NCR</h4>
                                                    <p className="text-sm text-text-muted mt-1 leading-relaxed">
                                                        Serving Noida, Greater Noida, Ghaziabad & Gurgaon.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold mb-8">Consultation Hours</h2>
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                                                <span className="text-sm font-medium">Monday - Friday</span>
                                                <span className="text-sm font-bold">10:00 AM - 07:00 PM</span>
                                            </div>
                                            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                                                <span className="text-sm font-medium">Saturday</span>
                                                <span className="text-sm font-bold">10:00 AM - 04:00 PM</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm font-medium">Sunday</span>
                                                <span className="text-sm font-bold text-brand">On Site Only</span>
                                            </div>
                                        </div>
                                        <div className="mt-12 p-6 bg-brand/5 rounded-2xl border border-brand/10">
                                            <p className="text-xs font-bold uppercase text-brand tracking-widest mb-2 flex items-center">
                                                <ShieldCheck className="w-4 h-4 mr-2" />
                                                Priority Support
                                            </p>
                                            <p className="text-sm text-text-muted leading-relaxed">
                                                Emergency structural audits and bank valuation reports can be fast-tracked on request.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder / Verification Area */}
            <section className="py-20 bg-white">
                <div className="container-custom">
                    <div className="bg-gray-200 w-full h-[400px] rounded-[3rem] overflow-hidden flex items-center justify-center text-gray-400 group">
                        <div className="text-center group-hover:scale-110 transition-transform">
                            <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="font-bold uppercase tracking-widest text-xs italic">Consultancy Area: North India (UP | NCR)</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
