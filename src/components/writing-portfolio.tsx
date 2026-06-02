"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/cn";
import { Section, SectionHeading, Tag } from "@/components/section";
import { ArticleCard } from "@/components/article-card";
import { ArticlePlaceholder } from "@/components/article-placeholder";
import { ARTICLE_FILTERS, type Article } from "@/data/articles";

const PAGE_SIZE = 9;

function FeaturedArticle({ article }: { article: Article }) {
  return (
    <a href={article.url} target="_blank" rel="noopener noreferrer" className="group block mb-10">
      <div className="grid md:grid-cols-5 rounded-xl overflow-hidden border border-blue-gray-100 dark:border-blue-gray-800 shadow-md bg-white dark:bg-blue-gray-900">
        <div className="relative md:col-span-3 h-64 md:h-80">
          {article.ogImage ? (
            <Image
              src={article.ogImage}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover"
            />
          ) : (
            <ArticlePlaceholder className="h-full w-full" />
          )}
          <span className="absolute top-4 left-4 bg-blue-gray-900 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
        <div className="md:col-span-2 p-6 sm:p-8 flex flex-col justify-center">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {article.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-blue-gray-900 dark:text-blue-gray-50 mb-3 leading-snug">{article.title}</h3>
          <p className="text-blue-gray-600 dark:text-blue-gray-300 leading-relaxed mb-4">{article.summary}</p>
          <span className="text-blue-gray-900 dark:text-blue-gray-100 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
            Read More <ArrowRightIcon className="w-4 h-4" />
          </span>
        </div>
      </div>
    </a>
  );
}

export function WritingPortfolio({ featured, articles }: { featured?: Article; articles: Article[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = activeFilter === "All" ? articles : articles.filter((a) => a.tags.includes(activeFilter));
  // Unfiltered view paginates; filtered views show all matches (sets are small).
  const displayed = activeFilter === "All" ? filtered.slice(0, visibleCount) : filtered;
  const allLoaded = activeFilter === "All" && visibleCount >= articles.length;

  const handleFilter = (tag: string) => {
    setActiveFilter(tag);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <Section id="writing">
      <SectionHeading
        kicker="Published Writing"
        title="CKEditor Writing"
        subtitle="Published work for CKEditor's official blog and Acquia's developer platform, covering AI, collaboration, security, Drupal, and CMS strategy for developers, content architects, and enterprise buyers."
      />
      <p className="text-xs text-blue-gray-400 italic mb-6 max-w-3xl">
        Research conducted using Perplexity for source triangulation and Claude for draft acceleration. All final
        copy written, edited, and approved to CKEditor&apos;s editorial standard under my byline.
      </p>

      {featured && <FeaturedArticle article={featured} />}

      <div className="flex flex-wrap gap-2 mb-6">
        {ARTICLE_FILTERS.map((tag) => (
          <button
            key={tag}
            onClick={() => handleFilter(tag)}
            className={cn(
              "px-3 py-1 rounded-full text-xs font-medium transition-colors",
              activeFilter === tag
                ? "bg-blue-gray-900 text-white"
                : "bg-blue-gray-50 text-blue-gray-700 hover:bg-blue-gray-100 dark:bg-blue-gray-800 dark:text-blue-gray-200 dark:hover:bg-blue-gray-700"
            )}
          >
            {tag}
          </button>
        ))}
      </div>

      {displayed.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((a) => (
            <ArticleCard key={a.url} article={a} />
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-blue-gray-400 py-8">No articles match that filter.</p>
      )}

      {activeFilter === "All" &&
        (allLoaded ? (
          <p className="text-center text-sm text-blue-gray-400 mt-8">All articles loaded</p>
        ) : (
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="bg-blue-gray-900 text-white uppercase tracking-widest font-bold text-xs py-3 px-8 rounded-lg hover:bg-blue-gray-800 transition-colors"
            >
              Show More Content
            </button>
          </div>
        ))}
    </Section>
  );
}

export default WritingPortfolio;
