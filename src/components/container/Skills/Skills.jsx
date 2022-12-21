import React, { useState } from 'react';
import './Skills.scss'
import { icons } from '../../../Data'


const Skills = () => {

    const [ active, setActive ] = useState(1)

    return <div className='container' id='skills'>
        <div className="title">
            <span>What I Expert</span>
            <h1>Skills</h1>
        </div>
        <div className="skills">
            {active === 1 && icons.map((icon, index) => {
                return (
                    <div className='icon' key={index}>
                        {icon}
                    </div>
                )
            })}
        </div>
    </div>
}

export default Skills