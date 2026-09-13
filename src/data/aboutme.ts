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
    "FSU Computer Science senior with software engineering experience at Danfoss and Merck. AI and ML research experience at FSU, with a publication accepted at IEEE/ACM CHASE 2026.",
  email: "carsonrivera04@gmail.com",
  imageUrl:
    "/headshot.jpeg",
  githubUsername: "carsonrivera04",
  linkedinUsername: "carsonrivera04",
  cvUrl: "/Carson_Rivera_Resume.pdf",
  institutionUrl: "https://www.fsu.edu/",
};
