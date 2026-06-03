import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const METRICS = [
  { value: "20M+", label: "Content Views" },
  { value: "16+", label: "Years Drupal" },
  { value: "20+", label: "Years Content" },
  { value: "825+", label: "Published Articles" },
];

/** Hero: left-aligned copy + metrics, right-side headshot (CLAUDE.md §4). */
function Hero() {
  return (
    <section id="top" className="bg-white dark:bg-blue-gray-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-gray-500 dark:text-blue-gray-400 mb-4">
              CKEditor · Drupal · RTE Consulting
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-blue-gray-900 dark:text-blue-gray-50 leading-tight mb-5">
              B2B Technical Content, RTE Consulting &amp; Drupal Development
            </h1>
            <p className="text-lg text-blue-gray-600 dark:text-blue-gray-300 leading-relaxed mb-8 max-w-2xl">
              16+ years of Drupal development. Former Technical Content Marketer at CKEditor. Open-source CKEditor 5
              plugins on GitHub. Enterprise migration consulting for platforms serving hundreds of U.S. universities.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-blue-gray-900 text-white uppercase tracking-widest font-bold text-xs py-3.5 px-7 rounded-lg hover:bg-blue-gray-800 transition-colors"
              >
                Let&apos;s Work Together <ArrowRightIcon aria-hidden="true" className="w-4 h-4" />
              </a>
              <a
                href="#writing"
                className="inline-flex items-center gap-2 border border-blue-gray-200 dark:border-blue-gray-700 text-blue-gray-900 dark:text-blue-gray-100 uppercase tracking-widest font-bold text-xs py-3.5 px-7 rounded-lg hover:bg-blue-gray-50 dark:hover:bg-blue-gray-800 transition-colors"
              >
                View My Work <ArrowRightIcon aria-hidden="true" className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {METRICS.map((m) => (
                <div key={m.label}>
                  <div className="text-3xl sm:text-4xl font-bold text-blue-gray-900 dark:text-blue-gray-50">{m.value}</div>
                  <div className="text-xs text-blue-gray-500 dark:text-blue-gray-400 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <div className="relative mx-auto w-56 sm:w-72 lg:w-full max-w-sm">
              <Image
                src="/image/avatar1.jpg"
                alt="Charles J. Gantt"
                width={640}
                height={640}
                priority
                className="rounded-2xl shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
