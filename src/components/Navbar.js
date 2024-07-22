import React, { useState } from "react";
import pic from '../assests/garimapic.png';
import { Link } from "react-scroll";
import '../NavItems.css'; // Importing CSS file for styling

function NavItems() {
    const [bars, setBars] = useState(false);
    const navItems = [
      { id: 1, text: "Home", link: "home" },
      { id: 2, text: "About", link: "about" },
      { id: 3, text: "Skills", link: "skills" },
      { id: 4, text: "Projects", link: "projects" },
      { id: 5, text: "Contact", link: "contact" }
    ];
  
    return (
      <div className="nav-container bg-[#071952] text-[#EBF4F6]">
        <div className="nav-content max-w-screen-xl mx-auto flex items-center justify-between p-4">
          <div className="logo-section flex items-center">
            <img src={pic} className="logo w-16 h-16" alt="Garima Singh" />
            <h1 className="title text-2xl font-bold ml-4">
              Garima Singh
            </h1>
          </div>
  
          <ul className="nav-items hidden md:flex flex-grow justify-center text-xl font-bold space-x-16">
            {navItems.map(({ id, text, link }) => (
              <li key={id} className="nav-item">
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="hover:text-[#37B7C3] transition-colors cursor-pointer"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
  
          <div className="hamburger md:hidden">
            <button onClick={() => setBars(!bars)} className="menu-button">
              <svg className="menu-icon w-6 h-6 text-[#EBF4F6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {bars ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
  
        <div className={`${bars ? 'block' : 'hidden'} md:hidden mobile-menu bg-[#071952] text-[#EBF4F6]`}>
          <ul className="mobile-nav-items space-y-4 p-4">
            {navItems.map(({ id, text, link }) => (
              <li key={id} className="mobile-nav-item">
                <Link
                  to={link}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={() => setBars(false)}
                  className="block p-2 hover:bg-[#088395] rounded transition-colors cursor-pointer"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  
  export default NavItems;