const SOCIAL = [
  { label: "GitHub", href: "https://github.com/CharlesJGantt" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/charles-gantt-b5aa8351" },
  { label: "Drupal.org", href: "https://www.drupal.org/u/charles-gantt" },
];

/** Site footer with third-party credibility links (CLAUDE.md §15). */
export function Footer() {
  return (
    <footer className="bg-blue-gray-900 border-t border-blue-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-gray-400 text-sm">© 2026 Charles J. Gantt</p>
        <div className="flex gap-6 text-sm text-blue-gray-300">
          {SOCIAL.map((s) => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
