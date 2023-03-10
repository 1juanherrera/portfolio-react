import React from 'react'
import './_Portfolio.scss'
import { workImages } from '../../../Data'
import {FiGithub, FiEye} from "react-icons/fi";
import { motion } from 'framer-motion'

const Portfolio = () => {
    return <div className='container' id='portfolio'>
        < motion.div
        initial={{x: 0, opacity: 0}}
        whileInView={{y: [50, 0], opacity: 1}}
        transition={{duration: 1}}
        className="title">
            <span>Mi trabajo</span>
            <h1>Mis proyectos</h1>
        </motion.div>
        <motion.div
        initial={{x: 0, opacity: 0}}
        whileInView={{x: [-250, 0], opacity: 1}}
        transition={{duration: 1}}
        className="workImages">
        {workImages.map((workImages) => {
          return (
            <div className="workImage"
             key={workImages.id}
            >
              <p>{workImages.name}</p>
              <img src={workImages.img} alt="workImg" />
              <motion.div
                initial={{opacity: 0}}
                whileHover={{ opacity: [0, 1] }}
                transition={{duration: 0.3 , ease: "easeInOut"}}
                className='hoverLayer'
              >
                <motion.a href={workImages.gitHub}
                target='_blank'
                whileInView={{scale: [0,1]}}
                 whileHover={{scale: [1, 1.1]}}
                 transition={{duration: 0.3}}
                >
                  <FiGithub />
                </motion.a>
                  
                <motion.a href={workImages.visit}
                target='_blank'
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
      </motion.div>
    </div>
}

export default Portfolio