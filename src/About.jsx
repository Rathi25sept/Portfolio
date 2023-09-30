import React from 'react';
import './App.css';
import photo from './myImg/photo.png';

function About() {
    return (
        <div className='about' id='About'>
            <div className='aboutbox'>
                <div className='heading'>
                    <h1>I'm Fronted Developer <br />Saloni Rathi</h1>
                </div>
                <div className='para'>Hii My Name is Saloni Rathi. I am a Fronted Devoloper and I am very passionate and dedicate to my work. I work with HTML, CSS, JavaScript and React. I spend my time on my projects and learning more about HTML, CSS, JavaScript and React. I specialize in JavaScript, React, HTML5, CSS, REST APIs, Git, advanced JavaScript concepts, Redux, and responsive web design.</div>
                <div className='spanbox'><a href="#"><span>Hire Me</span></a></div>
            </div>
            <div className='imgBox'>
                <img src={photo} alt="" />
            </div>
        </div>
    )
}

export default About;

