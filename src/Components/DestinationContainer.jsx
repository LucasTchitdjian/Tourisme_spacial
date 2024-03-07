// DestinationsContainer.jsx
import React from 'react';
import { Destination } from './Destination';
import data from '../data.json';

export function DestinationsContainer() {
    return (
        <div className="destinations-background">
            {data.destinations.map((dest, index) => (
                <Destination key={index} destination={dest} />
            ))}
        </div>
    );
}
