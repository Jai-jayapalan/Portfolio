'use client'
import React, { useRef } from 'react'
import ProjectCard from './ProjectCard'
import { animate, motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio website",
        description: "Project-1 description",
        image: '/images/projects/p1.png',
        tag: ['All', 'Web']
    },
    {
        id: 2,
        title: "React Portfolio website 2",
        description: "Project-2 description",
        image: '/images/projects/p2.png',
        tag: ['All', 'Web']
    },
    {
        id: 3,
        title: "React Portfolio website 3",
        description: "Project-3 description",
        image: '/images/projects/p3.png',
        tag: ['All', 'Web']
    }
]

const cardVar = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1},
}

const ProjectSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  return (
    <section ref={ref}>
        <h2 className='text-4xl font-bold text-white mb-20 text-center'>My projects</h2>
        <ul className='grid gap-8 md:grid-cols-3 md:gap-12'>
            {projectsData.map((project, index)=>(
                <motion.li 
                    variants={cardVar}
                    initial='initial' 
                    animate={isInView ? "animate": "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectSection