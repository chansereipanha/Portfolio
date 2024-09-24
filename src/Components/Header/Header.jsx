import { Link, NavLink }  from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import './header.css';
import React, { useState, useEffect } from 'react';

function Header(){
const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isOpen]);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <div className="logo"><Link to='/Home'>Pan <span className="logo-portfolio">Portfolio</span></Link></div>
                    <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
                        <RxHamburgerMenu 
                            size="30px"
                            color="#EAB308"
                        />
                    </div>

                    <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
                        <div className='link_page'>
                            <li><NavLink to='/Home'>Home</NavLink></li>
                            <li><NavLink to='/Project'>Project</NavLink></li>
                            <li><NavLink to='/AboutMe'>About Me</NavLink></li>
                            <li><NavLink to='/Contact'>Contact</NavLink></li>
                        </div>


                        <div className='contact_header'>
                            <div className='contactDetail_header'>
                                <h1>Contact Detail</h1>
                                <ul>
                                    <li>(027) 6468-679</li>
                                    <li>(026) 7982-054</li>
                                    <li>sereipanhachanpersonal@gmail.com</li>
                                </ul>
                            </div>

                            <div className="socialMedia_menu">
                                <ul>
                                    <li><a href="https://github.com/"><i class="fa-brands fa-square-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/"><i class="fa-brands fa-linkedin"></i></a></li>
                                    <li><a href="https://www.whatsapp.com/"> <i class="fa-brands fa-whatsapp"></i></a></li>
                                    <li><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook"></i></a></li>
                                </ul>
                            </div>
                            <div className="terms_menu">
                                <ul>
                                    <li>Terms of Service</li>
                                    <li>&copy; {new Date().getFullYear()} Copyright</li>
                                    <li>Privacy Policy</li>
                                </ul>
                            </div>
                        </div>
                    </ul>
                </div>
            </nav>
            {isOpen && (
                <>
                    <div className="overlay" onClick={closeMenu}></div>
                    <div className="close-button" onClick={closeMenu}>
                        <IoClose color=''/>
                    </div>
                </>
            )}
        </>
        
    );
};

export default Header;
