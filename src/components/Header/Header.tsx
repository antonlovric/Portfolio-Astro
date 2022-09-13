import { useRef } from 'react';
import './Header.scss';
interface INavLink {
    name: string;
    href: string;
}

const Header = () => {
    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const mobileMenu = useRef(null);

    const menuHandler = () => {
        mobileMenu.current.classList.toggle('hidden');
    };

    return (
        <header>
            <img height={100} src='src\assets\logo.png' alt='' />
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
                        <a key={link.name} href={link.href}>
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;
