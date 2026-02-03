export type Keyword = {
  name: string;
  weight: number;
};

export const KEYWORDS: Keyword[] = [
  // Programming
  { name: "Java", weight: 8 },
  { name: "Python", weight: 8 },
  { name: "JavaScript", weight: 9 },
  { name: "TypeScript", weight: 8 },

  // Frontend
  { name: "React", weight: 9 },
  { name: "Angular", weight: 8 },
  { name: "HTML", weight: 6 },
  { name: "CSS", weight: 6 },
  { name: "Tailwind", weight: 6 },

  // Backend
  { name: "Node.js", weight: 8 },
  { name: "Express", weight: 7 },
  { name: "REST API", weight: 7 },
  { name: "GraphQL", weight: 7 },

  // Databases
  { name: "SQL", weight: 7 },
  { name: "MySQL", weight: 7 },
  { name: "MongoDB", weight: 7 },

  // Tools & Cloud
  { name: "Git", weight: 7 },
  { name: "GitHub", weight: 6 },
  { name: "Docker", weight: 6 },
  { name: "Kubernetes", weight: 6 },
  { name: "AWS", weight: 6 },
  { name: "Azure", weight: 6 },
  { name: "CI/CD", weight: 6 },

  // Testing & Soft Skills
  { name: "Unit Testing", weight: 5 },
  { name: "Problem Solving", weight: 5 },
  { name: "Communication", weight: 5 },
  { name: "Teamwork", weight: 5 },
  { name: "Leadership", weight: 5 },
];
