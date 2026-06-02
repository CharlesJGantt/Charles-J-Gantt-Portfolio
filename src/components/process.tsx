import {
  MagnifyingGlassIcon,
  MapIcon,
  WrenchScrewdriverIcon,
  BeakerIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";
import { Section, SectionHeading } from "@/components/section";

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    icon: MagnifyingGlassIcon,
    body: "I learn your product, audience, and goals. Reading docs, talking to your team, and mapping where content or development effort actually moves the needle.",
  },
  {
    n: "02",
    title: "Research & Strategy",
    icon: MapIcon,
    body: "Source triangulation, competitive analysis, and an outline or technical spec approved before a word of copy or a line of code is written.",
  },
  {
    n: "03",
    title: "Build",
    icon: WrenchScrewdriverIcon,
    body: "Drafting to your editorial standard, or building Drupal and CKEditor 5 modules from source. AI as a production accelerator, not a replacement for judgment.",
  },
  {
    n: "04",
    title: "Review & Test",
    icon: BeakerIcon,
    body: "Technical fact-checking, editorial polish, and real-world testing. Every claim verified and every module tested before it ships.",
  },
  {
    n: "05",
    title: "Ship & Iterate",
    icon: RocketLaunchIcon,
    body: "Delivered on deadline with revisions and follow-through. 24-hour response window throughout the engagement.",
  },
];

/** How I work - 5-step engagement process (CLAUDE.md §2 page structure #9). */
export function Process() {
  return (
    <Section id="process" className="bg-blue-gray-50/60 dark:bg-blue-gray-900">
      <SectionHeading
        kicker="Engagement"
        title="How I Work"
        subtitle="A repeatable process built over 16 years of Drupal development and 20 years of content creation. Whether the deliverable is a published article, an enterprise migration whitepaper, or a CKEditor 5 plugin, every engagement runs through the same five stages, so the output stays predictable and the deadlines hold."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {STEPS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.n}>
              <Icon className="w-8 h-8 text-blue-gray-900 dark:text-blue-gray-50 mb-3" aria-hidden="true" />
              <div className="text-sm font-bold text-blue-gray-300 dark:text-blue-gray-600 mb-2">{s.n}</div>
              <h3 className="text-blue-gray-900 dark:text-blue-gray-50 font-semibold mb-2">{s.title}</h3>
              <p className="text-blue-gray-600 dark:text-blue-gray-300 text-sm leading-relaxed">{s.body}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

export default Process;
