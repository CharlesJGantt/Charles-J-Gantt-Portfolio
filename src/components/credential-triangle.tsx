import { Section } from "@/components/section";

/** The single most differentiating callout on the site (CLAUDE.md §3, §8.1). */
export function CredentialTriangle() {
  return (
    <Section>
      <div className="rounded-2xl bg-blue-gray-900 text-white px-6 py-12 sm:px-12 text-center">
        <p className="text-xl sm:text-2xl font-semibold leading-snug max-w-3xl mx-auto">
          I write about CKEditor. I build plugins for it. I consult on enterprise migrations.
        </p>
        <p className="text-blue-gray-300 mt-4">
          Most people have one of these credentials. I have all three.
        </p>
      </div>
    </Section>
  );
}

export default CredentialTriangle;
