'use client';
import React from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import '../app/styles/nav.css';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <div className='nav-container'>
        <div className='navbar'>
           <div className='navbar-logo'>
            <Image src="/logo.jpg" width={80} height={50} alt="logo" />
           </div>
           {/*large screen navbar links */}
           <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
           <h1 data-aos="zoom-in-up">WELCOME TO MY PORTFOLIO</h1>
            <li className='menuLink'><a href="#hero">Home</a></li>
            <li className='menuLink'><a href="#about">About</a></li>
            <li className='menuLink'><a href="#projects">Projects</a></li>
            <li className='menuLink'><a href="#skills">Skills</a></li>
            <li className='menuLink'><a href="#contact">Contact</a></li>
            </ul>
            {/*small screen menu */}
            <div className='mobile-menu' onClick={toggleMenu}>
              {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
        </div>

        {isMenuOpen && (
          <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
            <li className='menuLink'><a href="#hero" onClick={toggleMenu}>Home</a></li>
            <li className='menuLink'><a href="#about" onClick={toggleMenu}>About</a></li>
            <li className='menuLink'><a href="#projects" onClick={toggleMenu}>Projects</a></li>
            <li className='menuLink'><a href="#skills" onClick={toggleMenu}>Skills</a></li>
            <li className='menuLink'><a href="#contact"onClick={toggleMenu}>Contact</a></li>
          </ul>
        )}
    </div>
  )
}

export default Navbar