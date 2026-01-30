import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { ShieldCheck, Calendar, CheckCircle2, ChevronRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      {/* Authority Showcase */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <p className="text-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-400 mb-8">
            Accepted & Authorized By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-display font-black text-gray-800 tracking-tighter italic">LUCKNOW DA</span>
            <span className="text-xl font-display font-black text-gray-800 tracking-tighter italic">NOIDA AUTH</span>
            <span className="text-xl font-display font-black text-gray-800 tracking-tighter italic">GDA GHAZIABAD</span>
            <span className="text-xl font-display font-black text-gray-800 tracking-tighter italic">DDA DELHI</span>
            <span className="text-xl font-display font-black text-gray-800 tracking-tighter italic">NAGAR NIGAM</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
            <div className="max-w-2xl">
              <div className="inline-flex items-center space-x-2 text-brand font-bold text-xs uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-brand" />
                <span>Our Technical Expertise</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold">Comprehensive Engineering <span className="text-brand">Solutions</span></h2>
            </div>
            <p className="text-text-muted text-sm md:text-base md:max-w-xs leading-relaxed">
              Legally compliant reports and designs for all your municipal and financial requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us / Credibility Section */}
      <section className="py-24 bg-gray-950 text-white overflow-hidden relative">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-brand font-bold text-xs uppercase tracking-widest mb-4">
                <span className="w-8 h-[2px] bg-brand" />
                <span>Why Satyam Singh</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                Engineering Authority <br />Built on <span className="text-brand">Trust & Accuracy</span>
              </h2>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                As a Chartered Engineer with deep expertise in regional by-laws, we bridge the gap between complex engineering requirements and legal approvals.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Regulatory Compliance",
                    desc: "All drawings and reports follow UP Urban Planning and Delhi DDA guidelines strictly."
                  },
                  {
                    title: "Registered Professionals",
                    desc: "Certified by the Institution of Engineers (India) for legal validity in courts and banks."
                  },
                  {
                    title: "Multi-Region Service",
                    desc: "Specialized knowledge of local norms for Lucknow, Noida, Ghaziabad, and Delhi NCR."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="bg-brand/20 p-1.5 rounded-full mt-1">
                      <CheckCircle2 className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-brand opacity-10 blur-[100px] rounded-full" />
              <div className="relative grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                    <Calendar className="w-8 h-8 text-brand mb-4" />
                    <span className="text-3xl font-bold block">10+</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Years Exp.</span>
                  </div>
                  <div className="bg-brand p-8 rounded-2xl flex flex-col items-center justify-center text-center text-white">
                    <ShieldCheck className="w-8 h-8 mb-4" />
                    <span className="text-3xl font-bold block">100%</span>
                    <span className="text-[10px] uppercase font-bold text-white/70 tracking-wider">Approval Rate</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                    <MapPin className="w-8 h-8 text-brand mb-4" />
                    <span className="text-3xl font-bold block">15+</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Districts</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col items-center justify-center text-center">
                    <CheckCircle2 className="w-8 h-8 text-brand mb-4" />
                    <span className="text-3xl font-bold block">500+</span>
                    <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlight Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100 flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Authority Approvals?</h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                We specialize in digital submissions for the <strong>OBPAS (Online Building Plan Approval System)</strong> and manual drafting for smaller municipal councils.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Official Submission Drawings",
                  "Vastu Compliance Reports",
                  "Zoning Analysis",
                  "MSR Documents",
                  "Structure Stability Certificates",
                  "Authority Liaison"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-2 text-sm font-semibold text-text">
                    <ChevronRight className="w-4 h-4 text-brand" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:+918299854096" className="btn-primary">
                Call for Expert Advice
              </a>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-full max-w-sm aspect-square bg-white rounded-2xl shadow-xl overflow-hidden shadow-brand/10 border border-gray-100 p-8">
                <div className="absolute top-0 right-0 p-4">
                  <ShieldCheck className="w-12 h-12 text-brand opacity-20" />
                </div>
                <div className="space-y-6">
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-brand">
                    <p className="text-[10px] uppercase font-bold text-gray-400">IS Code Compliant</p>
                    <p className="text-sm font-bold text-text">All reports follow BIS (Bureau of Indian Standards) norms.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-brand">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Digital Seal</p>
                    <p className="text-sm font-bold text-text">Valid QR enabled digital signatures for online portals.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border-l-4 border-brand">
                    <p className="text-[10px] uppercase font-bold text-gray-400">Accepted</p>
                    <p className="text-sm font-bold text-text">Verified by all major Public and Private Banks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
