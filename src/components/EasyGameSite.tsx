import {SuperSlideMe} from 'react-super-slide-me';
import React, {useState} from "react";

const EasyGameSite = () => {
  const [endReached, setEndReached] = useState(false)

  return (
    <header className="App-header">
      <div className="game-container">
        Easy Game:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelFilter:"onlyEasy",
          }}
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
  )
}

export default EasyGameSite;
