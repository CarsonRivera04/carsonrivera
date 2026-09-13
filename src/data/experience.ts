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
    date: "Sep. 2026 - Present",
    title: "Software Engineer Intern",
    company: "Danfoss",
    description: "Angular and NestJS application controlling the Danfoss Turbocor compressor - the world's first oil-free magnetic bearing compressor for the HVAC industry",
    companyUrl: "https://www.danfoss.com/en-us/products/dcs/compressors/turbocor/",
  },
  {
    date: "Jun. 2026 - Aug. 2026",
    title: "Software Engineer Intern ",
    company: "Merck & Co.",
    description:
      "React and FastAPI RAG application for Merck Research Laboratories IT",
    companyUrl: "https://www.merck.com/",
  },
  {
    date: "Sep. 2024 - Apr. 2026",
    title: "Research Assistant",
    company: "Florida State University",
    description:
     "AI and ML research for Professor Xiaonan Zhang's Lab. Paper accepted for publication at IEEE/ACM CHASE 2026",
    companyUrl: "https://www.cs.fsu.edu/~xzhang/",
  },
  {
    date: "Jun. 2025 - Aug. 2025",
    title: "Software Engineer Intern",
    company: "Merck & Co.",
    description:
      "Automating auditing for Merck Research Laboratories clinical trials",
    companyUrl: "https://www.merck.com/",
  },
];
