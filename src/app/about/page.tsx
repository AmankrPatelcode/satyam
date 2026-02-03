import { ShieldCheck, Award, BookOpen, GraduationCap, CheckCircle2, PencilRuler, HardHat } from "lucide-react";
import CTASection from "@/components/CTASection";

export const metadata = {
    title: "About Er. Satyam Singh | Chartered Engineer & Civil Technical Expert",
    description: "Learn about the technical background and professional credentials of Er. Satyam Singh, B.Tech (Civil), AMIE (India), providing engineering consultancy in UP and Delhi NCR.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            {/* Header */}
            <section className="pt-32 pb-16 lg:pt-48 lg:pb-24 bg-gray-50 border-b border-gray-100">
                <div className="container-custom">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Technical <span className="text-brand">Excellence</span> & Legal Authority</h1>
                        <p className="text-text-muted text-lg md:text-xl leading-relaxed">
                            Er. Satyam Singh is a distinguished <span className="text-text font-bold">Chartered Engineer (India)</span> providing specialized civil engineering consultancy for high-stakes approvals, valuation, and structural safety.
                        </p>
                    </div>
                </div>
            </section>

            {/* Profile Section */}
            <section className="py-24">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Professional Credentials</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { icon: ShieldCheck, title: "Chartered Engineer", desc: "Legal Authority" },
                                        { icon: GraduationCap, title: "B.Tech (Civil)", desc: "Technical Foundation" },
                                        { icon: Award, title: "AMIE (India)", desc: "Professional Excellence" },
                                        { icon: BookOpen, title: "Group of IBBI Affiliate", desc: "Valuation Expertise" },
                                        { icon: PencilRuler, title: "Group of Architect", desc: "Architectural Services" },
                                        { icon: HardHat, title: "Civil Consultant", desc: "Expert Engineering Advice" }

                                    ].map((item, i) => (
                                        <div key={i} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-2xl">
                                            <div className="bg-brand/10 p-2 rounded-xl text-brand">
                                                <item.icon className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <p className="font-bold text-sm">{item.title}</p>
                                                <p className="text-[10px] uppercase font-bold text-gray-400">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="prose prose-gray max-w-none">
                                <p className="text-text-muted leading-relaxed">
                                    With a robust background in civil engineering and a deep understanding of Indian Building Bye-Laws, Er. Satyam Singh has established a consultancy that bridges the gap between architectural vision and regulatory compliance.
                                </p>
                                <p className="text-text-muted leading-relaxed mt-4">
                                    Operating as a <strong>Group of Registered Engineers and Architects</strong>, his team provides a one-stop solution for builders, developers, and private homeowners across <strong>Uttar Pradesh and Delhi NCR</strong>.
                                </p>
                                <p className="text-text-muted leading-relaxed mt-4">
                                    His expertise is frequently called upon by municipal authorities, financial institutions, and legal firms to certify structural stability and provide unbiased property valuations.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center space-x-2 text-sm font-bold text-text">
                                    <CheckCircle2 className="w-4 h-4 text-brand" />
                                    <span>LDA Approved</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm font-bold text-text">
                                    <CheckCircle2 className="w-4 h-4 text-brand" />
                                    <span>Awas Bandhu Registered</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm font-bold text-text">
                                    <CheckCircle2 className="w-4 h-4 text-brand" />
                                    <span>UPAVP Approved</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-brand/5 blur-3xl rounded-full" />
                            <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-2xl">
                                <h3 className="text-2xl font-bold mb-8">Service Philosophy</h3>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="bg-text text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0">1</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Authority Compliance</h4>
                                            <p className="text-sm text-text-muted mt-2">Zero compromise on municipal laws. Every drawing and report is vetted against current OBPAS and local by-laws.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-text text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0">2</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Technical Accuracy</h4>
                                            <p className="text-sm text-text-muted mt-2">Use of modern software for load calculations and precise estimation to ensure financial and structural safety.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="bg-text text-white w-8 h-8 rounded-lg flex items-center justify-center font-bold shrink-0">3</div>
                                        <div>
                                            <h4 className="font-bold text-lg">Speed & Reliability</h4>
                                            <p className="text-sm text-text-muted mt-2">Structured turnaround times for valuation and stability certificates to meet tight banking and legal deadlines.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <CTASection
                title="Consult with a Professional"
                subtitle="Get technically sound advice for your construction and approval needs."
            />
        </div>
    );
}
