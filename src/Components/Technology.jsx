// Technology.jsx
import React from 'react';
import './Technology.css';

// // Import all destination images
import douglasPng from '../assets/technology/image-launch-vehicle-portrait.jpg';
import markPng from '../assets/technology/image-spaceport-portrait.jpg';
import victorPng from '../assets/technology/image-space-capsule-portrait.jpg';

// // Create a mapping from destination names to the imported images
const technologyImages = {
    "Launch vehicle": douglasPng,
    "Spaceport": markPng,
    "Space capsule": victorPng,
};

export function Technology({ technology }) {
    // Get the correct image based on the destination name
    const technologyImage = technologyImages[technology.name];

    return (
        <section className="technology-item">
            <h1><span>03</span> Space lauNch 101</h1>
            <div className="container">
                <div className="left">
                    <div className="numbers">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </div>
                    <div className="techno-infos"><span>The terminology ...</span>
                        <h3>{technology.name}</h3>
                        <p className='technology-description'>{technology.description}</p></div>
                </div>
                <div className="right">
                    <img src={technologyImage} alt={technology.name + " image"} />
                </div>
            </div>
        </section>
    );
}
