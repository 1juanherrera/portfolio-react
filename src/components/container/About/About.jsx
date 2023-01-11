import React from 'react';
import './_About.scss'
import { bios } from '../../../Data';
import portfolio from '../../../assets/portfolio.jpg'
import { motion } from 'framer-motion';

const About = () => {
    return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{y: [-50, 0], opacity: 1}}
    className='container about' id='about'>
        <div className='title'>
        <span>Who Am I?</span>
        <h1>About Me</h1>
        </div>
        <div className="about_container">
            <motion.div 
            initial={{x: 0, opacity: 0}}
            whileInView={{x: [-250, 0], opacity: 1}}
            transition={{duration: 1}}
            className="about_left">
                <img src={portfolio} alt="about-img" />
            </motion.div>
            <motion.div
            initial={{x: 0, opacity: 0}}
            whileInView={{x: [250, 0], opacity: 1}}
            transition={{duration: 1}}
            className="about_right">
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae nesciunt excepturi enim dolor quos neque eaque laudantium minus recusandae expedita est porro corrupti sunt repellendus, magni hic iure iste saepe?
                </p>
                {bios.map(bio => {
                    return(
                        <div className='bio' key={bio.id}>
                            <span className='biokey'>{bio.icon} {bio.key}</span>
                            <span className='BioValue'>{bio.value}</span>
                        </div>
                    );
                })}
                <motion.a href="#" 
                download='' 
                whileHover={{ scale: 1.1}}
                transition={{ duration: 0.3 }}
                >
                Download CV</motion.a>
            </motion.div>
        </div>
    </motion.div>
    )
}

export default About;