import { shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "C/C++",
        type: "Programming",
    },
    {
        imageUrl: html,
        name: "Java",
        type: "Programming",
    },
    {
        imageUrl: javascript,
        name: "Python",
        type: "Programming",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Flask",
        type: "Backend",
    },
    {
        imageUrl: mongodb,
        name: "SQL & Databases",
        type: "Data",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "AWS",
        type: "Cloud",
    },
    {
        imageUrl: motion,
        name: "Kubernetes",
        type: "DevOps",
    },
    {
        imageUrl: express,
        name: "SAP ABAP",
        type: "Enterprise Software",
    },
    {
        imageUrl: redux,
        name: "RAP / CDS",
        type: "SAP",
    },
    {
        imageUrl: sass,
        name: "SAP BTP",
        type: "Cloud",
    },
    {
        imageUrl: mui,
        name: "SAP Fiori",
        type: "UI",
    }
];

export const experiences = [
    {
        title: "ABAP Cloud Developer Intern",
        company_name: "Accenture",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "May 2026 - Jul 2026",
        points: [
            "Developed 3+ enterprise SAP application modules using SAP ABAP Cloud, RAP, CDS Views, SAP BTP, and SAP Fiori Elements.",
            "Designed business logic, OData services, and UI annotations for 4+ cloud-native SAP applications, following SAP Clean Core principles.",
            "Collaborated in Agile development across 6+ sprints using Git and SAP Eclipse ADT to build scalable enterprise solutions.",
        ],
    },
    {
        title: "AI Developer Intern",
        company_name: "Edunet – Microsoft & SAP CSR Initiative",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2025 - Apr 2025",
        points: [
            "Built an AI-powered healthcare assistant using NLP and Deep Learning, cutting consultation time by 60% and misdiagnosis rates by 30%.",
            "Integrated computer vision and speech recognition for medical image and voice analysis, boosting diagnostic accuracy by 40%.",
        ],
    },
    {
        title: "Co-Founder & Frontend Developer",
        company_name: "Randomyth",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Oct 2023 - Present",
        points: [
            "Led React.js front-end development, redesigning UI/UX that drove 150% user engagement growth and an 85% increase in returning visitors.",
            "Published SEO-optimized content, growing organic search traffic by 120% and reader engagement by 40%.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/AhabAnwer',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ahab-anwer',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'TourSphere',
        description: 'Built an AI travel platform using NLP and Generative AI to deliver hyper-personalized itineraries based on user preferences and budget. SIH Selected – Rank 13/50.',
        link: 'https://github.com/AhabAnwer',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'NIVARA – AI Multi-Domain Agent',
        description: 'Developed an AI agent resolving queries across 10+ domains with 20% higher accuracy and sub-1-second responses via Groq inference.',
        link: 'https://github.com/AhabAnwer',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'SALUS AI – Medical Assistant',
        description: 'Analyzed 100+ medical images daily and improved diagnostic accuracy by 20% through deep learning fine-tuning while cutting workflow time by 30%.',
        link: 'https://github.com/AhabAnwer',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AgriBridge – Agricultural Marketplace',
        description: 'Connected 500+ farmers to markets directly, facilitating 1,000+ secure transactions and cutting procurement time by 40%.',
        link: 'https://github.com/AhabAnwer',
    }
];