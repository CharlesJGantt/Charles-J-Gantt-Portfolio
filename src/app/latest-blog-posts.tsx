// latest-blog-posts.tsx

"use client";

import React, { useState } from "react";
import { Typography, Card, CardBody, Button } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import BlogPostCard from "@/components/blog-post-card";
import Image from 'next/image'

const BLOG_POSTS = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Making Baits: Green Pumpkin",
    desc: "Explore the origin of Green Pumpkin in soft plastic baits, pioneered by Zoom Bait's Ed Chambers. Craft your own with our DIY guide using Lureworks colorant for a unique twist.",
    url: "https://www.makingbaits.com/thebaitbook/soft-plastics-recipes/green-pumpkin-happy-accident-became-legend",
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "Making Baits: Electric Grape",
    desc: "Craft the ultimate bass lure with our Electric Grape soft plastics recipe. Mix purple with blue glitter for electrifying results in any water. Ideal for anglers seeking vibrant, proven colors.",
    url: "https://www.makingbaits.com/thebaitbook/soft-plastics-recipes/electric-grape-get-amped-electrifying-bass-magnet",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Making Baits: Carolina Pumpkin",
    desc: "Discover crafting secrets of Carolina Pumpkin soft plastics, beloved for 40+ years. Blend sandy brown, subtle orange, and iconic black flakes for natural bass allure. Ideal for all anglers.",
    url: "https://www.makingbaits.com/thebaitbook/soft-plastics-recipes/carolina-pumpkin-pumpkin-seed-legendary-soft-bait-color-recipe",
  },
  {
    img: "/image/blogs/blog-4.png",
    title: "Making Baits: Decoding Pyrex",
    desc: "Distinguish Borosilicate from Soda-Lime glass in Pyrex measuring cups. Learn their influence on bait making and the Pyrex brand. Essential for quality-conscious anglers and DIY enthusiasts.",
    url: "https://www.makingbaits.com/content/articles/tips/decoding_pyrex",
  },
  {
    img: "/image/blogs/blog-5.png",
    title: "Making Baits: The History of Zoom Bait Co.",
    desc: "Explore Zoom Bait Company's journey since 1977, from Watkinsville to iconic lures like the Zoom Worm. Discover its evolution, cherished by generations for affordable baits like the Super Fluke.",
    url: "https://www.makingbaits.com/content/articles/blog/nostalgic-vibes-brief-history-zoom-bait-company",
  },
  {
    img: "/image/blogs/blog-6.png",
    title: "TweakTown: Sandisk Launches New SSDs",
    desc: "SanDisk announces four new Enterprise-grade SATA SSDs: CloudSpeed Extreme, Ultra, Ascend, and Eco, promising optimal performance for mixed-use enterprise applications in today's business world.",
    url: "https://www.tweaktown.com/news/36670/sandisk-announces-the-launch-of-four-new-enterprise-sata-ssds/index.html",
  },
  {
    img: "/image/blogs/blog-7.png",
    title: "TweakTown: Raspberry Pi's New SBC",
    desc: "The Raspberry Pi Foundation introduces a new way to utilize your Pi with the Compute Module, adopting the popular SO-DIMM form factor seen in many modern laptops' DDR2 and DDR3 RAM.",
    url: "https://www.tweaktown.com/news/36852/the-new-raspberry-pi-is-here-and-it-s-not-what-anyone-expected/index.html",
  },
  {
    img: "/image/blogs/blog-8.png",
    title: "TweakTown: Punchtec 3D Printer Review",
    desc: "This article explores the intrIn testing, the Punchtec Ord Bot Hadron impressed with exceptional print and construction quality, ranking among the best 3D printers encountered.",
    url: "https://www.tweaktown.com/reviews/6261/punchtec-ord-bot-hadron-3d-printer-review/index.html",
  },
  {
    img: "/image/blogs/blog-9.png",
    title: "TweakTown: Airwolf 3D's New Hotend",
    desc: "Airwolf 3D debuts its first of a kind, inaugural JRx Hot-End for 3D printers, enabling printing in engineering-grade materials like polycarbonate, Bridge Nylon, and Nylon 645.",
    url: "https://www.tweaktown.com/news/37222/airwolf-3d-launches-first-hot-end-for-polycarbonate-and-nylon-printing/index.html",
  },
  {
    img: "/image/blogs/blog-10.png",
    title: "TweakTown:Hands-on with the TinyDuino",
    desc: "TinyCircuits' TinyDuino and TinyLily development systems take the normal bulky development board standard and flip it on its head. Let's take a hands on, in-depth look at these small boards.",
    url: "https://example.com/blog-pohttps://www.tweaktown.com/articles/6065/hands-on-with-the-tinyduino-and-tinylily-systems-from-tinycircuits/index.htmlst-10",
  },
  {
    img: "/image/blogs/blog-11.png",
    title: "TweakTown: Project M.A.R.V.",
    desc: "With multi-rotor helicopters getting a bad rap lately, we dicided to see what the big deal is. I create my own multi-rotor to show that they can be used for more than controversy.",
    url: "https://www.tweaktown.com/articles/6257/project-m-a-r-v-the-multi-rotor-aerial-reconnaissance-vehicle-part-1/index.html",
  },
  {
    img: "/image/blogs/blog-12.png",
    title: "TweakTown: Project ATAAPR",
    desc: "Creating a youth-friendly robot, ATAAPR, integrates Dagu Magician Chassis and Arduino for STEM education. This series focuses on a tutorial, building and coding him from scratch.",
    url: "https://www.tweaktown.com/articles/6176/project-ataapr-andy-the-autonomous-arduino-powered-rover-part-1/index.html",
  },
  {
    img: "/image/blogs/blog-13.png",
    title: "Element14: Beagle Bone Black + Drupal",
    desc: "When the BeagleBone Black released, I was among the first to receive one. Despite initial disappointment with Angstrom Linux, I Transitioned to Debian, and explored Drupal installation possibilities.",
    url: "https://community.element14.com/products/devtools/single-board-computers/next-genbeaglebone/b/blog/posts/beaglebone-black-news-reader-using-drupal?",
  },
  {
    img: "/image/blogs/blog-14.png",
    title: "Element14: BBB + Drupal + GPIO",
    desc: "Continuing from the previous tutorial, I'll delve into using Debian and Drupal to stand up a website to manage BeagleBone Black, and enable GPIO control with PHP executing bash scripts.",
    url: "https://community.element14.com/products/devtools/single-board-computers/next-genbeaglebone/b/blog/posts/controlling-the-beaglebone-black-s-gpio-pins-from-the-web-using-drupal",
  },
  {
    img: "/image/blogs/blog-15.png",
    title: "Element14: Arduino Flickering Lantern",
    desc: "Delve into my maker journey as I unveil a unique lighting concept using WS2812B LED modules and the fastLED library. Learn variable incrementation and colorPalette utilization in this illuminating tutorial.",
    url: "https://community.element14.com/products/arduino/arduino-projects/b/blog/posts/arduino-powered-multi-color-realistic-flickering-lantern",
  },
  {
    img: "/image/blogs/blog-16.png",
    title: "Element14: Identify Rasberry Pi SBCs",
    desc: "Element14 offers various Raspberry Pi versions, posing a challenge for newcomers due to similar appearances. This article will clarify differences, aiding readers in identifying their boards and advancing their projects confidently.",
    url: "https://community.element14.com/products/raspberry-pi/b/blog/posts/how-to-identify-which-model-of-the-raspberry-pi-you-have",
  },
  {
    img: "/image/blogs/blog-17.png",
    title: "Element14: Organic Semiconductors",
    desc: "Rutgers University researchers unveil an innovative approach to enhance semiconductor performance, crucial for advancing electronics as transistors near theoretical limits and Moore’s law diminishes.",
    url: "https://community.element14.com/technologies/embedded/b/blog/posts/flexing-organic-semiconductors-improves-electrical-flow",
  },
  {
    img: "/image/blogs/blog-18.png",
    title: "Element14: Nano Hydrogen Batteries",
    desc: "MIT researchers aim to revolutionize battery technology by integrating nanoscale hydrogen-fueled batteries into every transistor within integrated circuits, enhancing efficiency, charging speed, and lifespan.",
    url: "https://community.element14.com/technologies/power-management/b/blog/posts/mit-researchers-working-to-develop-nanoscale-batteries-powered-by-hydrogen",
  },
];

const VIDEO_POSTS = [
  {
    img: "/image/blogs/blog-19.png",
    title: "What Is A NodeMCU Anyway?",
    desc: "So what is a NodeMCU anyway?. This is the first video in a new series I am doing on the NodeMCU and how it can be used in various IoT applications.",
    url: "https://youtu.be/IHocU-VqsF0",
  },
  {
    img: "/image/blogs/blog-20.png",
    title: "DIY Home Automation With NodeMCU",
    desc: "Welcome back to another installment of The Workbench. In this video how to automate lights and outlets using a NodeMCU, 4-Channel Relay Board, and a 20x4 I2C Character LCD in conjunction with Amazon Alexa.",
    url: "https://youtu.be/oZsTO9qaCCE",
  },
  {
    img: "/image/blogs/blog-21.png",
    title: "DIY Home Automation With ESP8266",
    desc: "Welcome back to another installment of The Makers Workbench. In this video, I describe how I control a LinkNode R4 ESP8266 4-Channel Relay Board With Amazon Alexa, and demo the final results.",
    url: "https://youtu.be/t5QEt-vX5Ng",
  },
  {
    img: "/image/blogs/blog-35.png",
    title: "The Secret Chartreuse Pepper Recipe",
    desc: "Dive into the vibrant world of bait making with our latest video",
    url: "https://youtu.be/upIjbhrAyFY",
  },
  {
    img: "/image/blogs/blog-36.png",
    title: "Carolina Pumpkin: A Legendary Soft Bait Color Recipe",
    desc: "Step into the timeless tradition of bait making with our latest tutorial, 'Mastering Carolina Pumpkin.",
    url: "https://youtu.be/OkSfdMA6rr8",
  },
  {
    img: "/image/blogs/blog-37.png",
    title: "Electric Grape: Get Amped with This Bait Recipe",
    desc: "Dive into the electrifying world of bait making with our newest video, 'Electric Grape: Get Amped with This Electrifying Bass Magnet!",
    url: "https://youtu.be/53GPB80l9EU",
  },
  {
    img: "/image/blogs/blog-38.png",
    title: "Green Pumpkin: A Happy Accident!",
    desc: "Uncover the secrets of crafting the perfect Green Pumpkin soft plastic baits in our latest video, 'Green Pumpkin Magic!",
    url: "https://youtu.be/JNEJxLyDmgE",
  },
  {
    img: "/image/blogs/blog-22.png",
    title: "Raspberry Pi SD Card Setup For Beginner",
    desc: "In this video, I show you how to use Raspberry Pi Imager to install Raspberry Pi OS / Raspbian onto a microSD card in less than 5-minutes.",
    url: "https://youtu.be/eS-N8NCB9rk",
  },
  {
    img: "/image/blogs/blog-23.png",
    title: "Design Honeycomb Patterns In Fusion 360",
    desc: "This video will teach you how to design honeycomb patterns in the sketch panel in Autodesk Fusion 360.",
    url: "https://youtu.be/CxAtffOpu34",
  },
  {
    img: "/image/blogs/blog-24.png",
    title: "QuadHands Bench Mount Review",
    desc: "Are These The Best Helping Hands on Amazon? The kind people over at Alphidia sent us one of their QuadHands Workbench Mount third hand soldering helper for review",
    url: "https://youtu.be/MAHOTCn4_vI",
  },
  {
    img: "/image/blogs/blog-25.png",
    title: "Expand The File System On A Raspberry Pi",
    desc: "In this video, I show you how to expand the file system on a Raspberry Pi that is running Raspberry Pi OS / Raspbian.",
    url: "https://youtu.be/8oJ8sYYnpsg",
  },
  {
    img: "/image/blogs/blog-26.png",
    title: "Review: Veiko Aluminum Angle T-Square",
    desc: "In this video, I review the VEIKO Aluminum Alloy 300mm Angle Positioning T-Square from Banggood.com.",
    url: "https://youtu.be/QbZOnt8zTSc",
  },
  {
    img: "/image/blogs/blog-27.png",
    title: "Headless Raspberry Pi",
    desc: "Welcome back to another installment of The Workbench. In this video, I teach you how to use Raspberry Pi Imager to install Raspberry Pi OS LITE (Headless) onto an SD card in less than 5-minutes.",
    url: "https://youtu.be/Vbl0a2V4tLw",
  },
  {
    img: "/image/blogs/blog-28.png",
    title: "Review: DrillPro Aluminum Clamping Square",
    desc: "In this tool review video, I take an in-depth look at the Drillpro Woodworking Precision Clamping Square 2-piece set from Banggood.com.",
    url: "https://youtu.be/Xac_cIgMTDo",
  },
  {
    img: "/image/blogs/blog-29.png",
    title: "Hands On: PCDuino4 Nano Overview",
    desc: "Welcome back to another installment of The Makers Workbench. In this video I give a hands on overview of the PCDuino4 Nano Single Board Computer.",
    url: "https://youtu.be/DjmDNIkYeQM",
  },
  {
    img: "/image/blogs/blog-30.png",
    title: "Review: EDSYN Loner 971e",
    desc: "This is the first video in a series of Soldering Station Review by Charles. In this video he takes a look at the Edsyn Loner 971e, a high-performance soldering station made right here in the USA",
    url: "https://youtu.be/C75P3AmLs1o",
  },
  {
    img: "/image/blogs/blog-31.png",
    title: "Review: Edsyn Soldapullt ZD500DX",
    desc: "This is the second video in a series of soldering equipment reviews by Charles. In this video he takes a look at the Edsyn Soldapullt ZD500DX, a self-contained, hot-tip desoldering station made right here in the USA!",
    url: "https://youtu.be/MqDXRvOpiU0",
  },
  {
    img: "/image/blogs/blog-32.png",
    title: "3D Printing A Hanger For The Soldapullt",
    desc: "In this video, Charles designs and 3D prints a clip-in style hanger for Edsyn Soldapullt Deluxe Desoldering Pump.",
    url: "https://youtu.be/wvGFWIkBClg",
  },
  {
    img: "/image/blogs/blog-33.png",
    title: "Use NirCMD To Change Default Audio Device",
    desc: "I'm using a program called NirCMD to help automate the process. You can find a link to the NirCMD webpage I use in this video, below. Also included below is the single line command I use in the bash script.",
    url: "https://youtu.be/NR6JvdsRbCg",
  },
  {
    img: "/image/blogs/blog-34.png",
    title: "Building a Benchtop Power Supply",
    desc: "In this episode we will be building a benchtop power supply that is capable of handling up to 650w of juice to power all of the projects that might come across out workbench.",
    url: "https://youtu.be/M7gI1URan3E",
  },
  {
    img: "/image/blogs/blog-39.png",
    title: "Review: Geko E100 Dash Cam",
    desc: "Welcome back to another installment of TheMakersWorkbench Reviews. In this episode we take a look at the Geko E100 Dashcam, A budget friendly offering that boast high-end features.",
    url: "https://youtu.be/zMmmDkRNS-w",
  },
];

const generateCardContent = (posts: Array<any>, numToShow: number, isBlog: boolean) => {
  return posts.slice(0, numToShow).map((post: any, idx: number) => {
    return (
      <div key={idx} className="h-full">
        <Card
          className="shadow-lg rounded-lg h-full"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <a href={post.url} target="_blank" rel="noopener noreferrer">
            <Image
              src={post.img}
              alt={post.title}
              width={600}
              height={300}
              className={`w-full h-48 object-cover rounded-lg cursor-pointer ${isBlog ? 'rounded-t-lg' : ''}`}
            />
          </a>
          <CardBody
            className="h-full"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <Typography
              variant="h5"
              color="blue-gray"
              className="font-bold"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {post.title}
            </Typography>
            <Typography
              color="gray"
              className={`mt-2 overflow-hidden ${isBlog ? '' : 'line-clamp-3'}`}
              style={{ maxHeight: isBlog ? "6em" : "3em" }}
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              {post.desc}
            </Typography>
            <a
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-600 hover:text-gray-800 mt-2"
            >
              <span className="mr-1">{isBlog ? "Read More" : "Watch Video"}</span>
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </CardBody>
        </Card>
      </div>
    );
  });
};

export function LatestBlogPosts() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  const toggleShowAllBlogs = () => {
    setShowAllBlogs(!showAllBlogs);
  };

  const toggleShowAllVideos = () => {
    setShowAllVideos(!showAllVideos);
  };

  const numToShowBlogs = showAllBlogs ? BLOG_POSTS.length : 6;
  const numToShowVideos = showAllVideos ? VIDEO_POSTS.length : 6;

  return (
      <section className="blog-top py-8 px-8">
        {/* Blog Posts Section */}
        <div className="container mx-auto mb-4">
          <Typography
              variant="h3"
              color="blue-gray"
              placeholder="" // Add a placeholder prop if needed
              onPointerEnterCapture={() => {}} // Add default event handlers if needed
              onPointerLeaveCapture={() => {}} // Add default event handlers if needed
          >
            Check Out My Content
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {generateCardContent(BLOG_POSTS, numToShowBlogs, true)}
        </div>
        {!showAllBlogs ? (
            <div className="flex justify-center mt-6">
              <Button
                  onClick={toggleShowAllBlogs}
                  color="gray"
                  // variant="link"
                  size="lg"
                  ripple={true} // Changed to boolean
                  placeholder="" // Add a placeholder prop if needed
                  onPointerEnterCapture={() => {}} // Add default event handlers if needed
                  onPointerLeaveCapture={() => {}} // Add default event handlers if needed
              >
                Show More Content
              </Button>
            </div>
        ) : (
            <div className="flex justify-center mt-6">
              <Button
                  onClick={toggleShowAllBlogs}
                  color="gray"
                  // variant="link"
                  size="lg"
                  ripple={true} // Changed to boolean
                  placeholder="" // Add a placeholder prop if needed
                  onPointerEnterCapture={() => {}} // Add default event handlers if needed
                  onPointerLeaveCapture={() => {}} // Add default event handlers if needed
              >
                Show Less Content
              </Button>
            </div>
        )}

        {/* Video Posts Section */}
        <div className="container mx-auto mt-12">
          <Typography
              variant="h3"
              color="blue-gray"
              placeholder="" // Add a placeholder prop if needed
              onPointerEnterCapture={() => {}} // Add default event handlers if needed
              onPointerLeaveCapture={() => {}} // Add default event handlers if needed
          >
            Check Out My Videos
          </Typography>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {generateCardContent(VIDEO_POSTS, numToShowVideos, false)}
        </div>
        {!showAllVideos ? (
            <div className="flex justify-center mt-6">
              <Button
                  onClick={toggleShowAllVideos}
                  color="gray"
                  // variant="link"
                  size="lg"
                  ripple={true} // Changed to boolean
                  placeholder="" // Add a placeholder prop if needed
                  onPointerEnterCapture={() => {}} // Add default event handlers if needed
                  onPointerLeaveCapture={() => {}} // Add default event handlers if needed
              >
                Show More Videos
              </Button>
            </div>
        ) : (
            <div className="flex justify-center mt-6">
              <Button
                  onClick={toggleShowAllVideos}
                  color="gray"
                  // variant="link"
                  size="lg"
                  ripple={true} // Changed to boolean
                  placeholder="" // Add a placeholder prop if needed
                  onPointerEnterCapture={() => {}} // Add default event handlers if needed
                  onPointerLeaveCapture={() => {}} // Add default event handlers if needed
              >
                Show Less Videos
              </Button>
            </div>
        )}
      </section>
  );
}

export default LatestBlogPosts;