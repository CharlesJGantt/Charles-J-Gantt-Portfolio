import { Section, SectionHeading, Tag } from "@/components/section";
import { TIMELINE } from "@/data/work";

/** Section D - Career Timeline (CLAUDE.md §7D, §3). */
export function Timeline() {
  return (
    <Section id="timeline" className="bg-blue-gray-50/60 dark:bg-blue-gray-900">
      <SectionHeading
        kicker="Background"
        title="Career Timeline"
        subtitle="Fifteen years from daily tech journalism to enterprise CKEditor consulting."
      />
      <ol>
        {TIMELINE.map((n, i) => (
          <li key={n.org} className="flex gap-5">
            <div className="flex flex-col items-center">
              <span className="w-3.5 h-3.5 rounded-full bg-blue-gray-900 dark:bg-blue-gray-400 mt-1.5 shrink-0" />
              {i < TIMELINE.length - 1 && <span className="w-px flex-1 bg-blue-gray-200 dark:bg-blue-gray-700 my-1" />}
            </div>
            <div className="pb-10 max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-gray-500 dark:text-blue-gray-400 mb-1">{n.period}</p>
              <h3 className="text-blue-gray-900 dark:text-blue-gray-50 font-bold text-lg leading-snug">
                {n.url ? (
                  <a href={n.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {n.org}
                  </a>
                ) : (
                  n.org
                )}
              </h3>
              <p className="text-blue-gray-500 dark:text-blue-gray-400 text-sm mb-2">{n.role}</p>
              <p className="text-blue-gray-600 dark:text-blue-gray-300 text-base leading-relaxed mb-3">{n.blurb}</p>
              <div className="flex flex-wrap gap-2">
                {n.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export default Timeline;
