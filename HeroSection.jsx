'use client'

import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

const HeroSection = () => {

    const handleClick = () => {
        window.open('https://drive.google.com/file/d/1msteVSXKFzqczMMGHI_Ub5CeCUz2O6Dx/view?usp=sharing', '_blank')
    }
    
  return (
    <section className='lg:mb-20 lg:mt-20'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <motion.div 
                initial={{ opacity: 0 }}
                animate= {{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className='col-span-7 place-self-center lg:text-center sm:text-left'>
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                <span className='text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-400'>Hello, I'm {" "}</span>
                <br />
                <TypeAnimation
                    sequence={[
                        'Jai',
                        1000,
                        'Web Developer',
                        1000,
                    ]}
                    wrapper='span'
                    speed={50}
                    repeat={Infinity}
                />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
                    Aspiring web developer with a passion for creating dynamic and responsive websites. 
                    Eager to leverage my skills in HTML, CSS, JavaScript, and modern frameworks to build 
                    user-friendly web applications. Committed to continuous learning and contributing to 
                    innovative projects.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <button className="px-10 py-4 w-full sm:w-fit rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                    </button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
                        onClick={handleClick}
                    >
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-lg px-5 py-3">
                        Download CV
                        </span>
                    </button>
                </div>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, scale:0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 4}}
                className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="flex justify-center sm:justify-center relative lg:-right-20">
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[420px] lg:h-[420px] relative flex justify-center items-center">
                        <Image
                        src="/images/Dev-boy.png"
                        width={500}
                        height={300}
                        className="w-full h-auto max-w-[90%] max-h-[90%]"
                        alt="hero-img"
                        />
                    </div>
                </div>
            </motion.div>
        </div>
    </section>
  )
}

export default HeroSection