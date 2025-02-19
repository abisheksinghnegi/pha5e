import React, { useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    navbar.style.top = '0';
  
    let lastScrollTop = 0;
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollTop > lastScrollTop) {
        navbar.style.top = '-80px';
      } else {
        navbar.style.top = '0';
      }
      lastScrollTop = scrollTop;
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <nav className="navbar">
      <h1 className="logo">PHA5E</h1>
      <div className="navbar-container">
        <ul className="navbar-links">
          <li className="navbar-link">Our vision</li>
          <li className="navbar-link">Our team</li>
          <li className="navbar-link">Our project</li>
          <li className="navbar-link">Contact us</li>
          <li className="navbar-link">FR/EN</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
