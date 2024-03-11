// Crew.jsx
import React from 'react';
import './Crew.css';

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

export function Crew({ crew }) {
    // Get the correct image based on the destination name
    const crewImage = crewImages[crew.name];

    return (
        <section className="crew-item">
            <h1><span>02</span> Meet your crew</h1>
            <div className="container">
                <div className="left">
                    <h2>{crew.role}</h2>
                    <h3>{crew.name}</h3>
                    <p className='crew-description'>{crew.bio}</p>
                    <div className="buttons">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>
                </div>
                <div className="right">
                    <img src={crewImage} alt={crew.name + " image"} />
                </div>
            </div>
        </section>
    );
}
