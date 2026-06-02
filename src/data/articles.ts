// CKEditor published articles - portfolio writing section.
// Source of truth: CLAUDE.md §10. "Read More" links point to the live article
// on ckeditor.com. No individual post pages are created (CLAUDE.md §15).

export interface Article {
  /** Card title shown in the grid. */
  title: string;
  /** Card summary shown in the grid. */
  summary: string;
  /** Canonical live URL (ckeditor.com, or another publication for guest bylines). */
  url: string;
  /** Filter tags (must align with ARTICLE_FILTERS for filtering to work). */
  tags: string[];
  /** When true, rendered in the full-width featured slot above the grid. */
  featured?: boolean;
  /** Publication label, shown when the byline isn't on CKEditor's own blog (§17). */
  publication?: string;
  /** Optional third-party coverage note (e.g. The Drop Times) shown on the card (§17). */
  coverage?: string;
  /** Resolved og:image (populated at build time; falls back to placeholder). */
  ogImage?: string;
}

/** Filter pills shown above the writing grid (CLAUDE.md §12). */
export const ARTICLE_FILTERS = [
  "All",
  "AI",
  "Collaboration",
  "Drupal",
  "Security",
  "Developer Education",
  "CMS",
  "Getting Started",
  "CKEditor 5",
] as const;

export const ARTICLES: Article[] = [
  {
    title: "Government Document Management: Modern Solutions for Secure Collaboration",
    summary:
      "Government agencies face mounting pressure to modernize. This article explores how collaborative editing technology replaces legacy tools, strengthens security compliance, and accelerates decision-making across departments.",
    url: "https://ckeditor.com/blog/government-document-management/",
    tags: ["CKEditor 5"],
    featured: true,
  },
  {
    title: "Best Free CKEditor Plugins to Boost Productivity",
    summary:
      "A guide to the CKEditor 5 Plugin Pack for Drupal, covering all 12 free plugins and 2 premium features available at no cost, written for Drupal developers and content architects on Acquia's official developer platform.",
    url: "https://www.acquia.com/blog/free-ckeditor-plugins",
    tags: ["Drupal", "CKEditor 5", "Developer Education"],
    publication: "Acquia Developer Portal",
    coverage: "Covered by The Drop Times, the Drupal community's primary news publication",
  },
  {
    title: "Long-Term Support for CKEditor 4 in Drupal",
    summary:
      "As CKEditor 4 reaches end of life, Drupal teams face real security risk. This guide, published on Acquia's official documentation platform, explains the CKEditor 4 Extended Support Model, who needs it, and how to implement it while planning a CKEditor 5 migration.",
    url: "https://docs.acquia.com/acquia-cloud-platform/help/90061-long-term-support-ckeditor-4-drupal",
    tags: ["Drupal", "Security", "CKEditor 5"],
    publication: "Acquia Product Documentation",
    coverage: "Covered by The Drop Times, twice",
  },
  {
    title: "Best HTML Editor with Live Preview for 2025",
    summary:
      "Real-time HTML preview changes the game for developers and content creators alike. Discover what separates a great HTML editor from the rest and why CKEditor's live preview stands out in 2025.",
    url: "https://ckeditor.com/blog/best-html-editor-with-live-preview/",
    tags: ["Developer Education"],
  },
  {
    title: "File Management System: A Comprehensive Guide for Modern Teams",
    summary:
      "A disorganized file system costs teams time and increases risk. This comprehensive guide walks through what a modern file management system needs to do, and how integrated solutions like CKBox solve the problem end-to-end.",
    url: "https://ckeditor.com/blog/file-management-system-comprehensive-guide/",
    tags: ["CMS"],
  },
  {
    title: "How to Create Good AI Prompts That Actually Work",
    summary:
      "AI is only as useful as the instructions you give it. This article teaches practical prompt engineering principles that help writers, developers, and editors get better results from AI tools embedded in their workflows.",
    url: "https://ckeditor.com/blog/create-good-ai-prompts/",
    tags: ["AI"],
  },
  {
    title: "AI Content Creation: Editor Solutions Transforming the Writing Process",
    summary:
      "AI-assisted writing is no longer a novelty. It's a competitive advantage. Explore how AI features built directly into content editors are reshaping how teams draft, edit, and publish at scale.",
    url: "https://ckeditor.com/blog/ai-content-creation-editor-solutions/",
    tags: ["AI"],
  },
  {
    title: "CKBox 2.5.0: A Guide to the New Permissions Feature",
    summary:
      "CKBox 2.5.0 introduces granular permissions controls that give teams precise authority over who can view, upload, and manage assets. This guide walks through every option and explains when to use each.",
    url: "https://ckeditor.com/blog/ckbox-2-5-0-permissions-feature-guide/",
    tags: ["CMS"],
  },
  {
    title: "Merge Fields in CKEditor: Usage Patterns and Key Benefits",
    summary:
      "Merge fields unlock dynamic, personalized content generation at scale. Learn how to implement them in CKEditor and understand the workflows they transform, from proposal generation to bulk email templates.",
    url: "https://ckeditor.com/blog/merge-fields-usage-key-benefits/",
    tags: ["CKEditor 5"],
  },
  {
    title: "Build a Custom Text Editor with CKEditor 5's Interactive Builder",
    summary:
      "CKEditor 5 Builder makes it possible to craft a tailored editing experience without deep plugin knowledge. This step-by-step guide shows how to configure, preview, and export a custom editor setup that fits your application perfectly.",
    url: "https://ckeditor.com/blog/custom-text-editor-setup-using-ckeditor-5-builder/",
    tags: ["Developer Education", "Getting Started"],
  },
  {
    title: "CKEditor 5 Achieves SOC 2 Type 1 Compliance: What It Means for Your Data",
    summary:
      "Security certifications matter when choosing enterprise software. This article explains what SOC 2 Type 1 compliance means, why CKEditor pursued it, and what assurances it provides to enterprise customers handling sensitive data.",
    url: "https://ckeditor.com/blog/ckeditor5-soc2-type1-compliance-data-security/",
    tags: ["Security"],
  },
  {
    title: "The State of Collaborative Editing in Rich Text Editors: 2024 Report",
    summary:
      "Collaborative editing has matured from a nice-to-have into a core requirement. This 2024 analysis examines where the technology stands today, what users expect, and where the leading editors are investing their development resources.",
    url: "https://ckeditor.com/blog/the-state-of-collaborative-editing-in-rich-text-editors-2024/",
    tags: ["Collaboration"],
  },
  {
    title: "NuxtNation 2024: CKEditor Integration Tips from the Conference Floor",
    summary:
      "NuxtNation brought together the Vue and Nuxt ecosystem's best minds. Get the top CKEditor integration tips that emerged from the event, plus a look at the community engagement that made it memorable.",
    url: "https://ckeditor.com/blog/nuxtnation-2024-ckeditor-integration-tips-and-swag-giveaways/",
    tags: ["Developer Education"],
  },
  {
    title: "The Best Markdown Editor for Seamless Content Creation in 2025",
    summary:
      "Not all Markdown editors are created equal. This guide evaluates the top contenders on workflow integration, preview quality, and extensibility, helping writers and developers find the editor that fits their process.",
    url: "https://ckeditor.com/blog/the-best-markdown-editor-for-seamless-content-creation/",
    tags: ["Developer Education", "CMS"],
  },
  {
    title: "Explore CKEditor: A Feature-Rich Professional Text Editor Demo",
    summary:
      "The best way to understand what CKEditor can do is to see it in action. This walkthrough of CKEditor's professional demo highlights the features that matter most for real-world content teams.",
    url: "https://ckeditor.com/blog/explore-ckeditor-feature-rich-professional-text-editor-demo/",
    tags: ["Getting Started", "CKEditor 5"],
  },
  {
    title: "Maximize Productivity with the CKEditor 5 Interactive Builder",
    summary:
      "CKEditor 5's Interactive Builder is one of the fastest paths from idea to a working editor configuration. This guide reveals the power-user tips that most developers miss on their first pass.",
    url: "https://ckeditor.com/blog/maximize-productivity-with-ckeditor5-interactive-builder-guide/",
    tags: ["Developer Education", "Getting Started"],
  },
  {
    title: "How to Get the Most Out of Your CKEditor 14-Day Free Trial",
    summary:
      "A 14-day trial only delivers value if you know what to test. This guide provides a structured evaluation plan that helps development teams assess CKEditor's premium features against their real-world requirements before committing.",
    url: "https://ckeditor.com/blog/getting-the-most-out-of-ckeditor-14-day-free-trial/",
    tags: ["Getting Started"],
  },
  {
    title: "What Is JSX in React? How JSX Works and Why It Matters",
    summary:
      "JSX is React's signature syntax, but many developers use it daily without fully understanding what's happening under the hood. This explainer demystifies JSX from first principles, making it approachable for beginners and clarifying for intermediates.",
    url: "https://ckeditor.com/blog/what-is-jsx-in-react-how-does-jsx-work/",
    tags: ["Developer Education"],
  },
  {
    title: "CKEditor 5 Premium Features vs. Free Trial: What You Actually Get",
    summary:
      "Understanding exactly what's included in CKEditor's free tier versus premium plans is critical for accurate project planning. This breakdown clarifies every difference so teams can make an informed decision.",
    url: "https://ckeditor.com/blog/ckeditor-5-premium-features-vs-free-trial-benefits/",
    tags: ["Getting Started", "CKEditor 5"],
  },
  {
    title: "CKEditor 5 Self-Service Plans: How to Upgrade Your Drupal Editor",
    summary:
      "CKEditor's new self-service plans make it easier than ever for Drupal site owners to unlock premium editing features without an enterprise sales process. Here's what changed and how to take advantage of it.",
    url: "https://ckeditor.com/blog/ckeditor-5-new-self-service-plans-upgrade-your-drupal-editor/",
    tags: ["Drupal", "Getting Started"],
  },
  {
    title: "Unlock New Levels of Drupal Content Editing: Webinar Recap",
    summary:
      "CKEditor's Drupal content editing webinar packed a lot into a short session. This recap distills the key demonstrations, audience questions, and practical takeaways for Drupal developers and content architects.",
    url: "https://ckeditor.com/blog/unlock-new-levels-of-drupal-content-editing-webinar-recap/",
    tags: ["Drupal"],
  },
  {
    title: "Nuxt Nation 2024 Wrap-Up: Key Insights for Vue and Nuxt Developers",
    summary:
      "Nuxt Nation 2024 showcased where the Nuxt ecosystem is headed. This wrap-up captures the sessions, announcements, and developer conversations that will shape Nuxt applications in the year ahead.",
    url: "https://ckeditor.com/blog/nuxt-nation-2024-wrap-up-key-event-insights/",
    tags: ["Developer Education"],
  },
  {
    title: "Can Anyone Learn to Code? Breaking Down the Barriers to Programming",
    summary:
      "The idea that coding is only for a certain type of person is one of the most persistent myths in tech. This article examines the real barriers to learning programming, and why more people than ever are successfully clearing them.",
    url: "https://ckeditor.com/blog/can-anyone-learn-to-code/",
    tags: ["Developer Education"],
  },
  {
    title: "Future-Proof Your CMS: Trends Shaping the Next Generation of Content Management",
    summary:
      "Content management systems are evolving rapidly. This forward-looking analysis identifies the architectural decisions, emerging capabilities, and ecosystem shifts that will define CMS platforms over the next five years.",
    url: "https://ckeditor.com/blog/future-proof-cms-trends/",
    tags: ["CMS"],
  },
  {
    title: "CKEditor 5 Achieves SOC 2 Type 2 Compliance: A New Security Milestone",
    summary:
      "SOC 2 Type 2 is the gold standard for software security certification. CKEditor's achievement of this milestone signals its commitment to enterprise-grade data protection, and has real implications for regulated-industry customers.",
    url: "https://ckeditor.com/blog/ckeditor-5-is-now-soc-2-type-2-compliant-for-data-security/",
    tags: ["Security"],
  },
  {
    title: "Getting Started with CKEditor: Free Webinar for New Users",
    summary:
      "New to CKEditor? The free Getting Started webinar is designed to get developers and content teams up and running fast. Here's what to expect and why it's worth your hour.",
    url: "https://ckeditor.com/blog/getting-started-with-ckeditor-join-our-free-webinar/",
    tags: ["Getting Started"],
  },
  {
    title: "CKEditor × Major League Hacking: Beginners Week Wrap-Up",
    summary:
      "CKEditor's partnership with Major League Hacking brought rich text editing to a new generation of student developers. This wrap-up covers what students built, what they learned, and what the collaboration revealed about developer onboarding.",
    url: "https://ckeditor.com/blog/ckeditor-mlh-beginners-week-wrap-up/",
    tags: ["Developer Education", "Getting Started"],
  },
];
