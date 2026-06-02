// Trust strip - "Published & Contracted By" (CLAUDE.md §5).
// NOTE: text-based brand wordmarks as a placeholder. Swap in official logo
// image files (~32px height, grayscale→color on hover) when available.

const LOGOS = [
  { name: "CKEditor", url: "https://ckeditor.com" },
  { name: "Acquia", url: "https://www.acquia.com" },
  { name: "Element14", url: "https://element14.com" },
  { name: "Efabless", url: "https://efabless.com" },
  { name: "TweakTown", url: "https://www.tweaktown.com" },
  { name: "Drupal.org", url: "https://www.drupal.org" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-blue-gray-100 bg-blue-gray-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-gray-400 mb-5">
          Published &amp; Contracted By
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-blue-gray-400 hover:text-blue-gray-900 transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
