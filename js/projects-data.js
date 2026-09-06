// Nexora Growth - Centralized Portfolio Data Structure
// To add a new project in the future, simply append a new object to this array.

const NEXORA_PROJECTS = [
  {
    id: "dental-clinic-management",
    title: "Dental Clinic Management",
    category: "Software",
    tag: "Healthcare Software",
    description: "End-to-end dental clinic management system featuring patient electronic health records, appointment scheduling, treatment charting, and automated billing.",
    fullDescription: "A specialized healthcare management software solution engineered for modern dental clinics and multispecialty practices. Features comprehensive digital patient histories, graphical dental tooth charting, automated SMS & WhatsApp appointment reminders, doctor chair scheduling, billing & insurance claims, and inventory tracking for clinical dental supplies.",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Dental Practice & Appointment Dashboard Demo",
        poster: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Express.js", "Docker", "TailwindCSS"],
    client: "SmileCare Dental Network",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "leave-management-system-automobile",
    title: "Leave Management System (Automobile Industry)",
    category: "Software",
    tag: "Automobile Industry HR",
    description: "Enterprise shift and workforce leave management software tailored for automotive assembly lines, manufacturing plants, and floor supervisor approvals.",
    fullDescription: "Built specifically to handle round-the-clock rotational shift patterns in automotive manufacturing and OEM industrial plants. The system provides real-time shift roster management, multi-tier supervisor leave approvals, biometric punch synchronization, assembly line minimum-staffing alerts, compensatory off tracking, and automated workforce availability forecasting.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Automobile Plant Leave & Shift Roster Demo",
        poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Vue 3", "Node.js", "PostgreSQL", "Redis", "REST APIs", "TailwindCSS"],
    client: "Precision Auto Components Ltd.",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "petrol-allowance-system",
    title: "Petrol Allowance",
    category: "Software",
    tag: "Expense & Fleet Mobility",
    description: "Automated petrol allowance and fuel reimbursement platform with GPS route verification, fuel bill OCR parsing, and multi-tier approval workflows.",
    fullDescription: "Designed for corporate fleets, field sales, and on-site engineering teams to eliminate manual fuel claims and fraudulent mileage reports. The software features automated GPS odometer tracking, instant fuel slip receipt scanning using AI OCR, customizable rate-per-kilometer policies, vehicle fuel-efficiency benchmarking, and direct sync with enterprise payroll systems.",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Petrol Allowance & Fuel Claim Workflow Demo",
        poster: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["React Native", "Node.js", "PostgreSQL", "Google Maps API", "Tesseract OCR", "TailwindCSS"],
    client: "TransitLogix Mobility Solutions",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "smart-qr-daily-checksheets",
    title: "Smart QR Code Management For Daily Check Sheets",
    category: "Software",
    tag: "Plant Maintenance & 5S",
    description: "Paperless QR-code-driven digital check sheet platform enabling shop floor operators to scan machine tags, log daily maintenance inspections, and flag breakdowns instantly.",
    fullDescription: "Replaces traditional paper clipboards on factory floors with rapid QR code mobile inspections. Machine operators and maintenance technicians scan tamper-evident QR tags on presses, CNC units, and assembly fixtures to submit daily pre-shift parameter checks, TPM audits, oil pressure readings, safety compliance logs, and real-time maintenance breakdown tickets.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Smart QR Machine Inspection Demo",
        poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["PWA", "React", "Node.js", "MongoDB", "WebSockets", "QR Generator API"],
    client: "Apex Precision Engineering",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "production-management-system",
    title: "Production Management",
    category: "Software",
    tag: "MES & Shop Floor Execution",
    description: "Real-time manufacturing execution system (MES) monitoring shop-floor work orders, machine OEE, shift production targets, scrap tracking, and downtime analysis.",
    fullDescription: "An end-to-end shop floor production management platform that connects plant supervisors, machine operators, and plant heads. Delivers live machine telemetry, Overall Equipment Effectiveness (OEE) calculations, job card allocation, stage-wise cycle time tracking, rejection and scrap classification, and automated shift-handover production summary reports.",
    thumbnail: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Production Line OEE & Job Card Tracking Demo",
        poster: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["React", "FastAPI", "PostgreSQL", "Redis", "MQTT IoT", "Chart.js"],
    client: "Bharat Heavy Forge & Precision",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "smart-dispatch-module",
    title: "Smart Dispatch Module",
    category: "Software",
    tag: "Outbound Logistics & Dispatch",
    description: "Intelligent factory outbound dispatch and logistics system featuring automated packing slips, vehicle loading validation, digital gate passes, and delivery tracking.",
    fullDescription: "Engineered to eliminate dispatch bottlenecks and loading discrepancies in manufacturing warehouses. The module manages customer sales orders, verifies pick-and-pack pallets via barcode scanning, generates automated GST e-way bills and delivery challans, allocates transport carriers, and generates QR-coded security gate passes for commercial dispatch trucks.",
    thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Smart Dispatch & Gate Pass Workflow Demo",
        poster: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Next.js", "Express.js", "PostgreSQL", "E-Way Bill API", "Barcode Scanner SDK"],
    client: "National Logistics & Supply Chain",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "stock-verify-plastic-injection-moulding",
    title: "Stock Verify (Plastic Injection Moulding)",
    category: "Software",
    tag: "Polymer & Tooling Inventory",
    description: "Specialized inventory verification and physical audit software tailored for plastic injection moulding units reconciling raw granules, masterbatches, regrind, and moulds.",
    fullDescription: "Developed specifically for plastic injection moulding facilities to conquer raw material shrinkage and tooling misplacement. Features cycle-count verification for virgin polymer resins, masterbatch colorants, and regrind blending ratios. Accurately tracks mould tool life cycles, shot count maintenance thresholds, cavity status, and real-time finished component buffer stocks.",
    thumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Polymer Stock Audit & Mould Tooling Tracker Demo",
        poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Vue 3", "Node.js", "PostgreSQL", "RFID Integration", "TailwindCSS"],
    client: "PolyMould Tech Industries",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "supplier-management-system",
    title: "Supplier Management",
    category: "Software",
    tag: "Vendor Portal & Procurement",
    description: "Collaborative vendor portal streamlining supplier onboarding, RFQ quotations, purchase order lifecycle tracking, quality rating scorecards, and payment reconciliation.",
    fullDescription: "A modern supplier relationship management (SRM) ecosystem designed to bridge procurement departments with tier-1 and tier-2 vendor networks. Automates digital RFQ floats, transparent quote comparisons, automated PO delivery acknowledgments, incoming goods rejection feedback, ISO/IATF compliance audits, and supplier performance scorecards.",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Vendor Portal & PO Fulfillment Demo",
        poster: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Next.js", "Python FastAPI", "PostgreSQL", "Redis", "SendGrid API", "TailwindCSS"],
    client: "OmniParts Global Supply",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "auto-pdir-generator",
    title: "Auto PDIR Generator",
    category: "Software",
    tag: "Quality Assurance & IATF 16949",
    description: "Automated Pre-Dispatch Inspection Report (PDIR) generator that parses critical dimension tolerances, sampling data, and instantly outputs OEM-compliant inspection certificates.",
    fullDescription: "Built for industrial manufacturers and automotive ancillary suppliers facing rigorous OEM quality compliance. Eliminates hours of tedious manual Excel typing by automatically computing mean, range, and standard deviations from inspection gauges, comparing against drawing tolerance limits, and generating branded, digitally signed PDIR certificates with pass/fail validation.",
    thumbnail: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Auto PDIR Generation & Tolerance Check Demo",
        poster: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["React", "Python", "PDFKit", "NumPy Statistics", "PostgreSQL", "TailwindCSS"],
    client: "Matrix Automotive Quality Labs",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "smart-attendance-master",
    title: "Smart Attendance Master",
    category: "Software",
    tag: "Biometric & Time Tracking",
    description: "Advanced biometric workforce attendance software supporting facial recognition, geo-tagged mobile check-ins, automated overtime calculations, and direct payroll integration.",
    fullDescription: "A high-precision workforce attendance master solution designed for multi-branch companies and manufacturing facilities. Integrates directly with facial recognition biometric devices and mobile GPS geofenced check-ins. Automatically computes grace times, rotational shift hours, late punch penalties, overtime multipliers, and exports one-click payroll readiness files.",
    thumbnail: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Biometric Attendance & Overtime Master Demo",
        poster: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["React", "Node.js", "ZKTeco SDK", "PostgreSQL", "Redis", "TailwindCSS"],
    client: "Pinnacle Industrial Conglomerate",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "medical-field-website",
    title: "Nilofar's Dental Oasis",
    category: "Websites",
    tag: "Medical Field",
    description: "Modern clinic website for Nilofar's Dental Oasis with doctor profiles, dental services, treatment details, and online patient appointment booking.",
    fullDescription: "A clean, modern medical and dental clinic website designed for Nilofar's Dental Oasis. Features doctor expertise, clinical service descriptions, painless dentistry treatments, patient testimonials, and direct WhatsApp and phone appointment booking.",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["Next.js", "TailwindCSS", "Node.js", "WhatsApp API", "Fast Loading"],
    client: "Nilofar's Dental Oasis",
    year: "2026",
    liveUrl: "https://www.nilofarsdentaloasis.com",
    featured: true
  },
  {
    id: "autocare-field-website",
    title: "We Care Auto Repair",
    category: "Websites",
    tag: "Auto Care Field",
    description: "Professional auto repair website for We Care Auto Repair with car servicing packages, vehicle inspection details, and service slot reservations.",
    fullDescription: "Built for We Care Auto Repair to give customers an easy way to explore car service packages, mechanical repairs, denting/painting, periodic maintenance, and instantly book workshop slots online.",
    thumbnail: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["React", "TailwindCSS", "Service Booking", "Google Maps", "Mobile Responsive"],
    client: "We Care Auto Repair",
    year: "2026",
    liveUrl: "https://www.wecareautorepairs.in",
    featured: true
  },
  {
    id: "cab-services-website",
    title: "Morya Cab Services",
    category: "Websites",
    tag: "Cab & Travel Services",
    description: "Fast, mobile-friendly taxi booking website for Morya Cab Services featuring outstation rides, local city packages, and instant WhatsApp booking.",
    fullDescription: "A customer-friendly cab booking website developed for Morya Cab Services. Allows passengers to view car fleet options (Sedan, SUV, Hatchback), check one-way and round-trip outstation rates, and book cabs instantly via direct call or WhatsApp.",
    thumbnail: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1508974239320-0a029497e820?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["HTML5", "CSS3", "JavaScript", "WhatsApp Direct Booking", "Click-to-Call"],
    client: "Morya Cab Services",
    year: "2026",
    liveUrl: "https://www.moryacabservices.co.in",
    featured: true
  },
  {
    id: "restaurants-hospitality-website",
    title: "Restaurant & Cafe Website",
    category: "Websites",
    tag: "Restaurant Field",
    description: "Simple, appetite-inducing restaurant website with digital food menu, table reservation booking, and direct delivery links.",
    fullDescription: "A clean and modern website designed for dining restaurants and cafes. Includes interactive digital menu categories, special dishes showcase, table reservation inquiry forms, customer reviews, and direct links to Zomato & Swiggy.",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["HTML5 / CSS3", "JavaScript", "QR Menu Integration", "WhatsApp Reservation"],
    client: "Gourmet Restaurant & Cafe",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "resorts-hospitality-website",
    title: "Resort & Hotel Website",
    category: "Websites",
    tag: "Resort Field",
    description: "Resort and hotel website with photo galleries, room amenities, weekend stay packages, and direct booking inquiries.",
    fullDescription: "A welcoming website created for resorts and vacation villas. Features photo galleries of rooms, swimming pools, dining areas, weekend staycation packages, and an easy inquiry form for family holidays, weddings, and corporate events.",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["Next.js", "TailwindCSS", "Photo Gallery", "WhatsApp Inquiry"],
    client: "Holiday Resort & Spa",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "interior-designer-firm-website",
    title: "Interior Designer Firm Website",
    category: "Websites",
    tag: "Interior Design Field",
    description: "Portfolio website for interior design and architecture firms showcasing residential homes, commercial offices, and consultation requests.",
    fullDescription: "A clean portfolio website built for interior designers. Displays high-resolution photos of living room designs, modular kitchens, luxury bedroom layouts, and corporate workspaces, along with an easy design consultation booking form.",
    thumbnail: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["React", "Next.js", "Portfolio Gallery", "TailwindCSS"],
    client: "Artisan Space Interior Studio",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "neural-pulse-ai",
    title: "NeuralPulse Autonomous Business Intelligence",
    category: "AI",
    tag: "AI & Automation",
    description: "Custom AI agent framework analyzing enterprise sales calls, customer support chats, and generating predictive market trend reports.",
    fullDescription: "NeuralPulse ingests multimodal enterprise communications, parses sentiment and action items using tailored LLM fine-tunes, and surfaces actionable recommendations directly into Slack and CRM systems. Reduced weekly reporting cycles from 18 hours to zero manual intervention.",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "AI Pipeline In Action Demo",
        poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Python", "LangChain", "OpenAI / Claude APIs", "Pinecone Vector DB", "FastAPI"],
    client: "FinVenture Capital",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "ai-podcast-consistent-character-universe",
    title: "100% AI-Generated Podcast Series (Consistent Characters & Story)",
    category: "Videos",
    tag: "100% AI Generated Video",
    description: "Full episodic AI podcast video show on YouTube (@UCklYKxKvKQz__banhAXBbLw) created with 100% AI generation, featuring consistent characters, lip-sync, and rich story continuity.",
    fullDescription: "A groundbreaking 100% AI-generated podcast and cinematic storytelling series produced for the YouTube channel (@UCklYKxKvKQz__banhAXBbLw). Utilizing state-of-the-art video diffusion models, custom LoRA character identity weights, and multi-track neural voice acting, every episode preserves perfect facial consistency, expressive gestures, dynamic studio lighting, and coherent multi-character narrative progression without any camera crew or voice actors.",
    thumbnail: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "AI Podcast Episode Walkthrough",
        poster: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Runway Gen-3", "Midjourney / LoRA", "ElevenLabs AI Voice", "ComfyUI Pipeline", "DaVinci Resolve"],
    client: "YouTube AI Podcast Universe (UCklYKxKvKQz__banhAXBbLw)",
    year: "2026",
    liveUrl: "https://www.youtube.com/channel/UCklYKxKvKQz__banhAXBbLw",
    featured: true
  },
  {
    id: "dental-oasis-clinic-video",
    title: "Dental Oasis - Clinical Showcase & Patient Experience Video",
    category: "Videos",
    tag: "Healthcare Video Production",
    description: "High-definition promotional video and patient walkthrough produced for Dental Oasis clinic highlighting painless procedures, clinic hygiene, and doctor consultations.",
    fullDescription: "Cinematic clinic brand video and social media showcase produced for Dental Oasis. Combines 4K interior walkthroughs of advanced dental operatory suites, close-up technology highlights (3D intraoral scanners, pain-free anesthesia systems), authentic patient smile testimonial interviews, and doctor consultation features crafted for YouTube, Instagram Reels, and clinic waiting-room displays.",
    thumbnail: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Dental Oasis Clinic Video Cut",
        poster: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["4K Cinematography", "DaVinci Resolve Color Grading", "Gimbal Motion", "Sound Design", "Social Reel Cuts"],
    client: "Dental Oasis Clinic",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "preschool-daily-activity-event-editing",
    title: "Pre-School Daily Activity & Event Video Editing",
    category: "Videos",
    tag: "Educational & Event Video Editing",
    description: "Creative daily event reels and activity video editing for pre-schools capturing sports days, classroom learning, festive performances, and milestone moments.",
    fullDescription: "Dedicated high-turnaround video editing and motion graphics service for early education centers and pre-schools. Converts raw smartphone and camera footage into heartwarming, high-engagement daily activity recaps, annual day dance celebrations, sports day highlights, and creative art workshops with lively background scores, kinetic captions, and parent-friendly social formats.",
    thumbnail: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Pre-School Activity & Event Highlight Demo",
        poster: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Adobe Premiere Pro", "After Effects", "Kinetic Typography", "CapCut Pro", "Color Pop Grading"],
    client: "Little Explorers Pre-School Academy",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "astral-brand-identity",
    title: "Astral Pay Brand Identity & Design System",
    category: "Branding",
    tag: "Visual Identity",
    description: "Complete visual rebranding, custom design token system, guidelines, and social creative templates for an emerging fintech unicorn.",
    fullDescription: "Designed an authoritative, modern brand identity for Astral Pay. Delivered comprehensive brand guidelines including vector typography, bespoke iconography, 3D brand assets, pitch deck templates, and high-engagement social media design systems.",
    thumbnail: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [],
    technologies: ["Figma", "Illustrator", "Blender 3D", "Brand Tokens", "Design System"],
    client: "Astral Financial Technologies",
    year: "2025",
    liveUrl: "",
    featured: false
  },
  {
    id: "dental-clinic-marketing",
    title: "Dental Clinic Patient Acquisition & Marketing",
    category: "Marketing",
    tag: "Healthcare Digital Marketing",
    description: "Hyper-local patient acquisition campaign driving dental appointments via Google Maps SEO, targeted Meta ads, and automated WhatsApp booking reminders.",
    fullDescription: "Comprehensive digital growth strategy tailored for dental clinics and cosmetic dental practices. Implemented hyper-local Google Search and Google Maps (GMB) optimization to capture high-intent emergency and cosmetic dentistry searches. Designed high-converting video ad creatives on Instagram and Facebook featuring patient smile makeovers, teeth whitening offers, and automated WhatsApp appointment scheduling.",
    thumbnail: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Dental Patient Growth Campaign Showcase",
        poster: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Meta Ads Manager", "Google Maps & Local SEO", "Instagram Growth", "WhatsApp Business API", "Canva & Figma"],
    client: "SmileCare Dental Clinics",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "restaurant-footfall-marketing",
    title: "Restaurant Footfall & Brand Growth Marketing",
    category: "Marketing",
    tag: "Food & Hospitality Marketing",
    description: "High-engagement social media & local footfall campaign driving weekend table bookings, viral culinary reels, and direct delivery orders.",
    fullDescription: "Crafted an irresistible digital presence for premium dining and restaurant spaces. We produced mouth-watering cinematic food reels, geo-targeted Instagram story promotions targeting foodies within an 8km radius, influencer tasting collaborations, and automated Zomato/Swiggy review boosting strategies that increased weekday table reservations by over 45%.",
    thumbnail: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Culinary Reel & Dining Campaign Promo",
        poster: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Instagram Food Reels", "Meta Local Ads", "Google Business Profile", "Influencer Collabs", "Zomato/Swiggy CRO"],
    client: "Urban Feast Gourmet Kitchen",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "photographer-instagram-growth",
    title: "Photographer Instagram Page Growth & Client Booking",
    category: "Marketing",
    tag: "Creator & Social Media Growth",
    description: "Organic & paid Instagram growth strategy for a professional photographer showcasing portfolio aesthetics, viral reels, and high-ticket client inquiries.",
    fullDescription: "Engineered an aesthetic, high-converting Instagram profile overhaul for a professional portrait and commercial photographer. Optimized bio and highlights for frictionless DM client bookings, curated high-retention cinematic photography reels, behind-the-scenes editing workflow carousels, and hashtag clustering that scaled audience reach and booked out weekend photoshoot packages.",
    thumbnail: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Photographer Portfolio & Reel Demo",
        poster: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Instagram Reels SEO", "Aesthetic Grid Curation", "CapCut & Lightroom", "Meta Boost Campaigns", "DM Booking Automation"],
    client: "VisualCraft Photography",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "the-khopoli-resort-marketing",
    title: "The Khopoli Resort - Getaways & Direct Booking Marketing",
    category: "Marketing",
    tag: "Resort & Tourism Marketing",
    description: "360-degree tourism marketing campaign driving weekend staycation bookings, corporate retreat inquiries, and wedding leads for a luxury resort in Khopoli.",
    fullDescription: "End-to-end luxury resort marketing strategy promoting scenic weekend getaways between Mumbai and Pune. Leveraged drone aerial video ads, monsoon and holiday package campaigns on Meta & Google Search, seamless WhatsApp direct room booking funnels, and Google Maps local tourism ranking that delivered 100% weekend room occupancy and corporate offsite banquet bookings.",
    thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "The Khopoli Resort Scenic Aerial Campaign",
        poster: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Meta Ads (Mumbai/Pune Geo-Targeting)", "Google Search Ads", "Drone Cinematography", "WhatsApp Direct Booking", "TripAdvisor & GMB"],
    client: "The Khopoli Resort & Spa",
    year: "2026",
    liveUrl: "",
    featured: true
  },
  {
    id: "event-organizer-firm-marketing",
    title: "Event Organizer Firm Lead Generation & Brand Campaign",
    category: "Marketing",
    tag: "Event & B2B Lead Gen",
    description: "Multi-channel lead generation and social proof campaign generating high-value corporate summit inquiries, luxury wedding planning leads, and brand activations.",
    fullDescription: "B2B and luxury consumer event marketing engine designed for a premier event planning and management firm. Deployed targeted LinkedIn and Meta video campaigns highlighting completed grand wedding setups, corporate conferences, and celebrity galas. Integrated interactive event budget calculators, instant WhatsApp quotation bots, and retargeting ads that scaled high-ticket client contract closures.",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop"
    ],
    videos: [
      {
        title: "Event Showcase & Wedding Gala Campaign Demo",
        poster: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
        url: "https://www.w3schools.com/html/mov_bbb.mp4"
      }
    ],
    technologies: ["Meta Lead Generation Ads", "LinkedIn B2B Ads", "Video Showreels", "CRM Lead Integration", "Landing Page CRO"],
    client: "Celebration Crafters Event Management",
    year: "2026",
    liveUrl: "",
    featured: true
  }
];

// Helper functions for easy querying
window.NEXORA_PROJECTS = NEXORA_PROJECTS;

function getProjects(category = "All") {
  if (!category || category.toLowerCase() === "all") {
    return NEXORA_PROJECTS;
  }
  return NEXORA_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase());
}

function getFeaturedProjects() {
  return NEXORA_PROJECTS.filter(p => p.featured);
}

function getProjectById(id) {
  return NEXORA_PROJECTS.find(p => p.id === id);
}
