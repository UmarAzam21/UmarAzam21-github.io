import type { BrandId } from "@/components/icons/BrandMarks";
import type { ServiceIconId } from "@/components/icons/ServiceIcons";

/** A heading split into a dark lead, a softer middle, and a dark tail. */
export type SplitHeading = { strong: string; muted: string; rest?: string };

export const hero = {
  /** One array per line; `muted` segments use the softer tone. */
  headline: [
    [{ text: "Building intelligent", muted: false }],
    [
      { text: "products,", muted: false },
      { text: "platforms, and", muted: true },
    ],
    [{ text: "experiences.", muted: false }],
  ],
  cta: "Latest Work",
  ctaHref: "#work",
  stats: [
    { value: 2, suffix: "+", label: "Years experience" },
    { value: 5, suffix: "+", label: "Projects shipped" },
  ],
};

/** Companies worked with — shown in the logo strip. */
export const brands: { id: BrandId; name: string }[] = [
  { id: "webtery", name: "Webtery" },
  { id: "liztek", name: "Liztek" },
  { id: "grootcore", name: "Grootcore Systems" },
  { id: "mightyfive", name: "Mighty Five" },
  { id: "compilevision", name: "Compile Vision" },
  { id: "verdent", name: "Verdent" },
];

/* ------------------------------------------------------------------ */
/*  Services                                                           */
/* ------------------------------------------------------------------ */
export const servicesHeading: SplitHeading = {
  strong: "Collaborate with",
  muted: "brands and agencies",
  rest: "to create impactful results.",
};

export const services: {
  icon: ServiceIconId;
  title: string;
  description: string;
}[] = [
  {
    icon: "ai",
    title: "AI & LLMs",
    description:
      "Building RAG systems, AI agents and LLM features that are reliable, useful, and production‑ready.",
  },
  {
    icon: "app",
    title: "Web & Mobile App",
    description:
      "Transforming ideas into exceptional web and mobile app experiences.",
  },
  {
    icon: "enterprise",
    title: "Enterprise Platforms",
    description:
      "Multi-tenant ERP, GRC and LMS platforms built to scale securely.",
  },
  {
    icon: "dev",
    title: "Development",
    description:
      "Bringing your vision to life with FastAPI, Next.js and the latest technology.",
  },
];

/* ------------------------------------------------------------------ */
/*  Selected work                                                      */
/* ------------------------------------------------------------------ */
export const workHeading: SplitHeading = {
  strong: "Selected work",
  muted: "built for real teams",
  rest: "and real business problems.",
};

export const projects: {
  title: string;
  category: string;
  icon: ServiceIconId;
  description: string;
  tags: string[];
  /** Optional public link (e.g. GitHub repo). */
  href?: string;
}[] = [
  {
    title: "Study with Deni",
    category: "Multi-tenant LMS",
    icon: "app",
    description:
      "A custom learning platform with real-time live chat, live calling and an AI agent assistant — agentic helpers for learning support and scalable classroom management across tenants.",
    tags: [
      "Multi-tenant",
      "Agentic AI",
      "AI Agents",
      "Real-time Chat",
      "Live Calling",
      "React.js",
      "Node.js",
    ],
  },
  {
    title: "GRC System",
    category: "Governance, Risk & Compliance",
    icon: "enterprise",
    description:
      "A modular GRC platform built from FastAPI microservices with secure REST APIs, JWT authentication and role-based access control — covering risk, compliance, audit and enterprise workflows.",
    tags: [
      "Python",
      "FastAPI",
      "Microservices",
      "REST APIs",
      "JWT Auth",
      "RBAC",
      "PostgreSQL",
    ],
  },
  {
    title: "Vision Ops",
    category: "Computer Vision · Scene Analysis",
    icon: "vision",
    description:
      "Real-time people and object detection for photos, video, webcams and RTSP cameras — YOLO11, pose, face attributes and scene segmentation with stable tracking, all on OpenCV DNN with ONNX models.",
    tags: [
      "YOLO11",
      "OpenCV DNN",
      "ONNX",
      "FastAPI",
      "Pose Estimation",
      "Semantic Segmentation",
      "Object Tracking",
      "WebSockets",
    ],
    href: "https://github.com/UmarAzam21/Vision-Ops-Scene-Analysis",
  },
  {
    title: "RAG Assistant",
    category: "Retrieval-Augmented Generation",
    icon: "ai",
    description:
      "A production-grade RAG assistant that answers questions from your documents with source citations for every claim — backed by an evaluation pipeline that measures retrieval quality and answer faithfulness.",
    tags: [
      "RAG",
      "LangChain",
      "LLMs",
      "Vector Search",
      "Citations",
      "LLM Evaluation",
      "Prompt Engineering",
      "FastAPI",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Experience                                                         */
/* ------------------------------------------------------------------ */
export const experienceHeading: SplitHeading = {
  strong: "A few places",
  muted: "I've built things",
  rest: "along the way.",
};

export const experience: {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  summary: string;
}[] = [
  {
    company: "Webtery",
    role: "AI Engineer",
    period: "Jul 2026 — Present",
    location: "Lahore, Pakistan",
    current: true,
    summary:
      "Building AI systems, ERP platforms, custom CMS solutions and Generative AI workflows for enterprise clients — multi-tenant architecture, Agentic AI, LangChain workflows, RAG and recommendation engines.",
  },
  {
    company: "Liztek",
    role: "Full-Stack Web Developer",
    period: "Dec 2025 — Apr 2026",
    location: "Lahore, Pakistan",
    summary:
      "Developed web applications end-to-end, built backend services and integrated APIs with cross-functional teams, and shipped Generative AI and prompt-driven features inside business workflows.",
  },
  {
    company: "Grootcore Systems",
    role: "Full-Stack Web Developer",
    period: "Dec 2024 — Nov 2025",
    location: "Lahore, Pakistan",
    summary:
      "Built dynamic, responsive web applications with React.js and Node.js, developed backend services, and delivered maintainable full-stack features through Git-based deployments.",
  },
];

export const credentials: { label: string; title: string; detail: string }[] = [
  {
    label: "Education",
    title: "Bachelor of Computer Science",
    detail: "Virtual University, Lahore · 2021 — 2024",
  },
  {
    label: "Certification",
    title: "Google AI Essentials Specialization",
    detail: "Google",
  },
];

/* ------------------------------------------------------------------ */
/*  Tech stack                                                         */
/* ------------------------------------------------------------------ */
export const stackHeading: SplitHeading = {
  strong: "The tools",
  muted: "I reach for",
  rest: "to design, build and ship.",
};

export const techStack: {
  group: string;
  icon: ServiceIconId;
  /** Grid columns the card spans on large screens (out of 3). */
  span: 1 | 2 | 3;
  featured?: boolean;
  summary?: string;
  items: string[];
}[] = [
  {
    group: "AI & LLMs",
    icon: "ai",
    span: 2,
    featured: true,
    summary:
      "Retrieval pipelines, agents and LLM features designed to hold up in production — not just in demos.",
    items: [
      "Generative AI",
      "LLMs",
      "LangChain",
      "RAG",
      "Agentic AI",
      "AI Agents",
      "Prompt Engineering",
      "Recommendation Systems",
    ],
  },
  {
    group: "Computer Vision",
    icon: "vision",
    span: 1,
    items: ["YOLO11", "OpenCV", "ONNX", "OCR & Text Parsing", "Pose Estimation", "Segmentation"],
  },
  {
    group: "Backend",
    icon: "dev",
    span: 1,
    items: [
      "Python",
      "FastAPI",
      "Django",
      "Flask",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Microservices",
    ],
  },
  {
    group: "Frontend",
    icon: "app",
    span: 1,
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit",
    ],
  },
  {
    group: "Data & Security",
    icon: "data",
    span: 1,
    items: ["PostgreSQL", "MongoDB", "JWT", "RBAC", "Multi-Tenant Architecture"],
  },
  {
    group: "Tools",
    icon: "tools",
    span: 3,
    items: ["Git", "GitHub", "GitLab", "Docker", "Postman", "Puppeteer"],
  },
];

/* ------------------------------------------------------------------ */
/*  Testimonials                                                       */
/* ------------------------------------------------------------------ */
export const testimonialsHeading: SplitHeading = {
  strong: "Kind words",
  muted: "from people",
  rest: "I've worked with.",
};

/**
 * Real quotes only. `photo` is optional — without it the card shows initials.
 * Entries marked `placeholder: true` are previewed in development only and
 * never appear on the production site.
 */
export const testimonials: {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: string;
  placeholder?: boolean;
}[] = [
  {
    quote:
      "It was a pleasure working with Muhammad Umar. He not only delivers high-quality builds but truly understands the speed-with-excellence mindset required in a startup environment.",
    name: "Syed Ali Mehdi Naqvi",
    role: "Managing Director",
    company: "Clarity Cosmos",
    photo: "/images/testimonials/syed-ali-mehdi-naqvi.png",
  },
  {
    quote:
      "Dedicated and reliable. Umar consistently demonstrated strong technical skills and professionalism, working effectively both independently and as part of a team.",
    name: "Hamas Ahmed",
    role: "CEO",
    company: "Grootcore Systems",
    photo: "/images/testimonials/hamas-ahmed.png",
  },
  {
    quote:
      "Highly professional and reliable. Umar delivered high-quality code on time and was always willing to go the extra mile.",
    name: "Faizan Munsaf",
    role: "CEO",
    company: "Compile Vision",
    photo: "/images/testimonials/faizan-munsaf.png",
  },
];

/* ------------------------------------------------------------------ */
/*  AI assistant                                                       */
/* ------------------------------------------------------------------ */
/** Launcher label only — the chat itself (name, welcome text…) is configured in Botpress Studio. */
export const assistant = {
  launcher: "Ask AI about me",
};

/* ------------------------------------------------------------------ */
/*  Contact                                                            */
/* ------------------------------------------------------------------ */
export const contact = {
  heading: "Tell me about your next project",
  projectTypes: [
    "AI / LLM feature",
    "Web or mobile app",
    "Enterprise platform",
    "Computer vision",
    "Something else",
  ],
  budgets: ["Not sure yet", "< $1k", "$1k – $5k", "$5k – $15k", "$15k+"],
  directLabel: "Or reach me directly",
};
