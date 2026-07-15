export interface Portfolio {
  title: string;
  description: string;
  technologies?: string[];
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
}

export const portfolioData: Portfolio[] = [
  {
    title: "Running Safer",
    description:
      "Pedestrian safety web application with Strava and OpenStreetMap integration to help runners avoid high-risk areas.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "PostgreSQL"],
    projectUrl: "https://runningsafer.com/",
    imageUrl:
      "/runningsafer.png",
    codeUrl: "https://github.com/CarsonRivera04/runningsafer",
  },
  {
    title: "Thread Count",
    description:
      "Personal wardrobe management web application to encourage sustainable fashion practices.",
    technologies: ["Blazor Server", ".NET", "C#", "SQLite"],
    projectUrl: "https://threadcountcarson.com/",
    imageUrl:
      "/threadcount.png",
    codeUrl: "https://github.com/CarsonRivera04/threadcount",
  },
];
