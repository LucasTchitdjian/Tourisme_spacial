import './Header.css';
import { useState } from 'react';

export function Header() {

    const [activeMenu, setActiveMenu] = useState('HOME');

    const [hamburgerMenu, setHamburgerMenu] = useState(false);

    const handleHamburgerMenu = () => {
        setHamburgerMenu(!hamburgerMenu);
    }

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
        let selector = '';
        switch (menuId) {
            case 'HOME':
                selector = '.hero';
                break;
            case 'DESTINATION':
                selector = '.destination-item';
                break;
            case 'CREW':
                selector = '.crew-item';
                break;
            case 'TECHNOLOGY':
                selector = '.technology-item';
                break;
            default:
                selector = '';
        }
        if (selector) {
            scrollToSection(selector);
        }
    };

    const scrollToSection = (selector) => {
        const section = document.querySelector(selector);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <header className={hamburgerMenu ? 'hamburger-open' : ''}>
            <div className="logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g></svg>
            </div>
            <div className="menu">
                <ul>
                    <li className={activeMenu === 'HOME' ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault(); // Empêche l'action par défaut
                            handleMenuClick('HOME');
                        }}>
                        <span>00</span> HOME
                    </li>
                    <li className={activeMenu === 'DESTINATION' ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick('DESTINATION');
                        }}>
                        <span>01</span> DESTINATION
                    </li>
                    <li className={activeMenu === 'CREW' ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick('CREW');
                        }}>
                        <span>02</span> CREW
                    </li>
                    <li className={activeMenu === 'TECHNOLOGY' ? 'active' : ''}
                        onClick={(e) => {
                            e.preventDefault();
                            handleMenuClick('TECHNOLOGY');
                        }}>
                        <span>03</span> TECHNOLOGY
                    </li>
                </ul>
            </div>
            <div className="hamburger-icon" onClick={handleHamburgerMenu}>
                <ul>
                    <li className='icon'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
                    </li>
                </ul>
            </div>
            <div className="hamburger-menu">
                <div className="container"><li className='hamburger-menu-text'><span>00</span> Home</li>
                    <li className='hamburger-menu-text'><span>01</span> Destination</li>
                    <li className='hamburger-menu-text'><span>02</span> Crew</li>
                    <li className='hamburger-menu-text'><span>03</span> Technology</li></div>
                <li className='icon' onClick={handleHamburgerMenu}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg></li>
            </div>
        </header>
    )
}