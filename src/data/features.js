import {
  ArrowUpRight,
  Download,
  GanttChart,
  LayoutGrid,
  MessageSquare,
} from "lucide-react";

export const features = [
  {
    number: "01",
        slug: "boards",
    shortLabel: "Boards",
    title: "Boards that move at your speed",
    description:
      "Plan sprints and track tasks without hunting through spreadsheets.",
    accent: "boards",
    accentColor: "#A3301E",
    icon: LayoutGrid,
    visual: "board",
  },

  {
    number: "02",
    shortLabel: "Threads",
      slug: "threads",
    title: "Threads, not another inbox",
    description: "Keep project conversations attached to the work itself.",
    accent: "threads",
    accentColor: "#5B7180",
    icon: MessageSquare,
    visual: "thread",
  },

  {
    number: "03",
    shortLabel: "Timeline",
       slug: "timeline",
    title: "One timeline for the whole team",
    description: "Every deadline and milestone in one shared view.",
    accent: "timeline",
    accentColor: "#B58B39",
    icon: GanttChart,
    visual: "timeline",
  },

  {
    number: "04",
    shortLabel: "Imports",
       slug: "imports",
    title: "Works the way you already do",
    description: "Import from Trello, Asana, or a spreadsheet in minutes.",
    accent: "imports",
    accentColor: "#71856B",
    icon: Download,
    visual: "import",
  },
];

export const footerLinks = {
  Product: [
    {
      label: "Boards",
      href: "/product#boards",
    },
    {
      label: "Threads",
      href: "/product#threads",
    },
    {
      label: "Timelines",
      href: "/product#timeline",
    },
    {
      label: "Imports",
      href: "/product#imports",
    },
  ],

  Company: [
    {
      label: "About Novi",
      href: "/#footer",
    },
    {
      label: "Careers",
      href: "/#footer",
    },
    {
      label: "Contact",
      href: "/#footer",
    },
  ],

  Resources: [
    {
      label: "Boards",
      href: "/product#boards",
    },
    {
      label: "Threads",
      href: "/product#threads",
    },
    {
      label: "Timelines",
      href: "/product#timeline",
    },
    {
      label: "Community",
      href: "/#footer",
    },
  ],

  Legal: [
    {
      label: "Privacy",
      href: "/#footer",
    },
    {
      label: "Terms",
      href: "/#footer",
    },
  ],
};

export const ArrowIcon = ArrowUpRight;
