import React, { useRef, useState } from 'react';
import './Header.scss';

interface INavLink {
  name: string;
  href: string;
}

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const mobileMenu = useRef<HTMLDivElement>(null);

  const menuHandler = () => {
    mobileMenu.current?.classList.toggle('hidden');
  };

  const handleLinkClick = () => menuHandler();

  return (
    <header>
      <img height={100} src='/assets/logo.webp' alt='' />
      <div className='nav-links'>
        <nav className='nav-links__desktop'>
          {navLinks.map((link: INavLink) => (
            <a key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
        <div className='hamburger' onClick={menuHandler}>
          <div className='line'></div>
          <div className='line'></div>
          <div className='line'></div>
        </div>
        <nav ref={mobileMenu} className='nav-links__mobile hidden'>
          {navLinks.map((link: INavLink) => (
            <a onClick={handleLinkClick} key={link.name} href={link.href}>
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
