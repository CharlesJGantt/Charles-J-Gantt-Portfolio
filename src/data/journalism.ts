// Selected earlier tech-journalism bylines from the old site (TweakTown staff
// writer + Element14 community content). Bait/fishing posts intentionally omitted.
// Thumbnails are the original local images in /public/image/blogs.

export interface JournalismPost {
  publication: "TweakTown" | "Element14";
  title: string;
  desc: string;
  url: string;
  img: string;
}

export const JOURNALISM: JournalismPost[] = [
  // --- TweakTown (staff technology writer) ---
  {
    publication: "TweakTown",
    title: "SanDisk Launches Four New Enterprise SATA SSDs",
    desc: "SanDisk announces four new enterprise-grade SATA SSDs (CloudSpeed Extreme, Ultra, Ascend, and Eco), promising optimal performance for mixed-use enterprise applications.",
    url: "https://www.tweaktown.com/news/36670/sandisk-announces-the-launch-of-four-new-enterprise-sata-ssds/index.html",
    img: "/image/blogs/blog-6.png",
  },
  {
    publication: "TweakTown",
    title: "The Raspberry Pi Compute Module: A New Form Factor",
    desc: "The Raspberry Pi Foundation introduces a new way to use your Pi with the Compute Module, adopting the SO-DIMM form factor seen in many modern laptops' DDR2 and DDR3 RAM.",
    url: "https://www.tweaktown.com/news/36852/the-new-raspberry-pi-is-here-and-it-s-not-what-anyone-expected/index.html",
    img: "/image/blogs/blog-7.png",
  },
  {
    publication: "TweakTown",
    title: "Punchtec Ord Bot Hadron 3D Printer Review",
    desc: "In testing, the Punchtec Ord Bot Hadron impressed with exceptional print and construction quality, ranking among the best 3D printers I've reviewed.",
    url: "https://www.tweaktown.com/reviews/6261/punchtec-ord-bot-hadron-3d-printer-review/index.html",
    img: "/image/blogs/blog-8.png",
  },
  {
    publication: "TweakTown",
    title: "Airwolf 3D Launches Its First JRx Hot-End",
    desc: "Airwolf 3D debuts its first-of-a-kind JRx Hot-End for 3D printers, enabling printing in engineering-grade materials like polycarbonate, Bridge Nylon, and Nylon 645.",
    url: "https://www.tweaktown.com/news/37222/airwolf-3d-launches-first-hot-end-for-polycarbonate-and-nylon-printing/index.html",
    img: "/image/blogs/blog-9.png",
  },
  {
    publication: "TweakTown",
    title: "Hands-On With the TinyDuino & TinyLily",
    desc: "TinyCircuits' TinyDuino and TinyLily development systems flip the bulky dev-board standard on its head. A hands-on, in-depth look at these tiny boards.",
    url: "https://www.tweaktown.com/articles/6065/hands-on-with-the-tinyduino-and-tinylily-systems-from-tinycircuits/index.html",
    img: "/image/blogs/blog-10.png",
  },
  {
    publication: "TweakTown",
    title: "Project M.A.R.V.: Multi-Rotor Aerial Reconnaissance Vehicle",
    desc: "With multi-rotor helicopters getting a bad rap, I decided to see what the big deal was, building my own multi-rotor to show they can be used for more than controversy.",
    url: "https://www.tweaktown.com/articles/6257/project-m-a-r-v-the-multi-rotor-aerial-reconnaissance-vehicle-part-1/index.html",
    img: "/image/blogs/blog-11.png",
  },
  {
    publication: "TweakTown",
    title: "Project ATAAPR: Arduino-Powered Autonomous Rover",
    desc: "Creating a youth-friendly robot, ATAAPR integrates the Dagu Magician chassis and Arduino for STEM education, a tutorial series building and coding it from scratch.",
    url: "https://www.tweaktown.com/articles/6176/project-ataapr-andy-the-autonomous-arduino-powered-rover-part-1/index.html",
    img: "/image/blogs/blog-12.png",
  },
  // --- Element14 (community content & tutorials) ---
  {
    publication: "Element14",
    title: "BeagleBone Black News Reader Using Drupal",
    desc: "When the BeagleBone Black released, I was among the first to receive one. After initial disappointment with Angstrom Linux, I transitioned to Debian and explored Drupal installation.",
    url: "https://community.element14.com/products/devtools/single-board-computers/next-genbeaglebone/b/blog/posts/beaglebone-black-news-reader-using-drupal",
    img: "/image/blogs/blog-13.png",
  },
  {
    publication: "Element14",
    title: "Controlling BeagleBone Black GPIO From the Web With Drupal",
    desc: "Continuing the previous tutorial, I use Debian and Drupal to stand up a site that manages the BeagleBone Black and enables GPIO control via PHP executing bash scripts.",
    url: "https://community.element14.com/products/devtools/single-board-computers/next-genbeaglebone/b/blog/posts/controlling-the-beaglebone-black-s-gpio-pins-from-the-web-using-drupal",
    img: "/image/blogs/blog-14.png",
  },
  {
    publication: "Element14",
    title: "Arduino-Powered Realistic Flickering Lantern",
    desc: "A unique lighting concept using WS2812B LED modules and the FastLED library, covering variable incrementation and colorPalette usage in this illuminating tutorial.",
    url: "https://community.element14.com/products/arduino/arduino-projects/b/blog/posts/arduino-powered-multi-color-realistic-flickering-lantern",
    img: "/image/blogs/blog-15.png",
  },
  {
    publication: "Element14",
    title: "How To Identify Which Raspberry Pi Model You Have",
    desc: "Element14 offers many Raspberry Pi versions that look alike, posing a challenge for newcomers. This article clarifies the differences to help readers identify their boards.",
    url: "https://community.element14.com/products/raspberry-pi/b/blog/posts/how-to-identify-which-model-of-the-raspberry-pi-you-have",
    img: "/image/blogs/blog-16.png",
  },
  {
    publication: "Element14",
    title: "Flexing Organic Semiconductors Improves Electrical Flow",
    desc: "Rutgers University researchers unveil an approach to enhance semiconductor performance, crucial as transistors near theoretical limits and Moore's law diminishes.",
    url: "https://community.element14.com/technologies/embedded/b/blog/posts/flexing-organic-semiconductors-improves-electrical-flow",
    img: "/image/blogs/blog-17.png",
  },
  {
    publication: "Element14",
    title: "Nanoscale Hydrogen-Powered Batteries for Integrated Circuits",
    desc: "MIT researchers aim to revolutionize battery technology by integrating nanoscale hydrogen-fueled batteries into every transistor within integrated circuits.",
    url: "https://community.element14.com/technologies/power-management/b/blog/posts/mit-researchers-working-to-develop-nanoscale-batteries-powered-by-hydrogen",
    img: "/image/blogs/blog-18.png",
  },
];
