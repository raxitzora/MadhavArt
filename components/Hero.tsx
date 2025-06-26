import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { SparklesPreview } from './ui/SparklesPreview'
import { TextAnimate } from "@/components/magicui/text-animate";
import MagicButton from './MagicButton';
import { FcServices } from "react-icons/fc";

const Hero = () => {
  return (

    <section id='home' className='pb-20 pt-36'>
        <div>
          <Spotlight
          className='-top-40 -left-10 md:left-32 md:-top-20 h-screen'
          fill='pink'/>
          <Spotlight
          className='h=[80vh] w-[50vw] top-10 left-full'
          fill='purple'
          />
          <Spotlight 
          className='left-80 top-28 h-[80vh] w-[50vw]'
          fill='blue'
          /> 

        {/*Background Grid*/}
        <div className='w-full absolute inset-0'>
          <img src="bg.jpg" alt="grid" className='opacity-7'/>
        </div>

        </div>

 <TextAnimate animation="slideLeft" className='font-extrabold text-fuchsia-700 flex justify-center items-center text-4xl lg:flex justify-center md:flex justify-center' duration={1.2}>
Transform Your Imagination Into Reality   
 </TextAnimate>
        <div className='flex justify-center relative my-20'>
            <div className='max-w-[89vw] md:max-w-2x lg:max-[60vw] flex flex-col items-center justify-center'>
                <SparklesPreview/>

{/*Magic Button*/}
                <div className='mt-5'>
  <a href="#about">
    <MagicButton 
      icon={<FcServices className="text-2xl" />}
      title='Explore Our Work'
      position='right'
      otherClasses="px-10 py-4 text-lg"
    />
  </a>
</div>


            </div>
        </div>
    </section>

    )
}

export default Hero