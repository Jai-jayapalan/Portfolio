'use client'

import React, { useTransition, useState, startTransition } from 'react'
import Image from 'next/image'
import TabBtn from './TabBtn'

const TAB_CONTENT = [
    {
        title: "Skills",
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>MERN STACK</li>
                <li>Python</li>
                <li>Java</li>
                <li>Django</li>
                <li>NextJS</li>
                <li>Git & Github</li>
            </ul>
        )
    },
    {
        title: "Educations",
        id: 'educations',
        content: (
            <ul className='list-disc pl-2'>
                <li>B.E in Saveetha Engineering College - {<span>8.56 CGPA</span>}</li>
                <li>12th in Adhiyaman hr sec school - {<span>79.6%</span>}</li>
                <li>10th in SeventhDay Adventist hr sec school - {<span>89.4%</span>}</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Guvi Certified Python Developer</li>
                <li>MindLuster Certified MERN Developer</li>
                <li>Great Learning Certfied Java Developer</li>
                <li>Guvi Certified JavaScript Developer</li>
                <li>Camplian certified Web development - 3months</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id)
        })
    }

    return (
        <section className='text-white border-white lg:mb-20 lg:mt-20' id="about">
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    alt='summa'
                    src={'/images/Abt.jpg'}
                    width={500}
                    height={500}
                />
                <div
                 className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-400 font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        A motivated individual with in-depth knowledge of languages and development tools, seeking a position in a growthoriented company where I can use my skills to the advantage of the company while having the scope to develop my own skills.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabBtn
                            selectTab={()=>{handleTabChange("skills")}}
                            active={tab == "skills"}
                        >
                            {" "}
                            Skills{" "}
                        </TabBtn>
                        <TabBtn
                            selectTab={()=>{handleTabChange("educations")}}
                            active={tab == "educations"}
                        >
                            {" "}
                            Education{" "}
                        </TabBtn>
                        <TabBtn
                            selectTab={()=>{handleTabChange("certifications")}}
                            active={tab == "certifications"}
                        >
                            {" "}
                            Certification{" "}
                        </TabBtn>
                    </div>
                    <div className='mt-8'>
                        {TAB_CONTENT.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection