import { Section, SectionHeading } from "@/components/section";

/** Condensed About (site-updates.md §3). */
export function About() {
  return (
    <Section id="about">
      <SectionHeading title="About" />
      <div className="max-w-3xl space-y-4 text-blue-gray-600 leading-relaxed">
        <p>
          Independent CKEditor and Drupal specialist. Former Technical Content Marketer at CKEditor. Published on
          CKEditor&apos;s official blog and Acquia&apos;s documentation platform. Open-source Drupal modules with custom
          CKEditor 5 plugins on GitHub. Enterprise migration consulting for academic platforms serving hundreds of U.S.
          universities.
        </p>
        <p>
          Before CKEditor: seven years as Community Content Manager at Element14 (Avnet), content strategy for Efabless
          during the Google Open MPW program, and staff writer at TweakTown covering enterprise hardware and maker
          technology.
        </p>
        <p>
          I use Claude, ChatGPT, and Perplexity as core production tools and built this site using Claude Code.
        </p>
      </div>
    </Section>
  );
}

export default About;
