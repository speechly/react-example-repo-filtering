export type Repository = {
  name: string;
  description: string;
  language: string;
  followers: number;
  stars: number;
  forks: number;
};

export const repositories: Repository[] = [
  {
    name: "microsoft/typescript",
    description:
      "TypeScript is a superset of JavaScript that compiles to clean JavaScript output",
    language: "TypeScript",
    followers: 2200,
    stars: 65000,
    forks: 8700,
  },
  {
    name: "nestjs/nest",
    description:
      "A progressive Node.js framework for building efficient, scalable, and enterprise-grade server-side applications on top of TypeScript & JavaScript (ES6, ES7, ES8)",
    language: "TypeScript",
    followers: 648,
    stars: 30900,
    forks: 2800,
  },
  {
    name: "microsoft/vscode",
    description: "Visual Studio Code",
    language: "TypeScript",
    followers: 3000,
    stars: 105000,
    forks: 16700,
  },
  {
    name: "denoland/deno",
    description: "A secure JavaScript and TypeScript runtime",
    language: "TypeScript",
    followers: 1700,
    stars: 68000,
    forks: 3500,
  },
  {
    name: "kubernetes/kubernetes",
    description: "Production-Grade Container Scheduling and Management",
    language: "Go",
    followers: 3300,
    stars: 70700,
    forks: 25500,
  },
  {
    name: "moby/moby",
    description:
      "Moby Project - a collaborative project for the container ecosystem to assemble container-based systems",
    language: "Go",
    followers: 3200,
    stars: 58600,
    forks: 16900,
  },
  {
    name: "gohugoio/hugo",
    description: "The world’s fastest framework for building websites",
    language: "Go",
    followers: 1000,
    stars: 47200,
    forks: 5400,
  },
  {
    name: "grafana/grafana",
    description:
      "The tool for beautiful monitoring and metric analytics & dashboards for Graphite, InfluxDB & Prometheus & More",
    language: "Go",
    followers: 1300,
    stars: 37500,
    forks: 7600,
  },
  {
    name: "pytorch/pytorch",
    description:
      "Tensors and Dynamic neural networks in Python with strong GPU acceleration",
    language: "Python",
    followers: 1600,
    stars: 43000,
    forks: 11200,
  },
  {
    name: "tensorflow/tensorflow",
    description: "An Open Source Machine Learning Framework for Everyone",
    language: "Python",
    followers: 8300,
    stars: 149000,
    forks: 82900,
  },
  {
    name: "django/django",
    description: "The Web framework for perfectionists with deadlines",
    language: "Python",
    followers: 2300,
    stars: 52800,
    forks: 22800,
  },
  {
    name: "apache/airflow",
    description:
      "Apache Airflow - A platform to programmatically author, schedule, and monitor workflows",
    language: "Python",
    followers: 716,
    stars: 18500,
    forks: 7200,
  },
];
