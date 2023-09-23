import React from 'react';
import './App.css';
import {Link} from "react-scroll"

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png" alt="img" />
            </div>
            <ul>
                <li><Link to='home' smooth={true} spy={true}>Home</Link></li>
                <li><Link to='About' smooth={true} spy={true}>About</Link></li>
                <li><Link to='Projects' smooth={true} spy={true}>Projects</Link></li>
                <li><Link to='Skills' smooth={true} spy={true}>Skills</Link></li>
                <li><Link to='Contacts' smooth={true} spy={true}>Contact</Link></li>
            </ul>
            <button>Hire Me</button>

        </div>
    )
}

export default Navbar;