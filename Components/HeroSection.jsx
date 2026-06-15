import React from 'react'
import Nav from '../Components/Nav'
const HeroSection = () => {
  return (
    <div>
      <Nav/>
    <div className='h-screen w-full '>
      <div className='py-20 px-10  '>
        <h1 className="text-5xl sm:text-4xl md:text-6xl font-serif font-bold text-[#2D2219]">
              Raw Strength.<br />
              <span className="text-[#4A6B53] italic font-normal">Conscious</span> Packaging.
            </h1>
          <p className=" font-semibold sm:text-lg text-[#5A4F43] max-w-xl leading-relaxed">
              Premium, heavy-duty Kraft paper solutions tailored for industrial, retail, and custom packaging. Engineered for maximum durability, crafted for a circular economy.
            </p>
   </div>
   </div>
   </div>
  )
}

export default HeroSection
