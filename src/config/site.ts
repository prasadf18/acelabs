/**
 * Single source of truth for facts that appear on many pages.
 * Change a value here and every page, the footer and the contact page follow.
 */
export const site = {
  name: "ACE Labs",
  /** ACE stands for AI, Cloud and Engineering. */
  expansion: "AI, Cloud & Engineering",
  tagline: "An independent technology and product innovation lab.",
  description:
    "ACE Labs is an independent technology and product innovation lab focused on building intelligent solutions, transforming businesses, and solving complex engineering challenges.",

  /**
   * Public contact address, shown on the contact page and in the footer.
   * Confirm this is the inbox you actually read before sharing the site.
   */
  email: "ace@gmail.com",

  founder: {
    name: "Prasad Firame",
    initials: "PF",
    role: "Founder & Engineer",
    bio: "3+ years of experience building software systems, AI-powered solutions, and scalable digital products.",
  },

  /** Only links that exist. Add LinkedIn or X here once the accounts are real. */
  links: {
    github: "https://github.com/prasadf18/acelabs",
  },

  /** Main navigation. Order here is the order on screen. */
  nav: [
    { label: "Services", href: "services/" },
    { label: "Systems", href: "systems/" },
    { label: "Projects", href: "projects/" },
    { label: "Notes", href: "notes/" },
    { label: "About", href: "about/" },
  ],
} as const;
