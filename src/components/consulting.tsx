import { Section, SectionHeading, Badge } from "@/components/section";
import { Card } from "@/components/ui";
import { CONSULTING } from "@/data/work";

/** Section B - Consulting & Strategy project cards (CLAUDE.md §7B, §8, card type 2). */
export function Consulting() {
  return (
    <Section id="consulting" className="bg-blue-gray-50/60 dark:bg-blue-gray-900">
      <SectionHeading
        kicker="Services"
        title="Consulting & Strategy"
        subtitle="Independent engagements in enterprise CKEditor migration planning and B2B technical content strategy."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {CONSULTING.map((w) => (
          <Card key={w.client} className="border border-blue-gray-100 dark:border-blue-gray-800 shadow-md rounded-xl">
            <div className="p-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-blue-gray-200 text-blue-gray-700 bg-white dark:border-blue-gray-700 dark:text-blue-gray-200 dark:bg-blue-gray-800 mb-4">
                {w.category}
              </span>
              <h3 className="text-blue-gray-900 dark:text-blue-gray-50 font-bold text-lg leading-snug mb-1">{w.client}</h3>
              <p className="text-blue-gray-400 text-sm mb-4">{w.roleAndDuration}</p>
              <div className="mb-2">
                {w.description.map((para, i) => (
                  <p key={i} className="text-blue-gray-600 dark:text-blue-gray-300 text-base leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {w.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              {w.note && (
                <p className="text-blue-gray-400 text-sm italic border-t border-blue-gray-100 dark:border-blue-gray-800 pt-4">{w.note}</p>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default Consulting;
