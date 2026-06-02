// The Makers Workbench - YouTube video showcase (CLAUDE.md §16).
// Thumbnails are built from the YouTube video id at render time
// (img.youtube.com/vi/{id}/maxresdefault.jpg with an hqdefault fallback),
// so no image uploads or next.config changes are ever needed.

export const CHANNEL_URL = "https://www.youtube.com/c/themakersworkbench";

export const youtubeWatchUrl = (id: string) => `https://youtu.be/${id}`;
export const youtubeThumb = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;
export const youtubeThumbFallback = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

export interface Video {
  id: string;
  title: string;
  category: string;
}

/** Standalone videos in display order (most professionally relevant first, §16). */
export const VIDEOS: Video[] = [
  // 1. Fusion 360 tutorials
  { id: "deg7wop6H7Q", title: "Stop Modeling This in Fusion 360, Import It Instead", category: "Fusion 360" },
  { id: "NkaGSPkg0gU", title: "Nobody Talks About This DXF Export Method in Fusion 360", category: "Fusion 360" },
  { id: "FzWyntAYLHw", title: "You're Exporting DXFs Wrong in Fusion 360 – Do This Instead", category: "Fusion 360" },
  { id: "CxAtffOpu34", title: "3D Design: How To Design Honeycomb Patterns In Fusion 360", category: "Fusion 360" },
  // 2. Tool reviews
  { id: "Xac_cIgMTDo", title: "Tool Review: DrillPro Aluminum Clamping Square (Banggood)", category: "Tool Review" },
  { id: "QbZOnt8zTSc", title: "Tool Review: Veiko Aluminum Angle Positioning T-Square (Banggood)", category: "Tool Review" },
  { id: "MqDXRvOpiU0", title: "Review: Edsyn Soldapullt ZD500DX Desoldering Station", category: "Tool Review" },
  { id: "C75P3AmLs1o", title: "Soldering Station Review: EDSYN Loner 971e", category: "Tool Review" },
  // 3. Raspberry Pi standalone tutorials
  { id: "8oJ8sYYnpsg", title: "Raspberry Pi Basics: How To Expand The File System", category: "Raspberry Pi" },
  { id: "eS-N8NCB9rk", title: "Raspberry Pi SD Card Setup For Beginners", category: "Raspberry Pi" },
  { id: "Vbl0a2V4tLw", title: "Raspberry Pi Basics: Headless Raspberry Pi With Raspberry Pi Imager", category: "Raspberry Pi" },
  { id: "CsNG2YZCc8A", title: 'How To Install or "Burn" Raspbian To SD Card for Raspberry Pi', category: "Raspberry Pi" },
  // 4. Electronics / NodeMCU
  { id: "IHocU-VqsF0", title: "What Is A NodeMCU Anyway?", category: "Electronics" },
  { id: "oZsTO9qaCCE", title: "How To: DIY Home Automation with NodeMCU And Amazon Alexa", category: "Electronics" },
  { id: "t5QEt-vX5Ng", title: "How To: DIY Home Automation With ESP8266 and Amazon Alexa", category: "Electronics" },
  // 5. 3D printing
  { id: "wvGFWIkBClg", title: "3D Printing a Clip-In Hanger For Edsyn Soldapullt Desoldering Pump", category: "3D Printing" },
];

/* ----------------------------------------- Client-commissioned Raspberry Pi series */

export const SERIES_TITLE = "Raspberry Pi Basics: Client Series";
export const SERIES_SUBTITLE =
  "A six-part beginner series produced on commission for a client, with on-camera technical instruction from setup to first project.";
export const SERIES_NOTE = "Client-commissioned beginner series · 6 episodes";

/** The 6-part series, shown as individual cards in its own section (per request). */
export const SERIES_VIDEOS: Video[] = [
  { id: "aswC502juMo", title: "Raspberry Pi Basics: Episode 1", category: "Raspberry Pi Series" },
  { id: "qJ-1TX5pwhs", title: "Raspberry Pi Basics: Episode 2", category: "Raspberry Pi Series" },
  { id: "m1Qgp-RYDbI", title: "Raspberry Pi Basics: Episode 3", category: "Raspberry Pi Series" },
  { id: "JaFAsDvBFBE", title: "Raspberry Pi Basics: Episode 4", category: "Raspberry Pi Series" },
  { id: "Hg65Mdnwoy0", title: "Raspberry Pi Basics: Episode 5", category: "Raspberry Pi Series" },
  { id: "nR17W_1Onh4", title: "Raspberry Pi Basics: Episode 6", category: "Raspberry Pi Series" },
];
