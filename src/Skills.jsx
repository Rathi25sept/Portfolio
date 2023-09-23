import React from 'react';
import './App.css';

const skillsData = [
    {
        img: "https://dineshrout.netlify.app/icons/html.svg",
        name: "HTML"
    },
    {
        img: "https://dineshrout.netlify.app/icons/css.svg",
        name: "CSS"
    },
    {
        img: "https://dineshrout.netlify.app/icons/javascript.svg",
        name: "JavaScript"
    },
    {
        img: "https://dineshrout.netlify.app/icons/redux.svg",
        name: "React"
    },
    {
        img: "https://dineshrout.netlify.app/icons/react.svg",
        name: "Redux"
    },
    {
        img: "https://dineshrout.netlify.app/icons/git.svg",
        name: "Git"
    },
    {
        img: "https://dineshrout.netlify.app/icons/github.svg",
        name: "GitHub"
    },
]

function Skills() {

    const renderData = skillsData.map(function(item){
        return <div>
            <img style={{ width: 70}} src = {item.img} />
            <h3>{item.name}</h3>
        </div>
    })


    return (
        <div className='skills' id='Skills'>

            <div className='skillImg'>{renderData}</div>

            <div className='mySkill'>
                <h1>My Skill</h1>
                <p>Hello I'am Web Developer. My Skills are...</p>
                <div className='myDiv'></div>
            </div>
            
        </div>
    )
}

export default Skills;