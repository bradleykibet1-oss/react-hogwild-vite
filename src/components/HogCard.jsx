import React, { useState } from 'react';

function HogCard({ hog }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isHidden, setIsHidden] = useState(false); // For the "Hog" status 

  // Hide the card entirely
  if (isHidden) return null;

  return (
    // *** REQUIRED BY TESTS: <article class="hog-tile"> ***
    <article className="hog-tile">
      <h3>{hog.name}</h3>
      <img src={hog.image} alt={hog.name} />
      
      {/* Button to toggle details */}
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>

      {/* Conditionally render details */}
      {showDetails && (
        <div className="details">
          <p><strong>Specialty:</strong> {hog.specialty}</p>
          <p><strong>Weight:</strong> {hog.weight}</p>
          <p><strong>Greased:</strong> {hog.greased ? "Yes" : "No"}</p>
          <p><strong>Medal:</strong> {hog["highest medal achieved"]}</p>
        </div>
      )}

      {/* Hide the specific hog button */}
      <button onClick={() => setIsHidden(true)}>Hide</button>
    </article>
  );
}

export default HogCard;
