"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageSquare, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <nav
            className={cn(
                "fixed w-full z-50 transition-all duration-300 border-b",
                scrolled
                    ? "bg-white/90 backdrop-blur-md py-2 border-gray-200 shadow-sm"
                    : "bg-transparent py-4 border-transparent"
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo / Brand */}
                <Link href="/" className="flex flex-col">
                    <span className="text-xl font-display font-bold text-text leading-tight">
                        Er. Satyam Singh
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-brand font-semibold">
                        Chartered Engineer (India)
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link href="/" className="text-sm font-medium hover:text-brand transition-colors">
                        Home
                    </Link>
                    <Link href="/about" className="text-sm font-medium hover:text-brand transition-colors">
                        About
                    </Link>

                    <div className="relative group">
                        <button className="flex items-center space-x-1 text-sm font-medium hover:text-brand transition-colors">
                            <span>Services</span>
                            <ChevronDown className="w-4 h-4" />
                        </button>
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left -translate-y-2 group-hover:translate-y-0">
                            <div className="py-2 grid grid-cols-1">
                                {services.map((service) => (
                                    <Link
                                        key={service.id}
                                        href={`/services/${service.slug}`}
                                        className="px-4 py-2 text-xs hover:bg-brand/5 hover:text-brand transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <Link href="/contact" className="text-sm font-medium hover:text-brand transition-colors">
                        Contact
                    </Link>

                    <div className="flex items-center space-x-4 ml-4">
                        <a
                            href="tel:+918299854096"
                            className="flex items-center space-x-2 text-sm font-semibold text-text hover:text-brand transition-colors"
                        >
                            <Phone className="w-4 h-4 text-brand" />
                            <span>+91 8299854096</span>
                        </a>
                        <a
                            href="https://wa.me/918299854096"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition-all flex items-center space-x-2"
                        >
                            <MessageSquare className="w-4 h-4" />
                            <span>WhatsApp</span>
                        </a>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-text p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className={cn(
                            "lg:hidden fixed inset-0 top-[60px] bg-white z-[40] overflow-y-auto overscroll-behavior-contain"
                        )}
                        style={{ maxHeight: "calc(100vh - 60px)" }}
                    >
                        <div className="container-custom py-8 flex flex-col space-y-6">
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold border-b border-gray-100 pb-2"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold border-b border-gray-100 pb-2"
                            >
                                About
                            </Link>
                            <div className="flex flex-col space-y-4">
                                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                                    Our Services
                                </span>
                                <div className="grid grid-cols-1 gap-3">
                                    {services.slice(0, 6).map((service) => (
                                        <Link
                                            key={service.id}
                                            href={`/services/${service.slug}`}
                                            onClick={() => setIsOpen(false)}
                                            className="text-base font-medium text-text hover:text-brand"
                                        >
                                            {service.title}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/services"
                                        onClick={() => setIsOpen(false)}
                                        className="text-brand font-semibold underline"
                                    >
                                        View All Services
                                    </Link>
                                </div>
                            </div>
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="text-lg font-semibold border-b border-gray-100 pb-2"
                            >
                                Contact
                            </Link>

                            <div className="pt-6 flex flex-col space-y-4">
                                <a
                                    href="tel:+918299854096"
                                    className="flex items-center space-x-3 text-lg font-bold"
                                >
                                    <div className="bg-brand/10 p-2 rounded-full">
                                        <Phone className="w-5 h-5 text-brand" />
                                    </div>
                                    <span>+91 8299854096</span>
                                </a>
                                <a
                                    href="https://wa.me/918299854096"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#25D366] text-white py-4 rounded-xl text-center font-bold text-lg flex items-center justify-center space-x-3"
                                >
                                    <MessageSquare className="w-6 h-6" />
                                    <span>Inquiry via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
