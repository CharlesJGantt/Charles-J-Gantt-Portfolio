import { Section } from "@/components/section";

/** The single most differentiating callout on the site (CLAUDE.md §3, §8.1). */
export function CredentialTriangle() {
  return (
    <Section>
      <div className="rounded-2xl bg-blue-gray-900 text-white px-6 py-12 sm:px-12 text-center">
        <p className="text-xl sm:text-2xl font-semibold leading-snug max-w-3xl mx-auto">
          CKEditor specialist. Drupal developer. Enterprise RTE consultant.
        </p>
        <p className="text-blue-gray-300 mt-4">
          When your WYSIWYG decision has real stakes, you need someone who has been on all three sides of it.
        </p>
      </div>
    </Section>
  );
}

export default CredentialTriangle;
