// Destination.jsx
import React from 'react';
import './Destination.css';

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

export function Destination({ destination, destinationRef }) {
    // Get the correct image based on the destination name
    const destinationImage = destinationImages[destination.name];

    return (
        <section className="destination-item" ref={destinationRef}>
            <h1><span>01</span> Pick your destination</h1>
            <div className="container">
                <div className="left">
                    {/* Use the dynamically determined image */}
                    <img src={destinationImage} alt={destination.name + " image"} />
                </div>
                <div className="right">
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
