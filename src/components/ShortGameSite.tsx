import {SuperSlideMe} from 'react-super-slide-me';
import React, {useState} from "react";

const ShortGameSite = () => {
  const [endReached, setEndReached] = useState(false)

  return (
    <header className="App-header">
      <div className="game-container">
        Short Game:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelFilter:"short",
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

export default ShortGameSite;
