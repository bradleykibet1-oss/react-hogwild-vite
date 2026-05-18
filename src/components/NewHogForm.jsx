import React, { useState } from 'react';

function NewHogForm({ onAddHog }) {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  // ... add other states for weight, greased, medal, image

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHog = { name, specialty, weight: parseInt(weight), greased: false, image: imageUrl }; 
    onAddHog(newHog);
    // Clear form
  };

  return (
    <form className="new-hog-form" onSubmit={handleSubmit}>
      {/* IMPORTANT: Make sure to use <label> */}
      <label>
        Hog Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      
      <label>
        Specialty:
        <input type="text" value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
      </label>

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default NewHogForm;
