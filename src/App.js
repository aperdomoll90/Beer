import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [beers, setBeers] = useState(null);
  const [type, setType] = useState('ale');

  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${type}`)
      .then((response) => response.json())
      .then((data) => setBeers(data))
      .catch((err) => console.log(err));
  }, [type]);

  return (
    <>
      <h2> Beer list here</h2>
      <button onClick={() => setType('ale')}>ale</button>
      <button onClick={() => setType('stouts')}>stouts</button>
      <button onClick={() => setType('red-ale')}>red-ale</button>
      {!beers ? (
        <p>Pouring...</p>
      ) : (
        beers.map((beer) => {
          return (
            <>
              <p>{beer.name}</p>
              <p>{beer.price}</p>
             
            </>
          );
        })
      )}
    </>
  );
}

export default App;
