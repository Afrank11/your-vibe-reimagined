/**
 * Single source of truth for all site content.
 * French strings are preserved (fr fields) for the phase-2 /fr locale route.
 */

export const contact = {
  email: "atehfrank11@gmail.com",
  phonePrimary: "+237 653 667 494",
  whatsapp: "https://wa.me/237653667494",
  github: "https://github.com/Afrank11",
  githubRepos: "https://github.com/Afrank11?tab=repositories",
  linkedin: "https://linkedin.com/in/frank-ateh-ateh-98760321a",
  cv: "/Ateh_Frank_Ateh_CV.pdf",
  location: "Yaoundé, Cameroon",
  coordinates: "03°52′N 11°31′E",
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type ProjectGroup =
  | "Web"
  | "Infrastructure & Cloud"
  | "Cybersecurity"
  | "Networking"
  | "Data & AI"
  | "Mobile & Robotics";

export type Project = {
  slug: string;
  title: string;
  group: ProjectGroup;
  kind: string; // short label, e.g. "Web platform"
  tags: string[];
  summary: string;
  summaryFr: string;
  demo?: string;
  /** Screenshot/visual in public/, e.g. "/projects/terra-talent-hub.png" */
  image?: string;
  /** "contain" for logos/diagrams that must not be cropped (default "cover") */
  imageFit?: "cover" | "contain";
};

export type CaseStudy = Project & {
  index: string;
  year: string;
  context: string;
  role: string;
  outcome: string;
  lesson: string;
  /** Detail-page narrative (/work/[slug]) */
  problem: string;
  decisions: { title: string; body: string }[];
  challenges: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "frinux-technologies",
    index: "01",
    title: "Frinux Technologies",
    image: "/projects/frinux.jpg",
    group: "Web",
    kind: "Software engineering studio — founder",
    tags: ["Next.js", "TypeScript", "GSAP", "Brand & Strategy", "Studio"],
    demo: "https://frinux.vercel.app",
    summary:
      "The software engineering studio I founded — where craft meets infrastructure, building websites, products, mobile and AI systems for ambitious brands.",
    summaryFr:
      "Le studio d'ingénierie logicielle que j'ai fondé — sites, produits, applications mobiles et systèmes IA pour des marques ambitieuses.",
    context:
      "Ambitious founders in Cameroon and beyond can find developers easily; what they cannot find is a team that treats design and infrastructure as one discipline. Frinux exists to be that team.",
    role:
      "Founder and lead engineer — positioning, brand, design system, site, and the delivery process behind every client engagement.",
    outcome:
      "A studio with a defined standard: five disciplines, six stages between idea and launch, and products shipped to production rather than presented as mockups.",
    lesson:
      "A studio is a promise before it is a portfolio. Naming the standard publicly is what makes it possible to hold yourself to it on every project.",
    year: "2026 — present",
    problem:
      "Most agencies split the work: designers hand off to developers, and infrastructure is somebody else's problem after launch. The result is products that look right and behave badly — slow, fragile, hard to maintain. Frinux was founded to close that gap by refusing the handoff entirely.",
    decisions: [
      {
        title: "Design and engineering under one standard",
        body: "The studio pairs the discipline of network engineering with the obsession of design. The same people who choose the typography also own the deployment — so performance, accessibility, and maintainability are design decisions, not afterthoughts.",
      },
      {
        title: "Five disciplines, one team",
        body: "Web, product, mobile, AI systems, and infrastructure sit under one roof. Clients get a single accountable team across the whole stack instead of coordinating vendors who each blame the other.",
      },
      {
        title: "A six-stage process, published openly",
        body: "Discovery through launch is documented on the site itself. Publishing the process sets expectations before the first call and holds the studio to a repeatable standard on every engagement.",
      },
      {
        title: "Tools chosen for problems, not posters",
        body: "Next.js, TypeScript, Supabase, React Native, AI integration — the stack is deliberately boring where reliability matters and modern where it earns its keep, rather than chasing whatever is fashionable.",
      },
    ],
    challenges:
      "Building a studio brand from Cameroon that reads credibly to international clients meant the site itself had to be the proof — every performance budget, motion decision, and line of copy is an argument that the team can be trusted with someone else's product.",
    result:
      "Frinux Technologies is live at frinux.vercel.app: a studio for founders and teams who refuse average, shipping products in production across web, mobile, and AI.",
  },
  {
    slug: "terra-talent-hub",
    index: "02",
    title: "Terra Talent Hub",
    image: "/projects/terra-talent-hub.png",
    group: "Web",
    kind: "Skills verification platform",
    tags: ["React", "Supabase", "Payments", "QR Certificates"],
    demo: "https://terratalenthub.com",
    summary:
      "A Cameroonian skills verification platform for talents and employers, with assessments, scoring, verified certificates, and employer dashboards.",
    summaryFr:
      "Plateforme camerounaise de vérification des compétences pour talents et employeurs, avec évaluations, scores, certificats vérifiés et tableaux de bord employeur.",
    context:
      "Employers across Africa struggle to verify what candidates can actually do. Certificates are easy to claim and hard to trust.",
    role:
      "Full-stack developer on team Tera 5 — DigComp assessments, rankings, QR-verified certificates, tiered payments, secure API backend, and the employer dashboard.",
    outcome:
      "A live platform where talents earn verifiable, QR-checked certificates and employers hire against evidence instead of claims.",
    lesson:
      "Trust is a product feature. Every design decision — from scoring to QR verification — had to make honesty the path of least resistance.",
    year: "2024 — 2026",
    problem:
      "A certificate is a claim, and claims are cheap. For hiring to work, an employer standing in front of a candidate needs to confirm — in seconds — that an assessment really happened, what it measured, and how the candidate scored. Nothing in the local market offered that.",
    decisions: [
      {
        title: "Standardized assessment over ad-hoc quizzes",
        body: "Assessments were built on the DigComp framework so that scores mean the same thing across every talent — a shared scale employers can actually compare against, instead of homemade tests nobody can interpret.",
      },
      {
        title: "Verification at the moment of doubt",
        body: "Every certificate carries a QR code that resolves to its live record. The check happens exactly where trust is decided — in the interview, on a phone — not in an email thread days later.",
      },
      {
        title: "Tiered payments to keep the door open",
        body: "A tiered pricing model lets talents start free and pay as the value grows, keeping the platform accessible in a market where a hard paywall would exclude the people it exists for.",
      },
      {
        title: "An employer-side product, not just talent profiles",
        body: "Employers got their own dashboard — rankings, verified results, candidate evidence — because a verification platform only matters if the verifying side actually uses it.",
      },
    ],
    challenges:
      "The hard problems were adversarial: designing scoring that is difficult to game, keeping certificate verification instant and unforgeable, and wiring payment flows across tiers through a secure API backend — all while the product had to stay simple enough for first-time users.",
    result:
      "Terra Talent Hub is live at terratalenthub.com. Talents take standardized assessments, earn ranked, QR-verifiable certificates, and employers hire against evidence instead of claims.",
  },
  {
    slug: "reign-cuts",
    index: "03",
    title: "Reign Cuts",
    image: "/projects/reign-cuts.png",
    group: "Web",
    kind: "Premium barbershop website",
    tags: ["React", "Vercel", "Brand Design", "Booking CTA"],
    demo: "https://ateh-barberdemo.vercel.app/",
    summary:
      "A premium barbershop website — 'Where precision meets style' — with a gold-on-black identity, services, gallery, and booking-ready calls to action.",
    summaryFr:
      "Site premium pour barbershop — identité or sur noir, services, galerie et appels à l'action prêts pour la réservation.",
    context:
      "Local barbershops compete on skill but lose clients online to generic, slow websites — or no website at all. Reign Cuts is the counter-argument.",
    role:
      "Design and build, end to end — brand direction, information architecture, responsive build, and deployment.",
    outcome:
      "A site that feels like the shop it sells: precise, styled, and confident — with booking one click away from every section.",
    lesson:
      "For service businesses, atmosphere is the product. The site has to feel like the chair before the client ever sits in it.",
    year: "2025",
    problem:
      "A premium barbershop charges premium prices, and its website has to justify them before a word is read. The brief: a digital storefront where a visitor instantly understands the level of craft — and can book without friction.",
    decisions: [
      {
        title: "A gold-on-black identity, not a template palette",
        body: "The serif display type and gold-accent-on-dark scheme were chosen to read as luxury grooming, not as a tech site. Every section holds the same two-color discipline so the brand stays composed.",
      },
      {
        title: "Booking as the single resolution",
        body: "Home, services, gallery, about — every section resolves toward 'Book now'. One action, offered at each moment a visitor might be convinced, with no competing links to leak intent.",
      },
      {
        title: "Photography-first layout",
        body: "Large atmospheric imagery carries the craft; text stays short and confident. The hero splits type against a full-height photograph so the shop's style is the first thing that loads.",
      },
    ],
    challenges:
      "Balancing richness with speed: full-height photography and an elegant feel, kept fast on mobile connections through image optimization and a lean React build — because a slow luxury site contradicts itself.",
    result:
      "A live site that reads 'premium barbershop' at first glance — expert cuts, beard sculpting, luxury grooming — structured so every scroll moves a visitor toward the chair.",
  },
  {
    slug: "brightwell-cleaning",
    index: "04",
    title: "Brightwell Cleaning Co.",
    image: "/projects/brightwell_cleaning_services.jpg",
    group: "Web",
    kind: "Local service business website",
    tags: ["React", "Conversion Design", "Local SEO", "Lead Capture"],
    demo: "https://cleaning-site-demo.vercel.app/",
    summary:
      "A trust-first website for a domestic and commercial cleaning company — transparent pricing, a before/after reveal, and quote capture on every screen.",
    summaryFr:
      "Site orienté confiance pour une entreprise de nettoyage — tarifs transparents, comparatif avant/après et demande de devis sur chaque écran.",
    context:
      "Local service businesses live or die on trust. A cleaning company asks strangers to hand over keys to their home — the website has to answer that anxiety before it asks for the booking.",
    role:
      "Design and build, end to end — service architecture, pricing presentation, interactive before/after, quote form, and deployment.",
    outcome:
      "A site where every objection is answered in place: insurance, vetted staff, no lock-in contracts, transparent hourly and fixed prices, and a quote request never more than one scroll away.",
    lesson:
      "For local services, specificity is credibility. Naming real neighbourhoods and exact prices converts better than any adjective.",
    year: "2026",
    problem:
      "Cleaning companies compete against a default assumption of risk — will they show up, are they vetted, what will it actually cost? Most sites answer with stock photos and 'contact us for a quote', which asks the visitor to gamble first and learn later.",
    decisions: [
      {
        title: "Prices on the page, not behind a form",
        body: "Every service leads with a real figure — from £18/hour, from £150, from £160. Publishing prices filters out mismatched leads and signals confidence to the ones who fit.",
      },
      {
        title: "An interactive before/after as the proof",
        body: "A drag-to-reveal slider shows one kitchen before and after a deep clean. It is the single most persuasive element on the page because it demonstrates the outcome instead of describing it.",
      },
      {
        title: "Trust markers placed where doubt appears",
        body: "Fully insured, DBS-checked staff, eco-friendly products, satisfaction guarantee — surfaced as a strip directly under the hero, exactly where a first-time visitor's hesitation starts.",
      },
      {
        title: "Two ways to convert, always visible",
        body: "A quote form for people who plan and a WhatsApp button for people who decide now. Local service enquiries arrive on both channels, so the site never forces one behaviour.",
      },
    ],
    challenges:
      "Balancing volume with clarity: six services, pricing tiers, FAQs, reviews, and a booking flow on one page risks becoming a wall. The fix was strict sectioning and a repeated call to action, so the page reads as a guided conversation rather than a brochure.",
    result:
      "A complete local-business site — services with transparent pricing, before/after proof, three-step booking explanation, reviews, FAQs, and a same-day quote form — live at cleaning-site-demo.vercel.app.",
  },
  {
    slug: "cybersecurity-lab",
    index: "05",
    title: "Enterprise Security Lab",
    image: "/projects/cybersecurity-lab.png",
    group: "Cybersecurity",
    kind: "Multi-OS attack & defense environment",
    tags: ["Kali Linux", "MikroTik", "Wazuh", "Zabbix", "Metasploit"],
    summary:
      "A multi-OS virtual security lab with MikroTik routing, Wazuh and Zabbix monitoring, and Metasploit for penetration testing across two subnetworks.",
    summaryFr:
      "Laboratoire de sécurité multi-OS avec routage MikroTik, supervision Wazuh et Zabbix, et Metasploit pour des tests d'intrusion sur deux sous-réseaux.",
    context:
      "Real attack-and-defense skills can't be learned from slides. They need production-like infrastructure that is safe to break.",
    role:
      "Architect and operator — designed the dual-subnet topology, deployed routing, SIEM monitoring, and offensive tooling across virtual machines.",
    outcome:
      "A fully monitored environment where attacks are launched, detected, and analyzed end to end — offense and defense in one system.",
    lesson:
      "Detection is harder than intrusion. Building the defensive side taught me more than any exploit did.",
    year: "2025",
    problem:
      "Security skills learned from slides don't survive contact with a real network. Practicing attack and defense requires infrastructure that behaves like production — routed, monitored, multi-OS — while staying safe to break. Public labs give you targets; they don't teach you to run the defense.",
    decisions: [
      {
        title: "Two subnets, one MikroTik boundary",
        body: "Attacker and defender networks were separated by MikroTik routing, so every attack had to cross a real network boundary — the same path it would take in production, visible to the same controls.",
      },
      {
        title: "Detection as a first-class citizen",
        body: "Wazuh (SIEM) and Zabbix (monitoring) were deployed before the first exploit was run. The point was never just to get in — it was to watch what getting in looks like from the defender's chair.",
      },
      {
        title: "Multi-OS on purpose",
        body: "Kali for offense, mixed targets for defense — because real environments are heterogeneous, and detection rules that only work on one OS are a false sense of security.",
      },
    ],
    challenges:
      "Tuning was the real work: detection rules that catch Metasploit activity without drowning in alert noise, and squeezing an entire monitored enterprise onto one host's worth of virtual machines without the lab collapsing under its own resource use.",
    result:
      "A complete attack-and-defense loop on my own infrastructure: launch an intrusion on one subnet, watch it surface in the SIEM on the other, and trace the kill chain end to end.",
  },
  {
    slug: "linux-infrastructure",
    index: "06",
    title: "7-Server Linux Infrastructure",
    image: "/projects/linux-infrastructure.png",
    group: "Infrastructure & Cloud",
    kind: "Enterprise service stack",
    tags: ["Ubuntu", "DNS", "DHCP", "Apache", "Postfix", "Samba + AD"],
    summary:
      "Seven servers on one Ubuntu host serving client VMs over a VMware internal network: DHCP, DNS, Apache virtual hosting, Postfix mail, NFS, SSH, and Samba with Active Directory.",
    summaryFr:
      "Sept serveurs sur un hôte Ubuntu servant des clients VM via un réseau interne VMware : DHCP, DNS, Apache, Postfix, NFS, SSH et Samba avec Active Directory.",
    context:
      "A company's core services — naming, addressing, web, mail, files, identity — as a single coherent system, built from zero.",
    role:
      "Sole engineer — provisioned, configured, and interconnected all seven services, then validated each from client machines.",
    outcome:
      "A complete enterprise backbone where every service resolves, authenticates, and delivers to real clients on the network.",
    lesson:
      "Infrastructure rewards patience. When DNS, DHCP, and identity agree, everything above them becomes simple.",
    year: "2024",
    problem:
      "A company's digital life rests on services nobody sees: naming, addressing, web, mail, files, identity. The challenge was to build that entire foundation from zero — seven interdependent servers — and prove it works not from the servers themselves, but from the clients that depend on them.",
    decisions: [
      {
        title: "Dependency order, not checklist order",
        body: "DNS and DHCP came first because everything else assumes they exist. Building in dependency order turned seven separate services into one coherent system instead of seven fragile islands.",
      },
      {
        title: "Identity at the center",
        body: "Samba with Active Directory carries authentication for the environment, so file access and services resolve against one source of truth rather than per-server accounts.",
      },
      {
        title: "Client-side validation as the definition of done",
        body: "No service counted as finished until a client VM on the VMware internal network could consume it — resolve the name, get the lease, load the site, send the mail, mount the share.",
      },
    ],
    challenges:
      "The difficulty was interdependence: mail delivery fails silently when DNS records are wrong, domain joins fail when name resolution and time drift disagree, and debugging seven services sharing one Ubuntu host means every fix risks disturbing a neighbor.",
    result:
      "A complete enterprise backbone — DHCP, DNS, Apache virtual hosting, Postfix, NFS, SSH, and Samba with AD — serving real client machines over an internal network, built and validated end to end.",
  },
  {
    slug: "openstack-cloud",
    index: "07",
    title: "OpenStack Private Cloud",
    image: "/projects/openstack-cloud.png",
    imageFit: "contain",
    group: "Infrastructure & Cloud",
    kind: "Private cloud deployment",
    tags: ["OpenStack", "MicroStack", "Ubuntu", "SSH"],
    summary:
      "A private cloud built with MicroStack on Ubuntu: virtual networks, a cloud router, compute instances, storage volumes, and remote SSH access.",
    summaryFr:
      "Cloud privé avec MicroStack sur Ubuntu : réseaux virtuels, routeur cloud, instances de calcul, volumes de stockage et accès SSH distant.",
    context:
      "Public cloud hides the machinery. To understand what AWS actually does, I built the machinery myself — an OpenStack cloud on my own hardware.",
    role:
      "Sole engineer — deployed MicroStack, designed the virtual network topology, and provisioned compute, storage, and access end to end.",
    outcome:
      "A working private cloud: launch an instance, attach a volume, route it through a virtual network, reach it over SSH — the full lifecycle, self-hosted.",
    lesson:
      "Cloud is not magic; it is networking, storage, and compute with good APIs. Owning the whole stack once makes every managed service legible forever.",
    year: "2025",
    problem:
      "Cloud skills learned through a console teach you buttons, not systems. The goal was to stand up the entire IaaS layer — the part AWS never shows you — and operate it: networks, routing, images, instances, volumes, and access.",
    decisions: [
      {
        title: "MicroStack for a full stack on one host",
        body: "MicroStack packages OpenStack's core services to run on a single Ubuntu machine — the complete architecture (Neutron networking, Nova compute, Cinder storage) without a datacenter's hardware bill.",
      },
      {
        title: "Virtual topology before instances",
        body: "Networks, subnets, and the cloud router were designed first, so every instance launched into a deliberate topology instead of a default flat network — the same discipline as physical network design.",
      },
      {
        title: "Remote access as the acceptance test",
        body: "The deployment only counted as done when an instance was reachable over SSH from outside the cloud — floating IP, security rules, and routing all proven in one connection.",
      },
    ],
    challenges:
      "Resource pressure and opacity: OpenStack's services are heavy for one host, and when instance networking fails, the fault can sit in any of four layers. Debugging meant reading each service's view of the world until they agreed.",
    result:
      "A self-hosted private cloud with virtual networks, a router, compute instances, and attached storage volumes — administered remotely over SSH, from bare Ubuntu to running workloads.",
  },
];

export const archiveProjects: Project[] = [
  ...caseStudies,
  {
    slug: "coach-marcus",
    title: "Coach Marcus",
    group: "Web",
    kind: "Conversion-focused fitness site",
    tags: ["React", "Vercel", "Landing Page"],
    demo: "https://ateh-coach-marcus-demo.vercel.app/",
    summary:
      "A modern fitness coaching site with conversion-focused sections for programs, offers, testimonials, and contact.",
    summaryFr:
      "Site moderne pour coach sportif, avec sections orientées conversion pour programmes, offres, témoignages et contact.",
  },
  {
    slug: "school-management",
    title: "School Management System",
    group: "Web",
    kind: "Multi-user platform",
    tags: ["PHP", "MySQL", "WAMP"],
    summary:
      "Multi-user web platform for school administration: grades, contracts, payments, downloadable documents, and admin account management.",
    summaryFr:
      "Plateforme web multi-utilisateurs pour l'administration scolaire : notes, contrats, paiements, documents téléchargeables et gestion des comptes.",
  },
  {
    slug: "ai-network-assistant",
    title: "AI Network Assistant",
    group: "Data & AI",
    kind: "AI-powered learning tool",
    tags: ["Python", "Flask", "SQLite", "AI"],
    summary:
      "Lightweight AI web app for networking students: project ideas, code explanation, debugging, and interactive networking lessons.",
    summaryFr:
      "Application web légère avec IA pour étudiants en réseaux : idées de projets, explication de code, débogage et leçons interactives.",
  },
  {
    slug: "android-weather",
    title: "Android Weather App",
    group: "Mobile & Robotics",
    kind: "Mobile application",
    tags: ["Android Studio", "Java", "OpenWeather API"],
    summary:
      "Android weather app with city autocomplete, OpenWeather real-time data, and local favorite-city storage.",
    summaryFr:
      "Application météo Android avec autocomplétion des villes, données temps réel OpenWeather et stockage local des villes favorites.",
  },
  {
    slug: "parking-robot",
    title: "Autonomous Parking Robot",
    group: "Mobile & Robotics",
    kind: "Embedded system",
    tags: ["Arduino", "C++", "Ultrasonic Sensors"],
    summary:
      "Physical robot that detects free parking spaces with ultrasonic sensors and executes a parking maneuver, with LCD status display.",
    summaryFr:
      "Robot physique qui détecte les places libres avec capteurs ultrasoniques et effectue une manœuvre de stationnement, avec affichage LCD.",
  },
  {
    slug: "nosql-social-db",
    title: "NoSQL Social Media Backend",
    group: "Data & AI",
    kind: "Polyglot persistence",
    tags: ["MongoDB", "Cassandra", "Redis", "Neo4j", "Docker"],
    summary:
      "Social media backend across MongoDB, Cassandra, Redis, and Neo4j, with a Flask/FastAPI front and Dockerized services.",
    summaryFr:
      "Backend de réseau social avec MongoDB, Cassandra, Redis et Neo4j, frontend Flask/FastAPI et services conteneurisés avec Docker.",
  },
  {
    slug: "delivery-database",
    title: "Package Delivery Database",
    group: "Data & AI",
    kind: "Relational design",
    tags: ["MySQL", "Triggers", "Transactions"],
    summary:
      "Relational database for inter-city package delivery: sender/recipient tracking, MCD/MLD models, triggers, transactions, complex queries.",
    summaryFr:
      "Base relationnelle pour livraison interurbaine : suivi expéditeur/destinataire, modèles MCD/MLD, triggers, transactions et requêtes complexes.",
  },
  {
    slug: "air-quality-analysis",
    title: "Global Air Quality Analysis",
    group: "Data & AI",
    kind: "Data science",
    tags: ["Python", "PCA", "Kaggle"],
    summary:
      "Analysis of ~3,600 records of global pollutants using PCA and Python to identify pollution trends.",
    summaryFr:
      "Analyse d'environ 3 600 lignes sur les polluants mondiaux, avec PCA et Python pour identifier les tendances.",
  },
  {
    slug: "accessibility-audit",
    title: "Web Accessibility Remediation",
    group: "Web",
    kind: "Audit & rebuild",
    tags: ["WCAG", "axe DevTools", "HTML/CSS"],
    summary:
      "Audited a non-compliant website with axe DevTools, then rewrote HTML/CSS to resolve WCAG, ergonomic, and heuristic issues.",
    summaryFr:
      "Audit d'un site non conforme avec axe DevTools, puis réécriture HTML/CSS pour corriger les problèmes WCAG, ergonomiques et heuristiques.",
  },
  {
    slug: "agripreneur-cameroon",
    title: "Agripreneur Cameroon",
    group: "Web",
    kind: "Program website",
    tags: ["HTML", "CSS", "JavaScript"],
    summary:
      "Official website for the Who Wants to Be an Agripreneur Cameroon program — visibility, brand presentation, and participant connection.",
    summaryFr:
      "Site officiel du programme Who Wants to Be an Agripreneur Cameroon — visibilité, marque et connexion avec les participants.",
  },
  {
    slug: "handyman-marketplace",
    title: "Handyman Marketplace",
    group: "Web",
    kind: "Marketplace",
    tags: ["PHP", "MySQL"],
    summary:
      "Marketplace connecting clients with local skilled tradespeople — providers list services, clients browse or request help.",
    summaryFr:
      "Marketplace connectant les clients aux artisans locaux — les prestataires listent leurs services et les clients demandent de l'aide.",
  },
  {
    slug: "coach-webflow",
    title: "Coach Portfolio (Webflow)",
    group: "Web",
    kind: "Client site, no-code",
    tags: ["Webflow", "Lead Generation"],
    summary:
      "Professional no-code website for a personal coach client, focused on lead generation, brand, and conversion.",
    summaryFr:
      "Site professionnel no-code pour un coach, axé sur la génération de prospects, la marque et la conversion.",
  },
  {
    slug: "ensp-network-labs",
    title: "Huawei eNSP Network Labs",
    group: "Networking",
    kind: "Protocol engineering",
    tags: ["OSPF", "Wireshark", "VLAN", "MPLS", "NAT"],
    summary:
      "Professional networking labs covering OSPF, Wireshark analysis, VLANs, MPLS, NAT, and network fault diagnosis.",
    summaryFr:
      "Labs réseau professionnels couvrant OSPF, analyse Wireshark, VLAN, MPLS, NAT et diagnostic de pannes réseau.",
  },
  {
    slug: "hackthissite",
    title: "HackThisSite Challenges",
    group: "Cybersecurity",
    kind: "Offensive practice",
    tags: ["CTF", "Web Security", "Cryptography"],
    summary:
      "Completed basic and realistic HackThisSite challenges — hands-on practice with web vulnerabilities, logic flaws, and cryptography.",
    summaryFr:
      "Réalisation de défis HackThisSite basiques et réalistes — pratique des vulnérabilités web, failles logiques et cryptographie.",
  },
  {
    slug: "mobsf-analysis",
    title: "Mobile Static Security Analysis",
    group: "Cybersecurity",
    kind: "AppSec assessment",
    tags: ["MobSF", "Android", "Static Analysis"],
    summary:
      "Static security analysis of Android APKs using MobSF — vulnerabilities, permissions, code review, and reporting.",
    summaryFr:
      "Analyse statique d'APK Android avec MobSF — vulnérabilités, permissions, revue de code et rapports.",
  },
  {
    slug: "docker-orchestration",
    title: "Docker Containerization",
    group: "Infrastructure & Cloud",
    kind: "DevOps workflow",
    tags: ["Docker", "Compose", "Docker Hub"],
    summary:
      "Built Docker images and Dockerfiles, published to Docker Hub, and orchestrated multi-container setups with Docker Compose.",
    summaryFr:
      "Création d'images Docker et Dockerfiles, publication sur Docker Hub et orchestration multi-conteneurs avec Docker Compose.",
  },
];

export const projectGroups: ProjectGroup[] = [
  "Web",
  "Infrastructure & Cloud",
  "Cybersecurity",
  "Networking",
  "Data & AI",
  "Mobile & Robotics",
];

/* ------------------------------------------------------------------ */
/* About                                                               */
/* ------------------------------------------------------------------ */

/** My studio — linked wherever it is named in prose. */
export const frinux = {
  name: "Frinux Technologies",
  url: "https://frinux.vercel.app",
};

/** Terms inside `story` that render as links. */
export const storyLinks: Record<string, string> = {
  [frinux.name]: frinux.url,
};

export const story = [
  "I'm Ateh Frank Ateh, a full-stack developer and network engineer from Yaoundé, Cameroon, trained at SUP'PTIC. I build web platforms, mobile apps, APIs, payment flows, network labs, and infrastructure projects.",
  "My curiosity started early, after fixing a locked Android phone through weeks of research, trial, and error. That moment taught me to look beneath the surface of technology and understand systems deeply.",
  "Since then, I have built school management platforms, Android apps, AI-assisted learning tools, multi-server Linux environments, OpenStack cloud deployments, NoSQL systems, cybersecurity labs, and client websites.",
  "Professionally, I have worked on Zenorva Support's web presence, Terra Talent Hub's skills verification platform, CAMTEL production IP networks, Dewise Energy's website, and Cam e-guide / Skolarr's education platform.",
  "I describe myself as a vibe coder because I build with instinct, speed, and experimentation, but I pair that energy with careful engineering: clean interfaces, practical architecture, security awareness, and reliable deployment.",
  "Beyond code, I care about building companies and opportunities from Africa. I founded Absurd Geeks, a digital marketing agency, and Frinux Technologies — and I keep learning across software, networks, cybersecurity, and cloud infrastructure.",
];

export const facts = [
  { label: "Base", value: "Yaoundé, Cameroon" },
  { label: "Formation", value: "SUP'PTIC — Telecommunications & ICT Engineering, 2026" },
  { label: "Foundation", value: "Computer Science" },
  { label: "Founder", value: "Absurd Geeks · Frinux Technologies", href: frinux.url },
  { label: "Languages", value: "English · French" },
  { label: "Status", value: "Available for select projects" },
];

/* ------------------------------------------------------------------ */
/* Expertise                                                           */
/* ------------------------------------------------------------------ */

export type Expertise = {
  index: string;
  title: string;
  description: string;
  tools: string[];
};

export const expertise: Expertise[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "Interfaces people trust at first glance — fast, accessible, and precise, from design system to deployed product.",
    tools: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GSAP", "Webflow"],
  },
  {
    index: "02",
    title: "Backend & APIs",
    description:
      "Service layers that hold up: authentication, payments, and data models that stay predictable as products grow.",
    tools: ["Node.js", "Supabase", "PHP", "Python · Flask", "MySQL", "PostgreSQL"],
  },
  {
    index: "03",
    title: "Networks & Telecommunications",
    description:
      "My engineering core — keeping production IP networks routed, diagnosed, and alive at telecom scale.",
    tools: ["OSPF", "MPLS", "VLAN", "NAT", "Wireshark", "MikroTik", "Huawei eNSP"],
  },
  {
    index: "04",
    title: "Cybersecurity",
    description:
      "Offense-informed defense — systems built knowing how they will be attacked, monitored so intrusions are seen.",
    tools: ["Wazuh", "Zabbix", "Metasploit", "Kali Linux", "MobSF", "WCAG audits"],
  },
  {
    index: "05",
    title: "Systems & Infrastructure",
    description:
      "From bare Linux to private cloud — the invisible layer that names, routes, authenticates, and delivers reliably.",
    tools: ["Linux", "OpenStack", "Docker", "VMware", "Samba + AD", "DNS/DHCP"],
  },
  {
    index: "06",
    title: "AI & Automation",
    description:
      "Practical intelligence — AI-assisted tools and data analysis that remove real friction, not add demos.",
    tools: ["Python", "PCA / Data Science", "Flask", "AI Integration", "SQLite"],
  },
  {
    index: "07",
    title: "Product Thinking",
    description:
      "The founder's lens — scoping what matters, designing for conversion and trust, shipping what users adopt.",
    tools: ["Discovery", "IA & Copy", "Conversion Design", "Payments & Pricing", "Launch"],
  },
];

/* ------------------------------------------------------------------ */
/* Record (timeline) & distinctions                                    */
/* ------------------------------------------------------------------ */

export type RecordEntry = {
  year: string;
  title: string;
  org: string;
  detail: string;
};

export const record: RecordEntry[] = [
  {
    year: "2022",
    title: "Technical Contributor & Data Specialist",
    org: "Cam e-guide / Skolarr Cameroon",
    detail:
      "Helped build and deploy a digital education platform serving thousands of Cameroonian students.",
  },
  {
    year: "2023",
    title: "Web Developer · Engineering student",
    org: "Dewise Energy · SUP'PTIC",
    detail:
      "Designed and deployed Dewise's website; began the telecommunications & ICT engineering program at SUP'PTIC.",
  },
  {
    year: "2024",
    title: "Full-Stack Developer",
    org: "Tera 5 — Terra Talent Hub",
    detail:
      "Built the skills verification platform: DigComp assessments, QR-verified certificates, payments, employer dashboards.",
  },
  {
    year: "2025",
    title: "Network Systems Engineer",
    org: "CAMTEL — CESIR-IP",
    detail:
      "Monitored and maintained production IP infrastructure — diagnostics, traffic analysis, routing support in a live telecom environment.",
  },
  {
    year: "2026",
    title: "Web Developer · Engineering degree",
    org: "Zenorva Support · SUP'PTIC",
    detail:
      "Building Zenorva's full web presence; completing the engineering degree — thesis: an intelligent digital relay for bandwidth optimization.",
  },
];

export const distinctions = [
  "Selected founder — U.S. Embassy-backed accelerator",
  "Bronze mention — ODSA Hackathon",
  "Bronze mention — International Youth Math Challenge",
  "Founder — Absurd Geeks, digital marketing agency",
  "Founder — Frinux Technologies",
  "23 documented projects · 50,000+ lines of code",
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export type ProcessStep = {
  index: string;
  title: string;
  description: string;
};

export const process: ProcessStep[] = [
  {
    index: "01",
    title: "Discovery",
    description:
      "I learn your business before I touch code — goals, audience, constraints, and what success actually measures.",
  },
  {
    index: "02",
    title: "Strategy",
    description:
      "Architecture, content structure, and technology choices — written down, agreed on, and scoped honestly.",
  },
  {
    index: "03",
    title: "Design",
    description:
      "Identity, layout, and motion designed as one system. You see the direction before anything is built.",
  },
  {
    index: "04",
    title: "Development",
    description:
      "Clean, typed, production code — reviewed, versioned, and built to be maintained by whoever comes after me.",
  },
  {
    index: "05",
    title: "Optimization",
    description:
      "Performance budgets, SEO structure, accessibility, and testing on real devices — not just my machine.",
  },
  {
    index: "06",
    title: "Launch",
    description:
      "Deployment, monitoring, and handover — documented, with support after the site is live, not just until.",
  },
];

/* ------------------------------------------------------------------ */
/* Signals (social proof)                                              */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

/** Add future client testimonials here — the section renders them automatically. */
export const testimonials: Testimonial[] = [];

export const trustedBy = [
  "Frinux Technologies",
  "CAMTEL",
  "Terra Talent Hub",
  "Zenorva Support",
  "Dewise Energy",
  "Skolarr Cameroon",
  "SUP'PTIC",
];

export const stats = [
  { value: "23", label: "Documented projects" },
  { value: "5", label: "Organizations shipped for" },
  { value: "50k+", label: "Lines of code" },
  { value: "2", label: "Working languages" },
];
