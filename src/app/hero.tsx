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
          <Button color="gray">follow</Button>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">3k+</Typography>
            <Typography className="!text-gray-500 font-normal">
              Pieces of Content
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">15k+</Typography>
            <Typography className="!text-gray-500 font-normal">
              Followers
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold">1.4-Million</Typography>
            <Typography className="!text-gray-500 font-normal">
              YouTube Video Views
            </Typography>
          </div>
        </div>
        <Typography variant="lead" className="!text-gray-500 mt-8 text-justify">
        With over 15 years of diverse experience as a Content Creator, Freelance Writer, Drupal Developer, and freelance electrical engineer, I bring a wealth of expertise in technical content creation, web development, and electronics projects. Specializing in Drupal site building and staying updated on industry trends, I excel in managing multiple projects and thrive in fast-paced environments. With a comprehensive background in electronics and YouTube content creation, including design work with Autodesk Fusion 360 and 3D printing, I offer a unique blend of technical proficiency and effective communication skills. Let's connect to discuss how I can contribute to your projects.
        </Typography>
        <Button
          variant="text"
          color="gray"
          className="flex items-center gap-2 mt-2"
        >
          more about me
          <ArrowRightIcon
            strokeWidth={3}
            className="h-3.5 w-3.5 text-gray-900"
          />
        </Button>
      </div>
    </header>
  );
}
export default Hero;
