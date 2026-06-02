import { Section, SectionHeading } from "@/components/section";
import { VideoCard } from "@/components/video-card";
import { SERIES_VIDEOS, SERIES_TITLE, SERIES_SUBTITLE, SERIES_NOTE } from "@/data/videos";

/**
 * Dedicated section for the 6-part client-commissioned Raspberry Pi series,
 * shown as individual cards so the paid client work isn't buried (per request).
 */
export function ClientSeries() {
  return (
    <Section id="client-series">
      <SectionHeading kicker="Video" title={SERIES_TITLE} subtitle={SERIES_SUBTITLE} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERIES_VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
      <p className="text-sm text-blue-gray-400 italic mt-6">{SERIES_NOTE}</p>
    </Section>
  );
}

export default ClientSeries;
