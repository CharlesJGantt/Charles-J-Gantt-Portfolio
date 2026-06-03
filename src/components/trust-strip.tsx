// Trust strip - "Published & Contracted By" (CLAUDE.md §5).
// Each entry shows a brand icon (light/dark variant swapped by theme) above
// the name. Icons live in /public/image/logo-icons/{light-mode,dark-mode}.

const LOGOS = [
  { name: "CKEditor", slug: "ckeditor", url: "https://ckeditor.com" },
  { name: "Acquia", slug: "acquia", url: "https://www.acquia.com" },
  { name: "Drupal.org", slug: "drupal", url: "https://www.drupal.org" },
  { name: "Element14", slug: "element14", url: "https://element14.com" },
  { name: "Efabless", slug: "efabless", url: "https://efabless.com" },
  { name: "TweakTown", slug: "tweaktown", url: "https://www.tweaktown.com" },
];

export function TrustStrip() {
  return (
    <section className="border-y border-blue-gray-100 dark:border-blue-gray-800 bg-blue-gray-50/60 dark:bg-blue-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-blue-gray-400 mb-6">
          Published &amp; Contracted By
        </p>
        <div className="flex flex-wrap items-start justify-center gap-x-10 sm:gap-x-14 gap-y-6">
          {LOGOS.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-sm font-semibold text-blue-gray-500 dark:text-blue-gray-300 hover:text-blue-gray-900 dark:hover:text-white transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- small fixed-height brand icons with a theme swap; next/image adds no value here */}
              <img
                src={`/image/logo-icons/light-mode/${l.slug}_logo_lt.png`}
                alt={`${l.name} logo`}
                className="h-12 w-auto object-contain block dark:hidden"
              />
              {/* eslint-disable-next-line @next/next/no-img-element -- small fixed-height brand icons with a theme swap; next/image adds no value here */}
              <img
                src={`/image/logo-icons/dark-mode/${l.slug}_logo_dk.png`}
                alt={`${l.name} logo`}
                className="h-12 w-auto object-contain hidden dark:block"
              />
              <span>{l.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustStrip;
