import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui";
import { Tag } from "@/components/section";
import { ArticlePlaceholder } from "@/components/article-placeholder";
import type { Article } from "@/data/articles";

/** Article card for the CKEditor writing grid (CLAUDE.md §12, card type 1). */
export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card className="overflow-hidden border border-blue-gray-100 shadow-md rounded-xl flex flex-col">
      <div className="relative h-48">
        {article.ogImage ? (
          <Image
            src={article.ogImage}
            alt={article.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        ) : (
          <ArticlePlaceholder className="h-48 w-full" />
        )}
      </div>
      <div className="p-4 flex flex-col flex-1">
        {article.publication && (
          <p className="text-[11px] font-bold uppercase tracking-widest text-blue-gray-400 mb-1.5">
            {article.publication}
          </p>
        )}
        <div className="flex flex-wrap gap-1.5 mb-2">
          {article.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <h3 className="text-blue-gray-900 font-semibold text-base leading-snug mb-2">{article.title}</h3>
        <p className="text-blue-gray-600 text-sm leading-relaxed flex-1 mb-4">{article.summary}</p>
        {article.coverage && (
          <p className="text-[11px] italic text-blue-gray-400 mb-3 border-t border-blue-gray-50 pt-3">
            {article.coverage}
          </p>
        )}
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-gray-900 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto"
        >
          Read More <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
}

export default ArticleCard;
