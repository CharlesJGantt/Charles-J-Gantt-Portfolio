import { EnvelopeIcon, LinkIcon } from "@heroicons/react/24/solid";
import { Section } from "@/components/section";

const LINKS = [
  { label: "cjgantt@gmail.com", href: "mailto:cjgantt@gmail.com", icon: EnvelopeIcon },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/charles-gantt-b5aa8351", icon: LinkIcon },
  { label: "GitHub", href: "https://github.com/CharlesJGantt", icon: LinkIcon },
  { label: "Drupal.org", href: "https://www.drupal.org/u/charles-gantt", icon: LinkIcon },
  { label: "Slack", href: "https://open-source-silicon.slack.com/team/U01LRHC4AFR", icon: LinkIcon },
  { label: "Twitter", href: "https://twitter.com/makersworkbench", icon: LinkIcon },
];

/** Closing CTA - "Let's Work Together" (CLAUDE.md §15 contact section). */
export function Contact() {
  return (
    <Section id="contact">
      <div className="rounded-2xl bg-blue-gray-900 text-white px-6 py-12 sm:px-12 sm:py-16">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let&apos;s Work Together</h2>
          <p className="text-blue-gray-300 leading-relaxed mb-8">
            Available for technical content marketing, B2B writing engagements, Drupal development, and CKEditor
            consulting. Response within 24 hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 text-white hover:text-blue-gray-200 transition-colors"
              >
                <Icon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
