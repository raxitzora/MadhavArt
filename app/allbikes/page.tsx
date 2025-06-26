"use client";
import React from "react";
import Image from "next/image"; // ✅ Import Next.js Image
import { bikesImages } from "@/data/bikesImages";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const AllBikes = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 py-8 sm:py-10 bg-black">
      <TextHoverEffect
        text={"Bikes"}
        automatic={true}
        duration={4}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center text-white"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {bikesImages.map((bike, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg hover:scale-105 duration-150 ease-in">
              <Image
                src={bike.image}
                alt={bike.name}
                fill
                className="object-contain"
              />
            </div>
            <p className="mt-2 text-center font-extrabold text-2xl text-yellow-500">
              {bike.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBikes;
