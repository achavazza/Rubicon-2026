export interface Project {
    id: string
    title: string
    client: string
    overview: string
    ourWork: string[]
    techStack: string[]
    url: string
    logo?: string
}

export const projects: Project[] = [
    {
        id: "rise",
        title: "Financial Operations Platform",
        client: "RISE",
        overview:
            "Rise is a financial operations platform that streamlines payments, contracts, and back-office workflows for freelancers, SMBs, and enterprise teams through a simple, intuitive experience.",
        ourWork: [
            "Built Rise Documents, a blockchain-backed document system for secure, cryptographically signed contracts with customizable templates.",
            "Implemented Web3 wallet integration to enable seamless contract signing flows.",
            "Launched a credit card program with virtual and physical cards, enabling fast access to funds, rewards, and secure transactions.",
            "Integrated Apple Pay and Google Pay support for a frictionless payment experience.",
        ],
        techStack: ["Solidity", "React", "Postgres", "TypeScript", "Node.js", "AWS"],
        url: "https://www.riseworks.io/",
        logo: "Rise",
    },
    {
        id: "galaxy",
        title: "VisionTrack Data Platform",
        client: "Galaxy Digital",
        overview:
            "VisionTrack is a data and analytics platform powered by Galaxy Digital that provides investors and fund managers with reliable, structured insights on crypto hedge funds and venture funds.",
        ourWork: [
            "Developed core platform features for tracking and analyzing performance across 2,000+ funds with historical data since 2014.",
            "Delivered a searchable, interactive database segmented by strategy to improve discovery and analysis.",
            "Enabled a premium research library for ongoing publications and benchmarks.",
            "Supported authenticated, daily-updated data workflows to keep insights reliable and current.",
        ],
        techStack: ["Node.js", "React", "GraphQL", "AWS"],
        url: "https://www.galaxy.com/",
        logo: "Galaxy",
    },
    {
        id: "superrare",
        title: "Tokenization Marketplace for Digital Art",
        client: "SuperRare",
        overview:
            "SuperRare is a leading digital art marketplace focused on tokenization, enabling creators and collectors to mint, own, and trade unique digital assets as NFTs.",
        ourWork: [
            "Provided senior engineering capacity across blockchain, tokenization, and dApps to expand delivery bandwidth.",
            "Became a long-term trusted technology partner for leadership, supporting roadmap execution and platform growth.",
            "Contributed to product delivery with an engineering approach aligned to security, scalability, and reliability.",
        ],
        techStack: ["Solidity", "React", "Haskell", "Postgres", "GraphQL", "AWS"],
        url: "https://superrare.com/",
        logo: "SuperRare",
    },
    {
        id: "sitickets",
        title: "Online Ticket Marketplace",
        client: "SI Tickets",
        overview:
            "SI Tickets is a fan-first ticketing marketplace by Sports Illustrated, offering millions of tickets across concerts, theater, and sporting events worldwide.",
        ourWork: [
            "Built and operated a dedicated multidisciplinary team including developers, BAs, PMs, QA, DevOps, and data engineers.",
            "Developed and maintained the web platform plus iOS and Android apps using a shared React Native codebase.",
            "Sustained 5+ years of continuous collaboration as a trusted partner for ongoing delivery and operations.",
        ],
        techStack: ["React", "PHP", "Node.js", "Postgres", "React Native", "AWS"],
        url: "https://www.sitickets.com/",
        logo: "Sitix",
    },
    {
        id: "microsoft",
        title: "Financial Planning and Forecasting Platform",
        client: "Microsoft",
        overview:
            "We contributed to build an enterprise-grade platform for financial planning and forecasting that unified Target, Forecast, and Budget workflows, with an Excel add-in as the main user interface.",
        ourWork: [
            "Implemented a scalable data architecture to enable faster access and reduce reporting delays.",
            "Delivered a unified user experience to simplify adoption and reduce training overhead.",
            "Built a configurable foundation designed to evolve with changing business planning needs.",
        ],
        techStack: [
            "Databricks",
            "SQL Server",
            "Azure Data Lakes",
            "Azure Analysis Services",
        ],
        url: "https://www.microsoft.com/",
        logo: "Microsoft",
    },
    {
        id: "membrane",
        title: "Digital Assets Lending and Clearing Platform",
        client: "Membrane",
        overview:
            "Membrane is a multi-chain DeFi clearing and netting protocol for lending, borrowing, and token trading, designed for both institutional and peer-to-peer flows including OTC.",
        ourWork: [
            "Built multi-chain balance and activity listeners to keep user states updated with low latency.",
            "Modernized the frontend with up-to-date libraries to improve UX and performance.",
            "Redesigned project delivery processes by introducing sub-teams, tighter documentation, and recurring alignment rituals.",
        ],
        techStack: ["Solidity", "Node.js", "React", "Postgres", "AWS"],
        url: "https://membranelabs.com/",
        logo: "Membrane",
    },
    {
        id: "quadrant",
        title: "Data and Analytics Delivery Partner in LATAM",
        client: "Quadrant",
        overview:
            "QUADRANT is a US and India based services company expanding into LATAM through partners that can match their delivery standards for enterprise clients.",
        ourWork: [
            "Became QUADRANT’s go-to regional partner, sourcing 10+ engineers and ensuring consistent delivery.",
            "Delivered rapid turnaround on hiring needs, sharing at least one candidate the same day of request.",
            "Supported enterprise-grade engagements, including Microsoft and Kimberly-Clark, with Microsoft-centric data engineering profiles.",
        ],
        techStack: [
            "Databricks",
            "SQL Server",
            "Azure Data Lakes",
            "Azure Analysis Services",
        ],
        url: "https://www.quadranttechnologies.com",
        logo: "Quadrant",
    },
    {
        id: "parita",
        title: "AI Powered People Analytics for HR",
        client: "PARiTA",
        overview:
            "PARiTA is an AI-powered workforce intelligence and people analytics platform that connects data across HR and business systems to deliver real-time, contextual insights. It helps leaders understand what is happening, why it is happening, and what is likely next, with instant answers, narrative data stories, and exec-ready reporting.",
        ourWork: [
            "Improved ETL pipelines and data flows to reliably ingest, process, and normalize workforce data at scale.",
            "Implemented machine learning algorithms to enhance response quality and overall insight accuracy.",
            "Contributed to the evolution of internal AI agents, improving task execution and end-user experience.",
        ],
        techStack: ["Domo", "Python"],
        url: "https://www.parita.com/",
        logo: "PARiTA",
    },
]
