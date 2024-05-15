// latest-blog-posts.tsx

"use client";

import React from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";

const BLOG_POSTS = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Making Baits: Green Pumpkin",
    desc: "Explore the origin of Green Pumpkin in soft plastic baits, pioneered by Zoom Bait's Ed Chambers. Craft your own with our DIY guide using Lureworks colorant for a unique twist.",
    url: "https://www.makingbaits.com/thebaitbook/soft-plastics-recipes/green-pumpkin-happy-accident-became-legend", // URL for the first blog post
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Making Baits: Electric Grape",
    desc: "Craft the ultimate bass lure with our Electric Grape soft plastics recipe. Mix purple with blue glitter for electrifying results in any water. Ideal for anglers seeking vibrant, proven colors.",
    url: "https://www.makingbaits.com/thebaitbook/soft-plastics-recipes/electric-grape-get-amped-electrifying-bass-magnet", // URL for the second blog post
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Making Baits: Carolina Pumpkin",
    desc: "Discover crafting secrets of Carolina Pumpkin soft plastics, beloved for 40+ years. Blend sandy brown, subtle orange, and iconic black flakes for natural bass allure. Ideal for all anglers.",
    url: "https://www.makingbaits.com/thebaitbook/soft-plastics-recipes/carolina-pumpkin-pumpkin-seed-legendary-soft-bait-color-recipe", // URL for the third blog post
  },
  {
    img: "/image/blogs/blog-4.png",
    title: "Making Baits: Decoding Pyrex",
    desc: "Distinguish Borosilicate from Soda-Lime glass in Pyrex measuring cups. Learn their influence on bait making and the Pyrex brand. Essential for quality-conscious anglers and DIY enthusiasts.",
    url: "https://www.makingbaits.com/content/articles/tips/decoding_pyrex", // URL for the fourth blog post
  },
  {
    img: "/image/blogs/blog-5.png",
    title: "Making Baits: The History of Zoom Bait Co.",
    desc: "Explore Zoom Bait Company's journey since 1977, from Watkinsville to iconic lures like the Zoom Worm. Discover its evolution, cherished by generations for affordable baits like the Super Fluke.",
    url: "https://www.makingbaits.com/content/articles/blog/nostalgic-vibes-brief-history-zoom-bait-company", // URL for the fifth blog post
  },
  {
    img: "/image/blogs/blog-6.png",
    title: "TweakTown: Sandisk Launches New SSDs",
    desc: "SanDisk announces four new Enterprise-grade SATA SSDs: CloudSpeed Extreme, Ultra, Ascend, and Eco, promising optimal performance for mixed-use enterprise applications in today's business world.",
    url: "https://www.tweaktown.com/news/36670/sandisk-announces-the-launch-of-four-new-enterprise-sata-ssds/index.html", // URL for the sixth blog post
  },
  {
    img: "/image/blogs/blog-7.png",
    title: "TweakTown: Raspberry Pi's New SBC",
    desc: "The Raspberry Pi Foundation introduces a new way to utilize your Pi with the Compute Module, adopting the popular SO-DIMM form factor seen in many modern laptops' DDR2 and DDR3 RAM.",
    url: "https://www.tweaktown.com/news/36852/the-new-raspberry-pi-is-here-and-it-s-not-what-anyone-expected/index.html", // URL for the seventh blog post
  },
  {
    img: "/image/blogs/blog-8.png",
    title: "TweakTown: Punchtec 3D Printer Review",
    desc: "This article explores the intrIn testing, the Punchtec Ord Bot Hadron impressed with exceptional print and construction quality, ranking among the best 3D printers encountered. ",
    url: "https://www.tweaktown.com/reviews/6261/punchtec-ord-bot-hadron-3d-printer-review/index.html", // URL for the eighth blog post
  },
  {
    img: "/image/blogs/blog-9.png",
    title: "TweakTown: Airwolf 3D's New Hotend",
    desc: "Airwolf 3D debuts its first of a kind, inaugural JRx Hot-End for 3D printers, enabling printing in engineering-grade materials like polycarbonate, Bridge Nylon, and Nylon 645.",
    url: "https://www.tweaktown.com/news/37222/airwolf-3d-launches-first-hot-end-for-polycarbonate-and-nylon-printing/index.html", // URL for the ninth blog post
  },
  {
    img: "/image/blogs/blog-10.png",
    title: "TweakTown:Hands-on with the TinyDuino",
    desc: "TinyCircuits' TinyDuino and TinyLily development systems take the normal bulky development board standard and flip it on its head. Let's take a hands on, in-depth look at these small boards.",
    url: "https://example.com/blog-pohttps://www.tweaktown.com/articles/6065/hands-on-with-the-tinyduino-and-tinylily-systems-from-tinycircuits/index.htmlst-10", // URL for the tenth blog post
  },
  {
    img: "/image/blogs/blog-11.png",
    title: "TweakTown: Project M.A.R.V.",
    desc: "With multi-rotor helicopters getting a bad rap lately, we dicided to see what the big deal is. I create my own multi-rotor to show that they can be used for more than controversy.",
    url: "https://www.tweaktown.com/articles/6257/project-m-a-r-v-the-multi-rotor-aerial-reconnaissance-vehicle-part-1/index.html", // URL for the eleventh blog post
  },
  {
    img: "/image/blogs/blog-12.png",
    title: "TweakTown: Project ATAAPR",
    desc: "Creating a youth-friendly robot, ATAAPR, integrates Dagu Magician Chassis and Arduino for STEM education. This series focuses on a tutorial, building and coding him from scratch.",
    url: "https://www.tweaktown.com/articles/6176/project-ataapr-andy-the-autonomous-arduino-powered-rover-part-1/index.html", // URL for the twelfth blog post
  },
  {
    img: "/image/blogs/blog-13.png",
    title: "Element14: Beagle Bone Black + Drupal",
    desc: "When the BeagleBone Black released, I was among the first to receive one. Despite initial disappointment with Angstrom Linux, I Transitioned to Debian, and explored Drupal installation possibilities.",
    url: "https://community.element14.com/products/devtools/single-board-computers/next-genbeaglebone/b/blog/posts/beaglebone-black-news-reader-using-drupal?", // URL for the thirteenth blog post
  },
  {
    img: "/image/blogs/blog-14.png",
    title: "Element14: BBB + Drupal + GPIO",
    desc: "Continuing from the previous tutorial, I'll delve into using Debian and Drupal to stand up a website to manage BeagleBone Black, and enable GPIO control with PHP executing bash scripts.",
    url: "https://community.element14.com/products/devtools/single-board-computers/next-genbeaglebone/b/blog/posts/controlling-the-beaglebone-black-s-gpio-pins-from-the-web-using-drupal", // URL for the fourteenth blog post
  },
  {
    img: "/image/blogs/blog-15.png",
    title: "Element14: Arduino Flickering Lantern",
    desc: "Delve into my maker journey as I unveil a unique lighting concept using WS2812B LED modules and the fastLED library. Learn variable incrementation and colorPalette utilization in this illuminating tutorial.",
    url: "https://community.element14.com/products/arduino/arduino-projects/b/blog/posts/arduino-powered-multi-color-realistic-flickering-lantern", // URL for the fifteenth blog post
  },
  {
    img: "/image/blogs/blog-16.png",
    title: "Element14: Identify Rasberry Pi SBCs",
    desc: "Element14 offers various Raspberry Pi versions, posing a challenge for newcomers due to similar appearances. This article will clarify differences, aiding readers in identifying their boards and advancing their projects confidently.",
    url: "https://community.element14.com/products/raspberry-pi/b/blog/posts/how-to-identify-which-model-of-the-raspberry-pi-you-have", // URL for the sixteenth blog post
  },
  {
    img: "/image/blogs/blog-17.png",
    title: "Element14: Organic Semiconductors",
    desc: "Rutgers University researchers unveil an innovative approach to enhance semiconductor performance, crucial for advancing electronics as transistors near theoretical limits and Moore’s law diminishes. ",
    url: "https://community.element14.com/technologies/embedded/b/blog/posts/flexing-organic-semiconductors-improves-electrical-flow", // URL for the seventeenth blog post
  },
  {
    img: "/image/blogs/blog-18.png",
    title: "Element14: Nano Hydrogen Batteries",
    desc: "MIT researchers aim to revolutionize battery technology by integrating nanoscale hydrogen-fueled batteries into every transistor within integrated circuits, enhancing efficiency, charging speed, and lifespan.",
    url: "https://community.element14.com/technologies/power-management/b/blog/posts/mit-researchers-working-to-develop-nanoscale-batteries-powered-by-hydrogen", // URL for the eighteenth blog post
  },
];

export function LatestBlogPosts() {
  const [showAll, setShowAll] = React.useState(false); // State to track whether to show all blog posts

  // Function to toggle showAll state
  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  // Determine the number of blog posts to display based on showAll state
  const numToShow = showAll ? BLOG_POSTS.length : 6;

  return (
    <section className="py-8 px-8"> {/* Reduced vertical padding here */}
      <div className="container mx-auto mb-4"> {/* Reduced margin bottom here */}
        <Typography variant="h3" color="blue-gray" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
          Check my latest content
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.slice(0, numToShow).map((blogPost, idx) => (
          <div key={idx}>
            <BlogPostCard {...blogPost} />
            <a
              href={blogPost.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800 mt-2"
            >
              <span className="mr-1">Read More</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
      {!showAll ? (
        <div className="flex justify-center mt-6"> {/* Reduced margin top here */}
          <Button onClick={toggleShowAll} gray-800 size="lg">
            {`Show ${BLOG_POSTS.length - 6} more blog posts`}
          </Button>
        </div>
      ) : (
        <div className="flex justify-center mt-6"> {/* Reduced margin top here */}
          <Button onClick={toggleShowAll} color="rgb(33, 33, 33)" size="lg">
            Show Less
          </Button>
        </div>
      )}
    </section>
  );
}

export default LatestBlogPosts;