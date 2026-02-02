"use client";

import React from "react";
import { ArrowRight, ShieldCheck, Award, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <div className="inline-flex items-center space-x-2 bg-brand/10 text-brand px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Registered Engineer & Valuer</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-text mb-6 leading-[1.1] tracking-tight">
                            Professional Engineering <span className="text-brand">& Consultations</span>
                        </h1>

                        <p className="text-lg md:text-xl text-text-muted mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                            Legal credibility and technical authority for building approvals, structure stability certificates, and property valuation across <span className="text-text font-semibold">Uttar Pradesh & Delhi NCR</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
                            <a href="/contact" className="btn-primary w-full sm:w-auto h-14 group">
                                <span>Request Consultation</span>
                                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="#services" className="btn-outline w-full sm:w-auto h-14">
                                View All Services
                            </a>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-gray-100 italic">
                            <div className="flex items-center space-x-3">
                                <div className="bg-white shadow-sm border border-gray-100 p-2 rounded-lg">
                                    <Award className="w-5 h-5 text-brand" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase text-text/60">Chartered</p>
                                    <p className="text-sm font-bold text-text">Engineer (India)</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="bg-white shadow-sm border border-gray-100 p-2 rounded-lg">
                                    <MapPin className="w-5 h-5 text-brand" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase text-text/60">Region</p>
                                    <p className="text-sm font-bold text-text">UP | Delhi NCR</p>
                                </div>
                            </div>

                            <div className="hidden md:flex items-center space-x-3">
                                <div className="bg-white shadow-sm border border-gray-100 p-2 rounded-lg">
                                    <ShieldCheck className="w-5 h-5 text-brand" />
                                </div>
                                <div className="text-left">
                                    <p className="text-xs font-bold uppercase text-text/60">Certified</p>
                                    <p className="text-sm font-bold text-text">Govt. Consultant</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Credentials Highlight Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex-1 w-full max-w-lg"
                    >
                        <div className="relative">
                            <div className="absolute -inset-2 bg-gradient-to-tr from-brand to-brand-light opacity-20 blur-2xl rounded-[2rem]" />
                            <div className="relative bg-white border border-gray-100 rounded-2xl shadow-2xl p-8 transform rotate-1 md:rotate-2 transition-transform hover:rotate-0 duration-500">
                                <div className="mb-8">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-2xl font-bold">Er. Satyam Singh</h3>
                                        <div className="bg-green-500/10 text-green-600 text-[10px] font-bold px-2 py-1 rounded">ACTIVE CONSULTANT</div>
                                    </div>
                                    <p className="text-text-muted text-sm font-medium">B.Tech (Civil) | AMIE (India)</p>
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brand/10 p-2 rounded-full mt-1">
                                            <ShieldCheck className="w-4 h-4 text-brand" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Registered Engineer</h4>
                                            <p className="text-[11px] text-text-muted mt-1 leading-relaxed">
                                                Authority-approved for submission and certification across all major development authorities including Lucknow, Noida, and Ghaziabad.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brand/10 p-2 rounded-full mt-1">
                                            <ShieldCheck className="w-4 h-4 text-brand" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Group of Architects</h4>
                                            <p className="text-[11px] text-text-muted mt-1 leading-relaxed">
                                                Integrated team providing end-to-end planning, structural design, and technical approvals for large scale projects.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-4">
                                        <div className="bg-brand/10 p-2 rounded-full mt-1">
                                            <ShieldCheck className="w-4 h-4 text-brand" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm">Valuer & Technical Expert</h4>
                                            <p className="text-[11px] text-text-muted mt-1 leading-relaxed">
                                                Accepted by leading banks for valuation and structural stability assessment of educational and commercial institutions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-8 pt-8 border-t border-gray-100 flex items-center justify-between">
                                    <div>
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Call Directly</p>
                                        <p className="text-lg font-bold text-brand">+91 8299854096</p>
                                    </div>
                                    <div className="bg-gray-50 p-2 rounded-xl">
                                        <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=tel:+918299854096" alt="Contact QR" className="w-12 h-12 grayscale" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
