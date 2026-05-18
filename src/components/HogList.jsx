import React from 'react';
import HogCard from './HogCard';

function HogList({ hogs }) {
  return (
    <div className="ui grid container">
      {hogs.map((hog, index) => (
        <HogCard key={index} hog={hog} />
      ))}
    </div>
  );
}

export default HogList;
