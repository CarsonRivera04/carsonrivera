export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Carson Rivera",
  title: "Senior Computer Science Student",
  institution: "Florida State University",
  description:
    "FSU Computer Science senior with experience as a Software Engineer Intern at Merck (supporting Research Labs IT) and an undergraduate researcher in AI/ML. Co-authored a multi-agent LLM system for behavioral health coaching, published at IEEE/ACM CHASE 2026 (21% acceptance rate).",
  email: "carsonrivera04@gmail.com",
  imageUrl:
    "/headshot.jpeg",
  githubUsername: "carsonrivera04",
  linkedinUsername: "carsonrivera04",
  cvUrl: "https://",
  institutionUrl: "https://www.fsu.edu/",
};
