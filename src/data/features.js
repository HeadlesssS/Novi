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
    shortLabel: "Boards",
    title: "Boards that move at your speed",
    description:
      "Plan sprints and track tasks without hunting through spreadsheets.",
    accent: "sage",
    icon: LayoutGrid,
    visual: "board",
  },
  {
    number: "02",
    shortLabel: "Threads",
    title: "Threads, not another inbox",
    description: "Keep project conversations attached to the work itself.",
    accent: "clay",
    icon: MessageSquare,
    visual: "thread",
  },
  {
    number: "03",
    shortLabel: "Timeline",
    title: "One timeline for the whole team",
    description: "Every deadline and milestone in one shared view.",
    accent: "butter",
    icon: GanttChart,
    visual: "timeline",
  },
  {
    number: "04",
    shortLabel: "Imports",
    title: "Works the way you already do",
    description: "Import from Trello, Asana, or a spreadsheet in minutes.",
    accent: "blue",
    icon: Download,
    visual: "import",
  },
];



// data/features.js
export const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Integrations", href: "#features" },
    { label: "Pricing", href: "#features" },
  ],
  Company: [
    { label: "About Novi", href: "#footer" },
    { label: "Careers", href: "#footer" },
    { label: "Contact", href: "#footer" },
  ],
  Resources: [
    { label: "Help center", href: "#footer" },
    { label: "Guides", href: "#footer" },
    { label: "Community", href: "#footer" },
  ],
  Legal: [
    { label: "Privacy", href: "#footer" },
    { label: "Terms", href: "#footer" },
  ],
};

export const ArrowIcon = ArrowUpRight;
