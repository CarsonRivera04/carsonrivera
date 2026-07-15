export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "June 2026 - Present",
    title: "Software Engineer Intern ",
    company: "Merck & Co.",
    description:
      "Engineered a Python and FastAPI backend service for a RAG agent application, automating error routing to ensure uninterrupted delivery of critical SOP insights to R&D.",
    companyUrl: "https://www.merck.com/",
  },
  {
    date: "Sept. 2024 - Apr. 2026",
    title: "Research Assistant",
    company: "Florida State University",
    description:
      "Co-authored a published, peer-reviewed multi-agent LLM coaching system, designing a vLLM and structured JSON state-tracking framework that cut redundant conversational loops by 55%.",
    companyUrl: "https://www.fsu.edu/",
  },
  {
    date: "June 2025 - Aug. 2025",
    title: "Software Engineer Intern",
    company: "Merck & Co.",
    description:
      "Streamlined audit planning by developing a Power Platform solution with automated Graph API reminders and Test Studio cases to boost team coordination, deadline adherence, and long-term scalability.",
    companyUrl: "https://www.merck.com/",
  },
];
