import React from 'react';
import './Home.scss'
import portfolio from '../../../assets/portfolio.jpg';
import { motion } from 'framer-motion';

const Home = () => {
    return (
     <div className='container home' id='home'>
        <div className='home__profile'>
            <img src={portfolio}/>
        </div>
        <div className='home__profile-text'>
            <h3 className='profile-text__name'>
                Hi, I'm <span>Juan Herrera</span>
            </h3>
            <span className='job'>Web Developer</span>
            <span className='text'>
            Passionate <br />
            to craft innovate <br />
            web products.
            </span>
            <motion.a href='contact'
            download='' 
            whileHover={{ scale: 1.1}}
            transition={{ duration: 0.3 }}
            >
            connect with me
            </motion.a>
                <div className='web'>Web Developer</div>
                <div className='ui'>UI Passionate</div>
                <div className='freelance'>Freelancer</div>
        </div>
     </div>
    );
}

export default Home