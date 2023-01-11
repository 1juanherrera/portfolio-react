import React, { useEffect, useState } from 'react';
import './_Navbar.scss';
import { navLinks, socialIcons } from '../../Data'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'

const Navbar = () => {

    const [ toggle, setToggle ] = useState(false)

    const [ scroll, setScroll ] = useState(false)

    const MenuVariants = {
        hidden: {
            scale: 0
        },
        visible: {
            scale: 50,
            transition: {
                type: 'tween',
                duration: 0.5,
            }
        }
    }

    const navLinkVariants = {
        hidden: {
            display: 'none',
            opacity: 0
        },
        visible: {
            opacity: 1,
            y: -30,
            transition: {
                delay: 0.7,
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 20 )
        })
    },  []);

    return(
        <motion.div
            initial={{y: -25}}
            animate={{y: -5}}
            transition={{duration: 0.5}}
        className={ scroll ? 'header active' : 'header'}>
            <div className='header__nav-container'>
                <div className='header__logo'>
                    <h3>JH</h3>
                </div>
                <ul className='header__nav-links'>
                    {navLinks.map(( navLink, index) => {
                        return ( 
                        <li key={index}>
                            <a href={`#${navLink}`}>{navLink}</a>
                        </li>
                        )
                    })}
                </ul>
                <div className="header__social-icons">
                    {socialIcons.map((socialIcon, index) => {
                        return(
                            <div key={index}>{socialIcon}
                            </div>
                        )
                    })}
                </div>
                <div className='header__menu'>
                    <HiMenuAlt4 onClick={() => {
                        setToggle(true);
                    }}/>
                </div>
                <motion.div className="header__close-menu"
                variants={MenuVariants}
                initial='hidden'
                animate={toggle ? 'visible' : 'hidden'}
                ></motion.div>
                <motion.div className="header__menuX"
                variants={navLinkVariants}
                animate={toggle ? 'visible' : 'hidden'}
                >
                    <HiX onClick={() => {
                        setToggle(false)
                    }}/>
                    {navLinks.map((navLink, index) => {
                        return(
                            <li key={index} onClick={() => {
                                setToggle(false);
                            }}>
                                <a href={`#${navLink}`}>{navLink}</a>
                            </li>
                        )
                    })}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Navbar;