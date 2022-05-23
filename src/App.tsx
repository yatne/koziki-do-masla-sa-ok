// @ts-nocheck
import React, { useState} from 'react';
import './App.css';
import {SuperSlideMe} from "react-super-slide-me";

function App() {
  const [endReached, setEndReached] = useState(false)

  return (
    <div className="App">
      <header className="App-header">
        <div className="game-container">
          <SuperSlideMe
            width="500px"
            onLastLevelReached={() => setEndReached(true)}
          />
        </div>
        {endReached && (
          <iframe
            width="520"
            height="360"
            src="https://www.youtube.com/embed/dhIFBWxSt6E?autoplay=1"
            allow='autoplay'
          />
        )}
      </header>
    </div>
  );
}

export default App;
