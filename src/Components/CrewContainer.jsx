// DestinationsContainer.jsx
import React from 'react';
import { Crew } from './Crew';
import data from '../data.json';

export function CrewContainer() {
    return (
        <div className="crew-background">
            {data.crew.map((crew, index) => (
                <Crew key={index} crew={crew} />
            ))}
        </div>
    );
}
