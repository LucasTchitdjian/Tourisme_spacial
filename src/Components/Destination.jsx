// Destination.jsx
import React from 'react';
import './Destination.css';
import { useState } from 'react';

// Import all destination images
import moonPng from '../assets/destination/image-moon.png';
import marsPng from '../assets/destination/image-mars.png';
import europaPng from '../assets/destination/image-europa.png';
import titanPng from '../assets/destination/image-titan.png';

// Create a mapping from destination names to the imported images
const destinationImages = {
    "Moon": moonPng,
    "Mars": marsPng,
    "Europa": europaPng,
    "Titan": titanPng,
};

export function Destination({ destination }) {
    // Get the correct image based on the destination name
    const destinationImage = destinationImages[destination.name];

    const [activeMenu, setActiveMenu] = useState('MOON');

    const handleMenuClick = (menuId) => {
        setActiveMenu(menuId);
        let selector = '';
        switch (menuId) {
            case 'MOON':
                selector = '.Moon';
                break;
            case 'MARS':
                selector = '.Mars';
                break;
            case 'EUROPA':
                selector = '.Europa';
                break;
            case 'TITAN':
                selector = '.Titan';
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
        <section className={`${destination.name} destination-item`}>
            <h1><span>01</span> Pick your destination</h1>
            <div className="container">
                <div className="left">
                    {/* Use the dynamically determined image */}
                    <img src={destinationImage} alt={destination.name + " image"} />
                </div>
                <div className="right">
                    <div className="destinations-menu">
                        <ul>
                            <li className={activeMenu === 'MOON' ? 'active' : ''} onClick={() => handleMenuClick('MOON')}><a href="#Moon">Moon</a></li>
                            <li className={activeMenu === 'MARS' ? 'active' : ''} onClick={() => handleMenuClick('MARS')}><a href="#Mars">Mars</a></li>
                            <li className={activeMenu === 'EUROPA' ? 'active' : ''} onClick={() => handleMenuClick('EUROPA')}><a href="#Europa">Europa</a></li>
                            <li className={activeMenu === 'TITAN' ? 'active' : ''} onClick={() => handleMenuClick('TITAN')}><a href="#Titan">Titan</a></li>
                        </ul>
                    </div>
                    <h3>{destination.name}</h3>
                    <p className='destination-description'>{destination.description}</p>
                    <div className='destination-features'>
                        <div className="distance">
                            <p>AVG. Distance</p>
                            <p className='distance-value'>{destination.distance}</p>
                        </div>
                        <div className="travel-time">
                            <p>EST. Travel Time</p>
                            <p className='travel-value'>{destination.travel}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
