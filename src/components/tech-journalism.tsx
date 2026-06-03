"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui";
import { Section, SectionHeading } from "@/components/section";
import { JOURNALISM, type JournalismPost } from "@/data/journalism";

const PAGE_SIZE = 6;

function JournalismCard({ post }: { post: JournalismPost }) {
  return (
    <Card className="overflow-hidden border border-blue-gray-100 dark:border-blue-gray-800 shadow-md rounded-xl flex flex-col">
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="relative block h-48">
        <Image
          src={post.img}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </a>
      <div className="p-4 flex flex-col flex-1">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-gray-500 dark:text-blue-gray-400 mb-1.5">{post.publication}</p>
        <h3 className="text-blue-gray-900 dark:text-blue-gray-50 font-semibold text-base leading-snug mb-2">{post.title}</h3>
        <p className="text-blue-gray-600 dark:text-blue-gray-300 text-base leading-relaxed flex-1 mb-4">{post.desc}</p>
        <a
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-gray-900 dark:text-blue-gray-100 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto"
        >
          Read More <ArrowRightIcon aria-hidden="true" className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
}

/** Earlier tech-journalism bylines (TweakTown + Element14), paginated. */
export function TechJournalism() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const displayed = JOURNALISM.slice(0, visibleCount);
  const allLoaded = visibleCount >= JOURNALISM.length;

  return (
    <Section id="journalism">
      <SectionHeading
        kicker="Earlier Bylines"
        title="Tech Journalism & Tutorials"
        subtitle="Selected hardware reviews, maker builds, and tutorials from my staff-writer and community-content years. A sample of 500+ TweakTown articles and 300+ Element14 tutorials."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((post) => (
          <JournalismCard key={post.url} post={post} />
        ))}
      </div>

      {allLoaded ? (
        <p className="text-center text-sm text-blue-gray-500 dark:text-blue-gray-400 mt-8">All articles loaded</p>
      ) : (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="bg-blue-gray-900 text-white uppercase tracking-widest font-bold text-xs py-3 px-8 rounded-lg hover:bg-blue-gray-800 transition-colors"
          >
            Show More Content
          </button>
        </div>
      )}
    </Section>
  );
}

export default TechJournalism;
