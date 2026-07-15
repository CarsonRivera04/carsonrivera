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
      "Developed a Python and FastAPI backend for a RAG agent application that automated critical R&D insight delivery",
    companyUrl: "https://www.merck.com/",
  },
  {
    date: "Sept. 2024 - Apr. 2026",
    title: "Research Assistant",
    company: "Florida State University",
    description:
      "Co-authored an IEEE/ACM CHASE 2026 published multi-agent LLM system for behavioral coaching, designing a vLLM and GPT-4o architecture that cut conversational loops by 55% and achieved a 6.04/7.0 user experience score.",
    companyUrl: "https://www.fsu.edu/",
  },
  {
    date: "June 2025 - Aug. 2025",
    title: "Software Engineer Intern",
    company: "Merck & Co.",
    description:
      "Developed a Power Platform solution using Power Apps and Power Automate to streamline audit planning, leveraging the Microsoft Graph API for automated scheduling reminders and Power Apps Test Studio to ensure long-term system reliability.",
    companyUrl: "https://www.merck.com/",
  },
];
