import React from 'react'
import { EXPERIENCES } from '../constants'
import {motion} from 'framer-motion'

const Experience = () => {
  return (
    <div className='pb-4'>
        <motion.h2
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:1.5}}
        className='my-20 text-center text-4xl'>Experience</motion.h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center gap-20'>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:-100}}
                    transition={{duration:1}}
                    classname="w-full lg:w-1/4 ">
                    <p className='mb-2 text-sm text-stone-400'>
                        {experience.year}
                    </p>
                    </motion.div>
                    <motion.div
                    whileInView={{opacity:1, x:0}}
                    initial={{opacity:0, x:100}}
                    transition={{duration:1}}
                    className='w-full max-w-xl lg:w-3/4 '>
                    <h3 className='mb-2 font-semibold'>
                        {experience.role} -{" "}
                        <span className='text-sm text-stone-500'>
                            {experience.company}
                        </span>

                    </h3>
                    <p className='mb-4 text-stone-400 '>{experience.description}</p>
                    {experience.technologies.map((tech, index) => (
                        <span className='mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium
                        text-stone-300'key={index}>{tech}</span>
                    ))}
                    
                    </motion.div>
                </div>
            ))}
        </div>
    <div className="mt-16">
            <motion.h3
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0, y:-100}}
            transition={{duration:1.5}}
            className="text-center text-3xl mb-8">Work Gallery</motion.h3>
            <div className="pt-10 flex flex-wrap justify-center gap-30">
                {/* Example images */}
                <motion.div
                whileInView={{opacity:1, scale: 1.05}}
                initial={{opacity:0, scale:0.95}}
                transition={{duration:1}}
                className="w-1/4">
                    <img src="../public/flipkart.jpg" alt="Project 1" className="rounded-lg shadow-lg"/>
                     <p className="mt-2 text-center text-sm text-stone-500">At Flipkart Warehouse</p>
                </motion.div>
                <motion.div
                whileInView={{opacity:1, scale: 1.05}}
                initial={{opacity:0, scale:0.95}}
                transition={{duration:1}}
                className="w-1/4">
                    <img src="../public/ieee.png" alt="Project 2" className="rounded-lg shadow-lg"/>
                     <p className="mt-2 text-center text-sm text-stone-500">IEEE Quiz</p>
                </motion.div>
                
            </div>
        </div>
    </div>
  )
}

export default Experience