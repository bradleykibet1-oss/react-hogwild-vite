import React, { useState } from 'react';
import hogData from './porker_data.js'; // Make sure path matches your file structure
import HogList from './HogList';
import NewHogForm from './NewHogForm';

function App() {
  const [hogs, setHogs] = useState(hogData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('name'); // 'name' or 'weight'

  // Filter logic
  const filteredHogs = hogs.filter((hog) => {
    if (showGreasedOnly) return hog.greased === true;
    return true;
  });

  // Sort logic
  const sortedHogs = [...filteredHogs].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    else return a.weight - b.weight;
  });

  // Callback to add a new hog
  const addNewHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  return (
    <div className="App">
      <div className="ui container">
        <h1>Hog Farm</h1>
        
        {/* Form to add new hogs */}
        <NewHogForm onAddHog={addNewHog} />

        {/* Filter and Sort Controls */}
        <div className="ui grid container">
          <button onClick={() => setShowGreasedOnly(!showGreasedOnly)}>
            {showGreasedOnly ? "Show All" : "Show Greased Only"}
          </button>

          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Sort by Name</option>
            <option value="weight">Sort by Weight</option>
          </select>
        </div>
        
        {/* THE IMPORTANT TEST PART: Pass sorted/filtered data to HogList */}
        <HogList hogs={sortedHogs} />
      </div>
    </div>
  );
}

export default App;
