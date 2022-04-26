import React from 'react';
import './App.css';
import {SuperSlideMe, Level} from "react-super-slide-me";

const testLevel: Level = {
  boardSize: 5,
  number: 1,
  elements: [
    {type: "Start", posX: 0, posY: 1},
    {type: "End", posX: 1, posY: 1},
  ]
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SuperSlideMe
          levels={[testLevel]}
          gameName="Gierka!"
          width="500px"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
