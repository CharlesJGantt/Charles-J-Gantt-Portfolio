import { CodeBracketIcon, ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Section, SectionHeading, Badge } from "@/components/section";
import { Card } from "@/components/ui";
import { MODULES } from "@/data/work";

/** Section C - Drupal Development & CKEditor 5 Plugins (CLAUDE.md §7C, §9, card type 3). */
export function DrupalDevelopment() {
  return (
    <Section id="development" className="bg-blue-gray-50/60 dark:bg-blue-gray-900">
      <SectionHeading
        kicker="Services"
        title="Drupal Development & CKEditor 5 Plugins"
        subtitle="These open-source Drupal 10/11 modules ship with custom CKEditor 5 plugins built from source, a full webpack build pipeline, GraphQL API integrations, and custom field types. This is the hands-on technical work that underpins the consulting practice."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {MODULES.map((m) => (
          <Card key={m.name} className="border border-blue-gray-100 dark:border-blue-gray-800 shadow-md rounded-xl">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-gray-900 text-white">
                  Drupal Module
                </span>
                <a
                  href={m.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-gray-400 hover:text-blue-gray-900 transition-colors"
                  aria-label="View on GitHub"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                </a>
              </div>
              <h3 className="text-blue-gray-900 dark:text-blue-gray-50 font-bold text-lg leading-snug mb-2">{m.name}</h3>
              <p className="text-blue-gray-900 dark:text-blue-gray-50 text-sm font-semibold mb-3">{m.problem}</p>
              <div className="mb-2">
                {m.description.map((para, i) => (
                  <p key={i} className="text-blue-gray-600 dark:text-blue-gray-300 text-sm leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mb-5">
                {m.stack.map((s) => (
                  <Badge key={s}>{s}</Badge>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 pt-4 border-t border-blue-gray-100 dark:border-blue-gray-800">
                <a
                  href={m.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-gray-900 dark:text-blue-gray-50 text-sm font-semibold hover:underline flex items-center gap-1"
                >
                  View on GitHub <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                </a>
                {m.drupalOrgUrl && (
                  <a
                    href={m.drupalOrgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-gray-900 dark:text-blue-gray-50 text-sm font-semibold hover:underline flex items-center gap-1"
                  >
                    View on Drupal.org <ArrowTopRightOnSquareIcon className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}

export default DrupalDevelopment;
