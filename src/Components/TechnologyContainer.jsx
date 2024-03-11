// TechnologyContainer.jsx
import React from 'react';
import { Technology } from './Technology';
import data from '../data.json';

export function TechnologyContainer() {
    return (
        <div className="technology-background">
            {data.technology.map((technology, index) => (
                <Technology key={index} technology={technology} />
            ))}
        </div>
    );
}
