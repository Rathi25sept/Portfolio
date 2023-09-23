import React from 'react';
import './App.css';
import formImg from './myImg/formImg.png';
import tableImg from './myImg/tableImg.png';
import zeptoImg from './myImg/zeptoImg.png';

const projectData = [
    {
        id: 1,
        name: "Form-Validation",
        imgUrl: formImg,
        text: "A Multi Step form that displays entered details when filled out.",
    },
    {
        id: 2,
        name: "Zepto-Clone",
        imgUrl: zeptoImg,
        text: "A website with rendering based on search and cart functionality.",
    },
    {
        id: 3,
        name: "Grid-Table",
        imgUrl: tableImg,
        text: "A table with CRUD functionality, sorting, and pagination.",
    },
]


function Projects() {

    const renderData = projectData.map(function(item){
        return <div className ='project'>
            <img style={{ width: 240, height: 200}} src = {item.imgUrl} alt="" />
            <h2> {item.name} </h2>
            <p> {item.text} </p>
            <div className='demoBtn'>
                <a href="#"><button>Github</button></a>
                <a href="#"><button>Demo</button></a>
            </div>
        </div>
    })

    return (
        <div className='projects' id='Projects'>
            <div className='myProject'>
                <h1>My Projects</h1>
                <p>Hello I'am Web Developer. My Projects are...</p>
                <div className='myDiv'></div>
            </div>
            <div className='projectsBox'>{renderData}</div>
        </div>
    )
}

export default Projects;