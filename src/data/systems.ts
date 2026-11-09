/** The kinds of systems the lab focuses on. These describe scope, not delivered client work. */
export interface SystemArea {
  id: string;
  title: string;
  summary: string;
  items: string[];
}

export const systems: SystemArea[] = [
  {
    id: "qms",
    title: "QMS",
    summary: "Quality management systems that auditors and operators can both rely on.",
    items: [
      "Document control and approvals",
      "Audits, deviations and CAPA",
      "Training records and traceability",
      "Reporting and dashboards",
    ],
  },
  {
    id: "erp",
    title: "ERP systems",
    summary: "Operations software shaped around how a business actually runs.",
    items: [
      "Finance and invoicing",
      "Inventory and procurement",
      "Production planning",
      "Integrations with existing tools",
    ],
  },
  {
    id: "saas",
    title: "SaaS platforms",
    summary: "Products built to grow, with AI designed in from the start.",
    items: [
      "Multi-tenant architecture",
      "Billing and subscriptions",
      "APIs and integrations",
      "AI features with evaluations",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare systems",
    summary: "Clinical and operational software built with privacy and auditability in mind.",
    items: [
      "Operational and patient workflows",
      "Privacy-first data handling",
      "Audit trails and access control",
      "Interoperability with standard formats",
    ],
  },
];
