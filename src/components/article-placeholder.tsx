import { cn } from "@/lib/cn";

/** Branded fallback shown when an article's og:image can't be resolved (CLAUDE.md §12). */
export function ArticlePlaceholder({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center bg-blue-gray-900", className)}>
      <span className="text-white/90 font-bold tracking-wide text-lg">CKEditor</span>
    </div>
  );
}

export default ArticlePlaceholder;
