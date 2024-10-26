'use client'; // Ensure it's a client-side component

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProfileImage from '@/components/ProfileImage';

const AboutPage = () => {
    // Animation variants for the skill cards (entering with scale and rotation)
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8, rotate: -10 },
        visible: (index: number) => ({
            opacity: 1,
            scale: 1,
            rotate: 0,
            transition: {
                duration: 0.7,
                delay: index * 0.1,  // Staggered delay based on index for a smooth flow
                ease: [0.43, 0.13, 0.23, 0.96],  // Smooth custom easing curve
            },
        }),
        hover: {
            scale: 1.1,  // Slight scaling up on hover
            rotate: 5,   // Rotate on hover for a 3D effect
            transition: { duration: 0.3 },
        },
    };

    return (
        <div className="about-container">
            <h1 className='mt-1 mb-10 rounded-sm bg-amber-400 -rotate-3 mx-auto text-center'>About Me</h1>
            <section className="hero-section">
                <h1 className='font-bold text-white mb-10'>Hi, I’m Hiruni</h1>
                
                <h2 className='font-semibold text-white'>UI/UX Enthusiast & IT Undergraduate</h2>
                <p className='text-white'>
                    I'm a second-year IT undergraduate at the University of Sri Jayewardenepura, specializing in UI/UX design. 
                    My journey in design began with a fascination for creating user-centered experiences that blend functionality with aesthetics. 
                    I believe in the power of design to solve real-world problems and enhance everyday life.
                </p>
            </section>


            <section className="skills">
                <h2 className='mt-8 font-bold text-2xl mb-10'>Skills & Expertise</h2>
                <div className="skill-icons">
                    {[
                        { name: 'Java', icon: '/public/images/java.png' },
                        { name: 'Figma', icon: '/public/images/figma.png' },
                        { name: 'Node.js', icon: '/public/images/node.png' },
                        { name: 'Python', icon: '/public/images/python.png' },
                        { name: 'React', icon: '/public/images/react.png' },
                        { name: 'TypeScript', icon: '/public/images/typescript.png' },
                        { name: 'Tailwind CSS', icon: '/public/images/css.png' },  // Update the path
                        { name: 'JavaScript', icon: '/public/images/js.png' },  // Update the path
                        { name: 'Visual Studio', icon: '/public/images/vs.png' },  // Update the path
                        { name: 'Postgresql', icon: '/public/images/sql.png' },  // Update the path
                    ].map((skill, index) => (
                        <motion.div
                            className="skill"
                            key={index}
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            whileHover="hover"
                            variants={cardVariants}
                        >
                            <motion.p>{skill.name}</motion.p>
                            <motion.img src={skill.icon} alt={skill.name} />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="philosophy">
                <blockquote>"Good design is about making things usable and delightful."</blockquote>
                <p>
                    My approach focuses on minimalism, accessibility, and sustainability, ensuring that designs are not only beautiful but also functional and user-friendly.
                </p>
            </section>


            <section className="contact">
                <h3 className='font-semibold text-2xl'>Connect with Me</h3>
                <p>
                    I'm always eager to connect and explore new opportunities! Feel free to reach out via <a href="hirunikaushalyaindrajith@gmail.com">email</a> or <a href="https://www.linkedin.com/in/hiruni-kaushalya-indrajith-446688311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LinkedIn</a>.
                </p>
                <p>© 2024 All rights reserved by Hiruni Kaushalya.</p>
            </section>
        </div>
    );
};

export default AboutPage;
