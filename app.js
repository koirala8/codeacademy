import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const title = '';
const background = (
  <img
    className="background"
    alt="ocean"
    src="/images/ocean.jpg"
  />
);
const images = [];
for (const animal in animals) {
  const image = (
    <img
      onClick={displayFact}
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
    />
  );
  images.push(image);
}

// Define the displayFact function before using it
function displayFact(e) {
  const targetElement = e.target.alt; // Use e.target, not e.tagret
  const ranIndex = Math.floor(Math.random() * animals[targetElement].facts.length);
  const funfact = animals[targetElement].facts[ranIndex];
  const p = document.getElementById('fact');
  p.innerHTML = funfact;
}

const animalFacts = (
  <div>
    <h1>{title === '' ? 'Click an animal for a fun fact' : title}</h1>
    {background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

root.render(animalFacts);
