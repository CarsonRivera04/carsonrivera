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
    "I am a senior computer science student at Florida State University. I have worked as a software engineer intern at Merck supporting Merck Research Labs IT, as well as an undergraduate research assistant in the domains of artificial intelligence, machine learning, and natural language processing.<br/><br/>Through my research experience, I co-authored and helped developed a multi-agent LLM system for longitudinal behavioral health coaching, accepted for publication at the IEEE/ACM CHASE 2026 conference (21% acceptance rate).",
  email: "carsonrivera04@gmail.com",
  imageUrl:
    "/headshot.jpeg",
  githubUsername: "carsonrivera04",
  linkedinUsername: "carsonrivera04",
  cvUrl: "https://",
  institutionUrl: "https://www.fsu.edu/",
};
