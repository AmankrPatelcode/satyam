export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    slug: string;
    icon: string;
    legalRequirements: string[];
    authorities: string[];
    documentsRequired: string[];
    compliance: {
        bylaws: string;
        isCodes: string[];
        disclaimer: string;
    };
    turnaroundTime: string;
}

export const services: Service[] = [
    {
        id: "building-map",
        title: "Building Map / Building Plan",
        slug: "building-map",
        shortDescription: "Authority-compliant planning for residential and commercial projects.",
        longDescription: "Professional building map preparation following local development authority by-laws. We ensure optimal space utilization while adhering to zoning, FAR (Floor Area Ratio), and setback requirements.",
        icon: "Map",
        legalRequirements: ["Municipal Approval", "New Construction Registry", "Bank Loans"],
        authorities: ["LDA (Lucknow)", "GDA (Ghaziabad)", "NOIDA Authority", "DDA (Delhi)"],
        documentsRequired: ["Property Registry", "ID Proof", "Site Photographs"],
        compliance: {
            bylaws: "UP Urban Planning and Development Act, 1973",
            isCodes: ["IS 8888 (Part 1): 2021"],
            disclaimer: "Subject to authority verification and site conditions."
        },
        turnaroundTime: "3-5 Working Days"
    },
    {
        id: "estimate-boq",
        title: "Estimate & BOQ",
        slug: "estimate",
        shortDescription: "Detailed cost estimation and Bill of Quantities for budgeting and loans.",
        longDescription: "Comprehensive Material and Labor cost estimation (BOQ) using current market rates and PWD schedules. Essential for bank loan approvals and project budgeting.",
        icon: "Calculator",
        legalRequirements: ["Bank Loan Application", "Tender Participation", "Financial Planning"],
        authorities: ["Nationalized Banks", "NBFCs", "Government Departments"],
        documentsRequired: ["Approved Drawing", "Site Dimensions", "Project Scope"],
        compliance: {
            bylaws: "CPWD / State PWD Specifications",
            isCodes: ["IS 1200 (Method of Measurement)"],
            disclaimer: "Estimates are based on current market trends and CPWD rates."
        },
        turnaroundTime: "2-3 Working Days"
    },
    {
        id: "route-map",
        title: "Route Map / Location Plan",
        slug: "route-map",
        shortDescription: "Precise location tracking for registry and authority use.",
        longDescription: "Detailed route maps and location plans indicating approach roads, landmarks, and surroundings as required for property registration and development projects.",
        icon: "Navigation",
        legalRequirements: ["Property Registry", "Authority Applications", "Survey Reports"],
        authorities: ["Revenue Department", "Municipal Corporations"],
        documentsRequired: ["Property Details", "Neighboring Landmark Info"],
        compliance: {
            bylaws: "Survey and Settlement Regulations",
            isCodes: ["IS 14931: 2001"],
            disclaimer: "Based on available revenue maps and physical survey."
        },
        turnaroundTime: "1-2 Working Days"
    },
    {
        id: "colony-layout",
        title: "Colony / Layout Planning",
        slug: "colony-layout",
        shortDescription: "Efficient town planning and colony layout design.",
        longDescription: "Strategic planning for residential colonies and townships including infrastructure planning (roads, drainage, electrical) as per town planning norms.",
        icon: "LayoutGrid",
        legalRequirements: ["Colony Approval", "RERA Registration", "Panchayat Approval"],
        authorities: ["Town & Country Planning Dept", "Development Authorities"],
        documentsRequired: ["Khasra Map", "Ownership Documents", "Contour Survey"],
        compliance: {
            bylaws: "Model Town & Country Planning Legislation",
            isCodes: ["National Building Code (NBC) - Part 3"],
            disclaimer: "Approval depends on master plan zoning."
        },
        turnaroundTime: "7-10 Working Days"
    },
    {
        id: "floor-plan",
        title: "Floor Plan Design",
        slug: "floor-plan",
        shortDescription: "Functional and Vastu-based interior layouts.",
        longDescription: "Optimized floor plans focusing on functionality, cross-ventilation, and Vastu principles for a harmonious living or working environment.",
        icon: "SquareBox",
        legalRequirements: ["Personal Construction", "Interior Fit-outs", "Renovations"],
        authorities: ["Private Clients", "Builders"],
        documentsRequired: ["Plot Size", "Client Requirements"],
        compliance: {
            isCodes: ["IS 8888 (Planning & Design of Houses)"],
            bylaws: "Standard Residential Norms",
            disclaimer: "Vastu suggestions are based on traditional principles."
        },
        turnaroundTime: "2-4 Working Days"
    },
    {
        id: "msr",
        title: "Material Specification Report (MSR)",
        slug: "msr",
        shortDescription: "IS code compliant material quality and specification reports.",
        longDescription: "Technical reports specifying grades of cement, steel, and other construction materials to ensure structural integrity and quality compliance.",
        icon: "FileCheck",
        legalRequirements: ["Quality Assurance", "Government Tenders", "Bank Inspections"],
        authorities: ["Banks", "PWD", "Quality Control Units"],
        documentsRequired: ["Structural Drawings", "Material Samples (if any)"],
        compliance: {
            isCodes: ["IS 456 (Concrete)", "IS 1786 (Steel)"],
            bylaws: "Bureau of Indian Standards (BIS)",
            disclaimer: "Specifies quality standards to be maintained on site."
        },
        turnaroundTime: "2-3 Working Days"
    },
    {
        id: "approval-drawing",
        title: "Approval Drawings",
        slug: "approval-drawing",
        shortDescription: "Technical drawings for Municipal and Development Authorities.",
        longDescription: "Drafting of high-precision submission drawings including floor plans, sections, elevations, and site plans formatted specifically for authority portals.",
        icon: "FileSignature",
        legalRequirements: ["Building Permit", "Completion Certificate", "Occupancy Certificate"],
        authorities: ["Nagar Nigam", "DA Portal (Obpas)"],
        documentsRequired: ["Draft Map", "Lease Deed", "Allotment Letter"],
        compliance: {
            bylaws: "Common Building Bye Laws (UP/Delhi)",
            isCodes: ["IS 962: 1989 (Architectural Practice)"],
            disclaimer: "Must be signed by a registered professional."
        },
        turnaroundTime: "3-5 Working Days"
    },
    {
        id: "structure-stability",
        title: "Structure Stability Certificate",
        slug: "structure-stability",
        shortDescription: "Load calculations and structural safety certification.",
        longDescription: "Comprehensive structural audit and load calculation reports to certify the safety and stability of existing or new buildings.",
        icon: "ShieldAlert",
        legalRequirements: ["Commercial Licenses", "School/Bank Operation", "Old Building Audit"],
        authorities: ["District Administration", "Education Dept", "RBI/Banks"],
        documentsRequired: ["As-built Drawings", "Soil Test (if available)"],
        compliance: {
            isCodes: ["IS 456: 2000", "IS 1893 (Seismic Safety)"],
            bylaws: "Disaster Management Guidelines",
            disclaimer: "Certificate valid only for the specified structural state."
        },
        turnaroundTime: "4-6 Working Days"
    },
    {
        id: "valuation",
        title: "Private Valuation",
        slug: "valuation",
        shortDescription: "Professional property valuation for banks and legal use.",
        longDescription: "Fair market valuation of land and buildings by a Chartered Engineer for purposes of mortgages, legal disputes, or personal assessment.",
        icon: "Landmark",
        legalRequirements: ["Loans / Mortgages", "Inheritance / Partition", "Visa Documentation"],
        authorities: ["Income Tax Dept", "Banks", "Courts"],
        documentsRequired: ["Registry Copies", "Tax Receipts", "Map"],
        compliance: {
            bylaws: "Wealth Tax Act / IBC Rules",
            isCodes: ["IVS (International Valuation Standards)"],
            disclaimer: "Valuation is an expert opinion based on market data."
        },
        turnaroundTime: "2-3 Working Days"
    },
    {
        id: "architectural",
        title: "Architectural Services",
        slug: "architectural",
        shortDescription: "Concept to execution comprehensive architectural drawings.",
        longDescription: "Holistic architectural solutions including conceptual design, 3D visualization, working drawings, and site supervision.",
        icon: "Home",
        legalRequirements: ["Luxury Home Construction", "Commercial Projects"],
        authorities: ["Private Clients", "Luxury Developers"],
        documentsRequired: ["Site Dimensions", "Style Preferences"],
        compliance: {
            bylaws: "Council of Architecture Norms",
            isCodes: ["National Building Code 2016"],
            disclaimer: "Full service from concept to completion."
        },
        turnaroundTime: "Continuous / Phase-wise"
    }
];
