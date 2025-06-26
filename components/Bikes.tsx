"use client";

import React from "react";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";
import { demoBikes } from "@/data/demoBikes";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import Link from "next/link";
import Image from "next/image"; // ✅ Add this at the top


const Bikes = () => {
  return (
    <section id="bikes" className="py-20 px-4 md:px-8 lg:px-16 w-full max-w-screen-2xl mx-auto">
      {/* Heading with effect */}
      <div className="mb-16">
        <TextHoverEffect
          text="Bikes"
          automatic={true}
          duration={4}
          className="w-full h-full"
        />
      </div>

      {/* Grid of bike cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {demoBikes.map((bike, index) => (
          <CardContainer key={index}>
            <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] w-full max-w-sm rounded-xl p-4 border">
              {/* Bike Name */}
              <CardItem
                translateZ={50}
                className="text-2xl font-extrabold text-center text-yellow-400"
              >
                {bike.name}
              </CardItem>

              {/* Bike Image */}
              <CardItem translateZ={100} className="w-full mt-4">
  <div className="relative w-full h-60 rounded-2xl overflow-hidden group-hover/card:shadow-xl transition-shadow duration-300">
    <Image
      src={bike.image}
      alt={bike.name}
      fill
      sizes="(max-width: 768px) 100vw, 33vw"
      className="object-cover rounded-2xl"
    />
  </div>
</CardItem>

            </CardBody>
          </CardContainer>
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center mt-16">
        <Link href="/allbikes">
          <InteractiveHoverButton>Explore All Bikes</InteractiveHoverButton>
        </Link>
      </div>
    </section>
  );
};

export default Bikes;
