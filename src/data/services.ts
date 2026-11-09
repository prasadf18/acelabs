/** What the lab works on. Edit here; the Services page and the home page both read this file. */
export interface Service {
  id: string;
  title: string;
  summary: string;
  items: string[];
}

export const services: Service[] = [
  {
    id: "ai",
    title: "AI & automation engineering",
    summary: "Putting AI to work inside real workflows.",
    items: [
      "Assistants, agents and document processing",
      "Retrieval and data pipelines",
      "Evaluation suites and guardrails",
    ],
  },
  {
    id: "cloud",
    title: "Cloud & platform modernization",
    summary: "Infrastructure that is boring in the best way.",
    items: [
      "Migration planning and execution",
      "Infrastructure as code and CI/CD",
      "Observability, security and cost control",
    ],
  },
  {
    id: "legacy",
    title: "Legacy system transformation",
    summary: "Moving off spreadsheets and fragile tools.",
    items: [
      "Process mapping and requirements",
      "Replacement software, built to be maintained",
      "Data migration and rollout",
    ],
  },
  {
    id: "advisory",
    title: "Technical advisory",
    summary: "Practical technical advice, close to the code.",
    items: [
      "Architecture and build-versus-buy reviews",
      "AI readiness and risk assessments",
      "Technical planning for early products",
    ],
  },
];

/** The three steps used to describe how an engagement is structured. */
export const engagement = [
  {
    title: "Discovery",
    text: "A short, fixed-scope look at the system and the problem worth solving.",
  },
  {
    title: "Pilot build",
    text: "A working slice with evaluations, shared early and reviewed often.",
  },
  {
    title: "Handover or support",
    text: "Full handover with documentation, or ongoing support if that suits better.",
  },
];
