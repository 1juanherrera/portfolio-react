import React from 'react';
import './Navbar.scss';
import { navLinks, socialIcons } from '../../Data'


const Navbar = () => {
    return(
        <div className='header'>
            <div className='header__nav-container'>
                <div className='header__logo'>
                    <h3>JH</h3>
                </div>
                <ul className='header__nav-links'>
                    {navLinks.map(( navLink, index) => {
                        return ( 
                        <li key={index}>
                            <a href={`${navLink}`}>{navLink}</a>
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
            </div>
        </div>
    )
}

export default Navbar;