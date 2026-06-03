"use client";

import { useState } from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Section, SectionHeading } from "@/components/section";
import { VideoCard } from "@/components/video-card";
import { VIDEOS, CHANNEL_URL } from "@/data/videos";

const PAGE_SIZE = 6;

/** The Makers Workbench - standalone video showcase, paginated (CLAUDE.md §16). */
export function MakersWorkbench() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const displayed = VIDEOS.slice(0, visibleCount);
  const allLoaded = visibleCount >= VIDEOS.length;

  return (
    <Section id="videos">
      <SectionHeading
        kicker="Video"
        title="The Makers Workbench"
        subtitle="Fusion 360 tutorials, tool reviews, Raspberry Pi guides, and maker projects."
        action={
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-gray-900 dark:text-blue-gray-100 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all whitespace-nowrap"
          >
            Watch on YouTube <ArrowTopRightOnSquareIcon aria-hidden="true" className="w-4 h-4" />
          </a>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayed.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>

      {allLoaded ? (
        <p className="text-center text-sm text-blue-gray-500 dark:text-blue-gray-400 mt-8">All videos loaded</p>
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

export default MakersWorkbench;
