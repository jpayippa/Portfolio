// src/components/SpaceshipLoading.js
import React from 'react';
import spaceship from '../Assets/spaceship.png'; // Ensure you have a spaceship image

const SpaceshipLoading = () => {
    return (
        <div className="spaceship-loading-container">
            <img src={spaceship} alt="Loading..." className="spaceship" />
        </div>
    );
};

export default SpaceshipLoading;
