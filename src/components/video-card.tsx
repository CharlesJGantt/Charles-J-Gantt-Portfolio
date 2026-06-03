"use client";

import { PlayIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Card } from "@/components/ui";
import { youtubeWatchUrl, youtubeThumb, youtubeThumbFallback, type Video } from "@/data/videos";

/** Swaps to the always-available hqdefault thumbnail if maxresdefault 404s. */
function handleThumbError(id: string) {
  return (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.dataset.fallback) return; // guard against an error loop
    img.dataset.fallback = "1";
    img.src = youtubeThumbFallback(id);
  };
}

/** Shared YouTube video card (CLAUDE.md §16) - used by the Makers Workbench and client series sections. */
export function VideoCard({ video }: { video: Video }) {
  const url = youtubeWatchUrl(video.id);
  return (
    <Card className="overflow-hidden border border-blue-gray-100 dark:border-blue-gray-800 shadow-md rounded-xl flex flex-col">
      <a href={url} target="_blank" rel="noopener noreferrer" className="relative block">
        {/* eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnails need the onError fallback; next/image is overkill at a fixed h-48 */}
        <img
          src={youtubeThumb(video.id)}
          alt={video.title}
          className="w-full h-48 object-cover"
          onError={handleThumbError(video.id)}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
          <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
            <PlayIcon aria-hidden="true" className="w-7 h-7 text-white ml-1" />
          </div>
        </div>
        <span className="absolute top-3 left-3 bg-blue-gray-900 text-white text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
          {video.category}
        </span>
      </a>
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-blue-gray-900 dark:text-blue-gray-50 font-semibold text-base leading-snug mb-3 flex-1">{video.title}</h3>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-gray-900 dark:text-blue-gray-100 text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all mt-auto"
        >
          Watch Video <ArrowRightIcon aria-hidden="true" className="w-4 h-4" />
        </a>
      </div>
    </Card>
  );
}

export default VideoCard;
