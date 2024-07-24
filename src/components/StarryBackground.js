import React, { useEffect } from 'react';

const createStars = () => {
  const starContainer = document.querySelector('.starry-bg');
  const numberOfStars = 200;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `-${Math.random() * 100}vw`;
    star.style.setProperty('--angle', `${Math.random() * 360}deg`);
    star.style.animationDuration = `${20 + Math.random() * 30}s`; // Random duration between 20s to 50s

    starContainer.appendChild(star);
  }
};

const StarryBackground = () => {
  useEffect(() => {
    createStars();
  }, []);

  return <div className="starry-bg"></div>;
};

export default StarryBackground;
