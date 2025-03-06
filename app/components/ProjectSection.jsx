'use client'
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { motion, useInView } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "Multiple Disease Detection from MRI Images using CNN",
    des: "A deep learning project that uses Convolutional Neural Networks (CNN) to detect multiple diseases from MRI images. This tool aids in early diagnosis and improves medical decision-making.",
    img: "/images/projects/disease.png",
    iconLists: ["/python.svg", "stm.png"],
    link: "https://github.com/Jai-jayapalan/Multiple_Disease_Detection.git",
  },
  {
    id: 2,
    title: "Image Description Generator",
    des: "An AI-powered application that generates descriptive captions for images using Next.js and Gemini AI. This project showcases the integration of AI with modern web development frameworks.",
    img: "/images/projects/imgdes.png",
    iconLists: ["/next_copy.svg", "/gAI.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/Jai-jayapalan/Image-analyzer.git",
  },
  {
    id: 3,
    title: "Gym Exercise",
    des: "Gym Exercise is a web application built with ReactJS and styled using TailwindCSS, designed to provide a seamless exercise search experience. By integrating the Rapid API (used as fake data), users can search for various exercises with ease. The application features a modern, responsive UI that ensures a smooth browsing experience across all devices.",
    img: "/images/projects/gym.png",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/Jai-jayapalan/gym_website"
  },
  {
    id: 4,
    title: "E-Commerce",
    des: "This project contains authentication and then a cart management system with a search bar, which was created using the MERN stack. It provides a seamless shopping experience with secure user authentication, product search functionality, and efficient cart management.",
    img: "/images/projects/e-commerce.png",
    iconLists: ["/re.svg", "/exp.svg", "/njs.svg", "/mdb.svg"],
    link: "https://github.com/Jai-jayapalan/e-commerce"
  },
  {
    id: 5,
    title: "Image Search",
    des: "A web application built with ReactJS and styled using TailwindCSS that integrates the PinTrust API to enable seamless image search functionality. This project allows users to search for high-quality images efficiently, with a responsive and modern user interface.",
    img: "/images/projects/p3.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/Jai-jayapalan/ImageSearch"
  },
  {
    id: 6,
    title: "Nike E-Commerce Site",
    des: "A fully responsive e-commerce website inspired by Nike, built using React.js and Tailwind CSS. This project demonstrates modern UI/UX design principles and seamless user interactions.",
    img: "/images/projects/p1.PNG",
    iconLists: ["/re.svg", "/tail.svg", "/js.svg"],
    link: "https://github.com/Jai-jayapalan",
  },
];

const cardVar = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1},
}

const ProjectSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  return (
    <section className='lg:mt-34' ref={ref} id='projects'>
        <h2 className='text-4xl text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-400 font-bold mb-20 text-center'>My projects</h2>
        <ul className='grid gap-8 md:grid-cols-3 md:gap-12'>
            {projects.map((project, index)=>(
                <motion.li
                    key={project.id}
                    variants={cardVar}
                    initial='initial' 
                    animate={isInView ? "animate": "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        key={project.id}
                        title={project.title}
                        description={project.des}
                        imgUrl={project.img}
                        iconLists={project.iconLists}
                        link={project.link}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectSection