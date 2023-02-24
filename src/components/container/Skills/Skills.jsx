import React, { useState } from 'react';
import './_Skills.scss'
import { icons } from '../../../Data'
import { motion } from 'framer-motion'


const Skills = () => {
    return <div
                className='container' id='skills'>
                <motion.div
                initial={{x: 0, opacity: 0}}
                whileInView={{y: [-50, 0], opacity: 1}}
                transition={{duration: 1}}
                className="title">
                    <span>tecnlogias que manejo</span>
                        <h1>Habilidades</h1>
                 </motion.div>
                 <motion.div
                 initial={{x: 0, opacity: 0}}
                 whileInView={{y: [50, 0], opacity: 1}}
                 className="skills">
                    {icons.map((icon, index) => {
                        return (
                            <motion.div
                            initial={{x: 0, opacity: 0}}
                            whileInView={{y: [50, 0], opacity: 1}}
                            transition={{duration: 1}}
                            className='icon' key={index}>
                                {icon}
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
}

export default Skills