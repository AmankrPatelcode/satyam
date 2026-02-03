import type { Metadata } from "next";
import { Inter, Outfit, Alex_Brush } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";
import DynamicTitle from "@/components/DynamicTitle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
});

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-alex",
});

export const metadata: Metadata = {
  title: "Er. Satyam Singh | Chartered Engineer (India) | Civil Engineering Consultant",
  description: "Professional Engineering Services for building plans, property valuation, structure stability certificates, and architectural services in Uttar Pradesh & Delhi NCR. Registered Engineer for Municipal & Development Authority approvals.",
  keywords: "Chartered Engineer in UP, Chartered Engineer in Delhi NCR, Building Plan Approval Engineer, Structure Stability Certificate, Property Valuation Engineer, Colony Layout Planner, Architectural Services Engineer, MSR Report Engineer, Civil Engineer for Government Approval",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Er. Satyam Singh | Chartered Engineer (India)",
    "image": "https://satyam-singh.vercel.app/logo.png",
    "@id": "https://satyam-singh.vercel.app",
    "url": "https://satyam-singh.vercel.app",
    "telephone": "+918299854096",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lucknow",
      "addressRegion": "UP",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8467,
      "longitude": 80.9462
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "sameAs": [
      "https://www.linkedin.com/in/satyam-singh-civil"
    ],
    "description": "Er. Satyam Singh is a Chartered Engineer (India) providing professional engineering services for building plans, property valuation, and structure stability certificates in UP and Delhi NCR.",
    "areaServed": ["Uttar Pradesh", "Delhi NCR"]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} ${alexBrush.variable} font-sans antialiased text-text`}>
        <DynamicTitle />
        <PageLayout>
          <Navbar />
          <main>
            {children}
          </main>
          <Footer />
        </PageLayout>
      </body>
    </html>
  );
}
