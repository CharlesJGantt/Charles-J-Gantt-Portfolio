"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";


function Hero() {
  return (
    <header className="bg-gray-900 mb-96">
      <div className="container mx-auto px-8 h-[22rem] lg:px-48 translate-y-64">
        <Image
          width={1024}
          height={1024}
          alt="avatar"
          src="/image/avatar1.jpg"
          className="w-40 rounded-xl"
        />
        <div className="flex mt-16 justify-between">
          <Typography variant="h5" className="text-3xl">
            Charles J Gantt
          </Typography>
          <a href="https://www.linkedin.com/in/charles-gantt-b5aa8351/" target="_blank" rel="noopener noreferrer">
          <Button color="gray" className="w-auto">Linkedin</Button>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">3k+</Typography>
            <Typography className="!text-gray-500 font-normal">
              Posts
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">15k</Typography>
            <Typography className="!text-gray-500 font-normal">
              Followers
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">1-Mil+</Typography>
            <Typography className="!text-gray-500 font-normal">
              Views
            </Typography>
          </div>
        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8">
          I&apos;m a seasoned Content Creator, Freelance Writer, and Drupal Developer with 15+ years of experience. Specializing in Drupal site building and electronics projects, I excel in managing multiple tasks and staying updated on industry trends. Let&apos;s connect and discuss how I can contribute to your projects.
        </Typography>
       </div>
    </header>
  );
}
export default Hero;
