import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { ThemeToggle } from "@/components/theme-toggle";

const LINKS = [
  { label: "Writing", href: "#writing" },
  { label: "Services", href: "#consulting" },
  { label: "Video", href: "#videos" },
  { label: "About", href: "#about" },
];

/** Sticky top navigation with persistent "Hire Me" CTA (CLAUDE.md §4). */
export function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-blue-gray-900/95 backdrop-blur border-b border-blue-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="text-white font-bold tracking-tight">
          Charles J. Gantt
        </a>
        <div className="hidden md:flex items-center gap-7 text-sm text-blue-gray-200">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-white text-blue-gray-900 text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-lg hover:bg-blue-gray-100 transition-colors"
          >
            Hire Me <ArrowRightIcon aria-hidden="true" className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
