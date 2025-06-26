"use client"
import React from 'react'
import { services } from '@/data'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import RollingGallery from '@/components/bits/roll'

const Services = () => {
  return (
    <section id='services' className='py-20 w-full '>
      <TextHoverEffect 
        text='Services'
        automatic={false}
        duration={4}
        className='w-full h-full'
      />
      <RollingGallery 
      images={services.map(service=>({
        url:service.thumbnail,
        title:service.title
      }))}
      autoplay={true}
      />
      
    </section>
  )
}

export default Services
