import React from 'react';
import { socialIcons } from '../../../Data'
import './_Footer.scss'
import { motion } from 'framer-motion'

const Footer = () => {
    return(
        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 2.0}}
        className="footer">
            <div className="copyRight">
                <p>
                    Made by{' '}
                    <span>Juan Herrera</span>
                </p>
            </div>
            <div className="followMe">
                <h4>Follow Me</h4>
                <div className="stick"></div>
                <div className="social_icons">
                    {socialIcons.map((socialIcon, index) => {
                        return <a href={socialIcon.url} key={index}>{socialIcon.icon}</a>
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Footer