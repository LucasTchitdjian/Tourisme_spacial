// Crew.jsx
import React from 'react';
import './Crew.css';
import { useState } from 'react';

// // Import all destination images
import douglasPng from '../assets/crew/image-douglas-hurley.png';
import markPng from '../assets/crew/image-mark-shuttleworth.png';
import victorPng from '../assets/crew/image-victor-glover.png';
import anoushehPng from '../assets/crew/image-anousheh-ansari.png';

// // Create a mapping from destination names to the imported images
const crewImages = {
    "Douglas Hurley": douglasPng,
    "Mark Shuttleworth": markPng,
    "Victor Glover": victorPng,
    "Anousheh Ansari": anoushehPng,
};

export function Crew({ crew, crewRef }) {
    // Get the correct image based on the destination name
    const crewImage = crewImages[crew.name];

    const [activeMenu, setActiveMenu] = useState('DOUGLAS HURLEY');

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
        let selector = '';
        switch (menuId) {
            case 'DOUGLAS HURLEY':
                selector = '.Douglas';
                break;
            case 'MARK SHUTTLEWORTH':
                selector = '.Mark';
                break;
            case 'VICTOR GLOVER':
                selector = '.Victor';
                break;
            case 'ANOUSHESH ANSARI':
                selector = '.Anousheh';
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
        <section className={`${crew.name} crew-item`} ref={crewRef}>
            <h1><span>02</span> Meet your crew</h1>
            <div className="container">
                <div className="left">
                    <h2>{crew.role}</h2>
                    <h3>{crew.name}</h3>
                    <p className='crew-description'>{crew.bio}</p>
                    <div className="buttons">
                        <button className={activeMenu} onClick={() => handleMenuClick('DOUGLAS HURLEY')}></button>
                        <button className={activeMenu} onClick={() => handleMenuClick('MARK SHUTTLEWORTH')}></button>
                        <button className={activeMenu} onClick={() => handleMenuClick('VICTOR GLOVER')}></button>
                        <button className={activeMenu} onClick={() => handleMenuClick('ANOUSHESH ANSARI')}></button>
                    </div>
                </div>
                <div className="right">
                    <img src={crewImage} alt={crew.name + " image"} />
                </div>
            </div>
        </section>
    );
}
