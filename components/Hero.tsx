"use client";
import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { SparklesPreview } from './ui/SparklesPreview';
import { TextAnimate } from "@/components/magicui/text-animate";
import MagicButton from './MagicButton';
import { FcServices } from "react-icons/fc";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative pb-20 pt-36 overflow-hidden">
      {/* ✅ Background Grid Image */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/bg.jpg"
          alt="grid"
          fill
          className="object-cover opacity-70"
          priority
          sizes="100vw"
        />
      </div>

      {/* ✅ Spotlights */}
      <Spotlight className="-top-40 -left-10 md:left-32 md:-top-20 h-screen" fill="pink" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

      {/* ✅ Heading */}
      <TextAnimate
        animation="slideLeft"
        duration={1.2}
        className="relative z-20 text-4xl font-extrabold text-fuchsia-700 text-center"
      >
        Transform Your Imagination Into Reality
      </TextAnimate>

      {/* ✅ Sparkles and Button */}
      <div className="relative z-20 flex justify-center my-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <SparklesPreview />

          <div className="mt-5">
            <a href="#about">
              <MagicButton
                icon={<FcServices className="text-2xl" />}
                title="Explore Our Work"
                position="right"
                otherClasses="px-10 py-4 text-lg"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
