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
        imageUrl: "https://cdn.simpleicons.org/cplusplus/00599C",
        name: "C/C++",
        type: "Programming",
        theme: "btn-back-cplusplus",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/java/007396",
        name: "Java",
        type: "Programming",
        theme: "btn-back-java",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/python/3776AB",
        name: "Python",
        type: "Programming",
        theme: "btn-back-python",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
        theme: "btn-back-react",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/flask/000000",
        name: "Flask",
        type: "Backend",
        theme: "btn-back-flask",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/mysql/4479A1",
        name: "SQL & Databases",
        type: "Data",
        theme: "btn-back-sql",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        theme: "btn-back-git",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        theme: "btn-back-github",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        theme: "btn-back-tailwind",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        theme: "btn-back-typescript",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/amazonwebservices/FF9900",
        name: "AWS",
        type: "Cloud",
        theme: "btn-back-aws",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/kubernetes/326CE5",
        name: "Kubernetes",
        type: "DevOps",
        theme: "btn-back-kubernetes",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/sap/008FD3",
        name: "SAP ABAP",
        type: "Enterprise Software",
        theme: "btn-back-sap",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/sap/008FD3",
        name: "RAP / CDS",
        type: "SAP",
        theme: "btn-back-sap-rap",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/sap/008FD3",
        name: "SAP BTP",
        type: "Cloud",
        theme: "btn-back-sap-btp",
    },
    {
        imageUrl: "https://cdn.simpleicons.org/sap/008FD3",
        name: "SAP Fiori",
        type: "UI",
        theme: "btn-back-sap-fiori",
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