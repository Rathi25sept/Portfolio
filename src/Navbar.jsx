import React, { useState } from 'react';
import './App.css';
import {Link} from "react-scroll"
import { FaBars, } from "react-icons/fa";

function Navbar() {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
      setShowNavbar(!showNavbar)
    }

    return (
        <div className='navbar'>
            <div className='logo'>
                <img src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png" alt="img" />
            </div>

                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li><Link to='MainContainer' smooth={true} spy={true}>Home</Link></li>
                        <li><Link to='About' smooth={true} spy={true}>About</Link></li>
                        <li><Link to='Projects' smooth={true} spy={true}>Projects</Link></li>
                        <li><Link to='Skills' smooth={true} spy={true}>Skills</Link></li>
                        {/* <span><Link to='Contacts' smooth={true} spy={true}>Contact</Link></span> */}
                    </ul>
                </div>

                <div><button className='contactBtn'><Link to='Contacts' smooth={true} spy={true}>Contact</Link></button></div>

                <div className="menu-icon" onClick={handleShowNavbar}>
                 <FaBars />
                </div>

        </div>
    )
}

export default Navbar;