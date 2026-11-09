/**
 * Project blueprints: reference designs for the kinds of systems the lab works on.
 * They are ideas written the way a project would be scoped. They are NOT past client work,
 * and the Projects page says so. Do not add real client names here without permission.
 */
export interface Blueprint {
  title: string;
  problem: string;
  build: string[];
  outcome: string;
}

export interface Industry {
  id: string;
  title: string;
  summary: string;
  blueprints: Blueprint[];
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Pharma & healthcare",
    summary: "Quality and clinical operations.",
    blueprints: [
      {
        title: "Digital QMS for a regulated plant",
        problem: "Paper SOPs, slow corrective actions and a scramble before every audit.",
        build: [
          "Controlled documents and approvals",
          "Deviation and CAPA workflow",
          "Training matrix and sign-offs",
          "Audit-ready reports",
        ],
        outcome: "Audit preparation in hours instead of weeks, with a full trail of who changed what.",
      },
      {
        title: "Clinic operations platform",
        problem: "Appointments, records and billing handled in separate tools.",
        build: [
          "Scheduling and patient records",
          "Billing and reminders",
          "AI-assisted summaries of intake notes",
          "Role-based access and audit logs",
        ],
        outcome: "Fewer manual steps per visit and one privacy-conscious view of each patient.",
      },
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    summary: "Operations that run on one system.",
    blueprints: [
      {
        title: "Lightweight ERP for a mid-size manufacturer",
        problem: "Inventory, purchasing and production tracked in spreadsheets.",
        build: [
          "Bill of materials and production orders",
          "Inventory and purchasing",
          "Costing and invoicing",
          "Dashboards for owners and supervisors",
        ],
        outcome: "One source of truth for stock and orders, and a faster month-end close.",
      },
      {
        title: "Shop-floor quality and traceability",
        problem: "Defects found late and hard to trace back to a batch.",
        build: [
          "Inspection checklists on tablets",
          "Batch and lot traceability",
          "AI-assisted defect classification",
          "Trend reports by line and supplier",
        ],
        outcome: "Problems caught earlier and traced to their source in minutes.",
      },
    ],
  },
  {
    id: "bfsi",
    title: "BFSI",
    summary: "Documents, KYC and compliance.",
    blueprints: [
      {
        title: "Document processing with human review",
        problem: "Staff retype data from forms, IDs and statements.",
        build: [
          "AI extraction of key fields",
          "Confidence scores and a review queue",
          "Audit trail for every decision",
          "Integration with the core system",
        ],
        outcome: "Less retyping, with people reviewing only what the system is unsure about.",
      },
      {
        title: "Compliance reporting automation",
        problem: "Regulatory reports assembled by hand from many sources.",
        build: [
          "Data pipelines from source systems",
          "Rules and validation checks",
          "Scheduled report generation",
          "Exception dashboards",
        ],
        outcome: "Reports that are consistent, repeatable and traceable to source data.",
      },
    ],
  },
  {
    id: "saas",
    title: "SaaS & startups",
    summary: "From idea to product.",
    blueprints: [
      {
        title: "Idea-to-MVP build for a B2B SaaS",
        problem: "A validated idea with no working product yet.",
        build: [
          "Multi-tenant foundation and authentication",
          "Billing and subscriptions",
          "Three to five core use cases",
          "An AI feature with its own evaluation set",
        ],
        outcome: "A product real users can try, built on a base that can grow.",
      },
      {
        title: "Monolith to cloud-native migration",
        problem: "A slow-to-change application that is risky to deploy.",
        build: [
          "Migration plan by workload",
          "CI/CD and infrastructure as code",
          "Observability and alerting",
          "Incremental cutover with rollback",
        ],
        outcome: "Safer, more frequent releases and clearer cost visibility.",
      },
    ],
  },
];
