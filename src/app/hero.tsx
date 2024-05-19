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
          <Typography variant="h5" className="text-3xl" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
            Charles J Gantt
          </Typography>
          <a href="https://www.linkedin.com/in/charles-gantt-b5aa8351/" target="_blank" rel="noopener noreferrer">
          <Button color="gray" className="w-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>Linkedin</Button>
          </a>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              3k+
              </Typography>
            <Typography className="!text-gray-500 font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Posts
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              15k
            </Typography>
            <Typography className="!text-gray-500 font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Followers
            </Typography>
          </div>
          <div className="flex items-center gap-2 mt-3">
            <Typography className="!text-gray-900 font-bold" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              1-Mil+
              </Typography>
            <Typography className="!text-gray-500 font-normal" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              Views
            </Typography>
          </div>
        </div>
        <div className="container mx-auto px-8 sm:px-0 h-auto md:h-full">
        <Typography
          variant="lead"
          className="text-gray-500 mt-8"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          I'm a seasoned Content Creator, Freelance Writer, and Drupal Developer with 15+ years of experience. Specializing in Drupal site building and electronics projects, I excel in managing multiple tasks and staying updated on industry trends. Let's connect and discuss how I can contribute to your projects.
        </Typography>
      </div>
       </div>
    </header>
  );
}
export default Hero;
