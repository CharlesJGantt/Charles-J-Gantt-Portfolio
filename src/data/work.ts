// Client work, Drupal modules, career timeline, and technical-project videos.
// Source of truth: CLAUDE.md §8, §9, §3, §15.

/* ----------------------------------------------------- Consulting & client work */

export interface ClientWork {
  /** Pill label shown on the card (CLAUDE.md §12 category label values). */
  category: string;
  client: string;
  /** "Role - Duration" line. */
  roleAndDuration: string;
  /** One entry per paragraph, rendered with spacing between them. */
  description: string[];
  tags: string[];
  /** Optional confidentiality / availability footer note. */
  note?: string;
}

/** Section B - Consulting & Strategy (CLAUDE.md §8.2, §8.3). */
export const CONSULTING: ClientWork[] = [
  {
    category: "Enterprise Consulting",
    client: "CKEditor 4 to 5 Migration for Leepfrog Technologies (Courseleaf)",
    roleAndDuration: "CKEditor Migration Consultant · December 2025 to April 2026",
    description: [
      "Independent consultant engaged to evaluate and document a full CKEditor 4 to CKEditor 5 migration path for Courseleaf, an academic operations platform used at hundreds of U.S. colleges and universities.",
      "Delivered a 16-section technical whitepaper covering complete plugin mapping across all 57 CKE4 plugins, a CRITICAL/HIGH/MEDIUM/LOW risk register, iFrame-to-inline DOM architectural analysis, SSR incompatibility identification, GPL vs. commercial licensing analysis with enterprise cost modeling ($0 to $299K/year), and a structured evaluation of four alternative editors (CKEditor 5, Lexical, Editor.js, Quill v2) with head-to-head comparison tables.",
    ],
    tags: ["CKEditor 4/5", "Enterprise Consulting", "Drupal", "EdTech", "Technical Architecture", "Migration Planning"],
    note: "Engagement conducted under NDA. Document available upon request to qualified prospects.",
  },
  {
    category: "Content Strategy",
    client: "Content Strategy & Community at Efabless.com",
    roleAndDuration: "Content Strategy & Community Consultant · ~2021 to 2022",
    description: [
      "Content and community consultant during the early growth phase of Efabless's open-source silicon program, a Google × SkyWater Technology initiative offering free custom ASIC fabrication through the Open MPW shuttle program.",
      "Built and executed content strategy targeting the electrical engineering, FPGA, and DIY electronics communities. Translated dense EDA toolchain concepts (OpenLane, SKY130 PDK, Caravel SoC, RTL2GDS flows) into accessible content for a non-IC-expert audience that made up roughly 60% of early adopters.",
    ],
    tags: ["Content Strategy", "Community Management", "Technical Writing", "EDA / Open Silicon", "Google × SkyWater Partnership"],
    note: "Content no longer live following site redesign. Program context verifiable via public press record.",
  },
];

/* --------------------------------------------------- Drupal development modules */

export interface DrupalModule {
  name: string;
  problem: string;
  /** One entry per paragraph, rendered with spacing between them. */
  description: string[];
  stack: string[];
  githubUrl: string;
  drupalOrgUrl?: string;
}

/** Section C - Drupal Development (CLAUDE.md §9). */
export const MODULES: DrupalModule[] = [
  {
    name: "Printables Embed: Drupal 10/11 Module + CKEditor 5 Plugin",
    problem:
      "Drupal has no native way to display rich 3D model previews from Printables.com. Editors had to manually copy metadata, images, and stats with no live data.",
    description: [
      "Accepts a Printables URL, queries the Printables GraphQL API, and renders a rich embed card (model thumbnail, author, description, likes/downloads/views) anywhere in Drupal content. Available as a custom field type or directly inside CKEditor 5 via a custom toolbar button and plugin built with webpack.",
      "Includes a 6-hour API response cache, a text filter for converting embeds in content, and responsive consistently styled output. All PHP, JavaScript, and Twig reviewed, tested, and modified to production standards before release.",
    ],
    stack: ["Drupal 10/11", "PHP", "CKEditor 5", "GraphQL", "JavaScript", "Webpack", "Twig"],
    githubUrl: "https://github.com/CharlesJGantt/printables_embed_drupal",
    drupalOrgUrl: "https://www.drupal.org/u/charles-gantt",
  },
  {
    name: "Cults3D Embed: Drupal 10/11 Module + CKEditor 5 Plugin",
    problem:
      "Makers and educators using Drupal to showcase Cults3D designs had no native embed pathway. Displaying model metadata required manual copy-paste with no live statistics.",
    description: [
      "Integrates the Cults3D GraphQL API into Drupal with secure API key storage in Drupal configuration. Renders model name, description, thumbnail, price, and download count as a themed card with a CKEditor 5 toolbar button that lets editors embed models without leaving the editor.",
      "Fully Twig-themeable per institution or site. Composer-installable with a permissions system baked in and the GraphQL query schema documented in the README.",
    ],
    stack: ["Drupal 10/11", "PHP", "CKEditor 5", "GraphQL", "Composer", "Twig"],
    githubUrl: "https://github.com/CharlesJGantt/cults3d_embed_drupal",
  },
];

/* ------------------------------------------------------------- Career timeline */

export interface TimelineNode {
  period: string;
  org: string;
  role: string;
  blurb: string;
  tags: string[];
  url?: string;
}

/** Section D - Career Timeline (CLAUDE.md §3, §8). */
export const TIMELINE: TimelineNode[] = [
  {
    period: "Dec 2012 – Jun 2014",
    org: "TweakTown",
    role: "Staff Technology Writer",
    blurb:
      "500+ published articles over 19 months at daily deadline cadence, covering breaking tech news, hands-on hardware reviews (3D printers, storage, PC components), enterprise storage, and a dedicated maker/DIY beat. Ran named multi-part build series (Project M.A.R.V. drone, Project ATAAPR rover) that defined the project-documentation format used for the next seven years.",
    tags: ["Tech Journalism", "Hardware Reviews", "3D Printing", "500+ Articles"],
    url: "https://www.tweaktown.com/author/Charles-Gantt/index.html",
  },
  {
    period: "~2013 – 2020 (7 years)",
    org: "Element14 (Avnet)",
    role: "Community Content Manager & Design Challenge Host",
    blurb:
      "Ran the flagship Element14 Design Challenge series for an electronics distributor with 1M+ community members across Newark, Farnell, and Element14. Produced 300+ original articles, tutorials, and project builds across Raspberry Pi, Arduino, TI LaunchPad, and Microchip PIC. Work was featured by Adafruit's PiDay series and in Element14's curated 'Best of' showcases.",
    tags: ["Community Management", "Technical Content", "Editorial Management", "Avnet/Farnell"],
  },
  {
    period: "~2021 – 2022",
    org: "Efabless / Google Open MPW",
    role: "Content Strategy & Community Consultant",
    blurb:
      "Built and executed content strategy for Efabless's open-source silicon program, a Google × SkyWater initiative offering free custom ASIC fabrication. Translated dense EDA toolchain concepts (OpenLane, SKY130 PDK, Caravel SoC) into accessible content for the DIY electronics community.",
    tags: ["Content Strategy", "EDA / Open Silicon", "Community"],
  },
  {
    period: "July 2024 – July 2025",
    org: "CKEditor",
    role: "Technical Content Marketer",
    blurb:
      "25 published bylines on the official CKEditor blog spanning AI-assisted editing, SOC 2 compliance, collaborative editing, Drupal integration, developer onboarding, CMS trends, and CKEditor 5 architecture, written for developers, content architects, and enterprise buyers. Also a named panelist on the October 2024 CKEditor × Drupal webinar, presenting alongside CKEditor's Developer Advocate and Drupal Modules engineer.",
    tags: ["Technical Content Marketing", "CKEditor 5", "B2B SaaS", "Developer Education"],
    url: "https://ckeditor.com/blog/authors/charles-gantt/",
  },
  {
    period: "December 2025 – April 2026",
    org: "Leepfrog Technologies (Courseleaf)",
    role: "CKEditor Migration Consultant",
    blurb:
      "Delivered the CKEditor 4→5 migration whitepaper that informed a platform decision affecting hundreds of colleges and universities, including full plugin mapping, risk register, licensing/cost modeling, and a structured evaluation of alternative editors.",
    tags: ["Enterprise Consulting", "CKEditor 4/5", "EdTech"],
  },
];
