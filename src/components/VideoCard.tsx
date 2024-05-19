// VideoCard.tsx

import React from "react";

interface VideoCardProps {
  title: string;
  children: React.ReactNode;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="title">
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
      </div>
      <div className="video-container">{children}</div>
      <style jsx>{`
        .bg-white {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .title {
          flex: 0 0 auto; /* Let the title section grow dynamically */
        }
        .video-container {
          flex: 1; /* Let the video content occupy remaining space */
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default VideoCard;
