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
        <span>Quien soy?</span>
        <h1>Acerca de mi</h1>
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
                    Mi nombre es Juan Herrera, desarrollador web Full Stack enfocado en el front-end y apasionado por el mundo UI.
                    Seguir creciendo a medida que desempeño mis labores en los proyectos, es algo que se me da muy bien; poseo conocimientos en varias tecnologías del Desarrollo Web, las cuales puedo aportar junto a mis habilidades blandas, para lograr el objetivo de desarrollarme profesionalmente en el ámbito de TI. Me encantaría ser parte de tu equipo, si tienes alguna duda o quieres saber más de mi, puedes contactarme a través de mis redes sociales o por un mensaje a traves del formulario de contacto.
                       
                </p>
                {bios.map(bio => {
                    return(
                        <div className='bio' key={bio.id}>
                            <div className='biokey'>{bio.icon} {bio.key}</div>
                            <span className='BioValue'>{bio.value}</span>
                        </div>
                    );
                })}
                <motion.a href="https://drive.google.com/file/d/1Sy5iRhXkfGvAR_Ypv9YccTWD0HnY-eRz/view?usp=sharing" 
                download='' 
                target='_blank'
                whileHover={{ scale: 1.1}}
                transition={{ duration: 0.3 }}
                >
                Descargar CV</motion.a>
            </motion.div>
        </div>
    </motion.div>
    )
}

export default About;