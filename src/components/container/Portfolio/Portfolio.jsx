import React from 'react'
import './Portfolio.scss'
import { workImages } from '../../../Data'
import {FiGithub, FiEye} from "react-icons/fi";
import { motion } from 'framer-motion'

const Portfolio = () => {
    return <div className='container' id='portfolio'>
        <div className="title">
            <span>My Work</span>
            <h1>Awesome Projects</h1>
        </div>
        <div className="workImages">
        {workImages.map((workImages) => {
          return (
            <div className="workImage"
             key={workImages.id}
            >
              <img src={workImages.img} alt="workImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiGithub />
                </motion.a>
                  
                <motion.a href='#'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiEye />
                </motion.a>
              </motion.div>
            </div>
          )
        })}
      </div>
    </div>
}

export default Portfolio