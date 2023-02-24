import React from 'react';
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import './_Contact.scss';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className="container" id="contact">
      <div className="title">
            <span>ponerse en contacto</span>
            <h1>Contáctame</h1>
      </div>
      <div className="contact_form">
        <motion.div
        initial={{x: 0, opacity: 0}}
        whileInView={{x: [-250, 0], opacity: 1}}
        transition={{duration: 1}}
        className='contact_left_container'>
          <h3>Escríbeme un hola</h3>
          <p className='contact_text'><br /></p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
            return (
              <a href={socialIcon.url} key={index} >
                {socialIcon.icon}
              </a>
            )
          })}
          </div>
        </motion.div>
        <motion.div
        initial={{x: 0, opacity: 0}}
        whileInView={{x: [250, 0], opacity: 1}}
        transition={{duration: 1}}
        className="contact_right">
          <h3>Ponerse en contacto</h3>
          <div className="row">
            <input type="text" placeholder='Nombre' />
            <input type="text" placeholder='Apellido'/>
          </div>
          <div className="row">
            <input type="text" placeholder='Telefono' />
            <input type="email" placeholder='Correo' />
          </div>
          <div className="row">
            <textarea placeholder='Mensaje'></textarea>
          </div>
          <motion.div
            className="btn"
            whileHover={{scale: 1.1}}
            transition={{duration: 0.3}}
            >
            <a href="#">Enviar</a>
          </motion.div>
        </motion.div>
      </div>
    </div>
    )
}

export default Contact