export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  {
    year: "2026",
    conference: "IEEE/ACM CHASE",
    title: "Longitudinal Behavioral Change Coaching with Multi LLM Agents: Multi-Scale Summaries and Automated Dialogue Steering",
    authors: "Hansong Zhou, Zachary Skalski-Fouts, Linh Nguyen, Carson Rivera, Bonnie Spring, Hongyu Miao, Xiaonan Zhang",
    //paperUrl: "https://arxiv.org/abs/2302.13095",
  },
];
