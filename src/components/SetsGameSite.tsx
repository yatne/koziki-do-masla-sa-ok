import {SuperSlideMe} from 'react-super-slide-me';
import React, {useState} from "react";

const EasyGameSite = () => {
  const [endReached, setEndReached] = useState(false)

  return (
    <header className="App-header">
      <div className="game-container">
        Set A:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['A']
          }}
        />
        <hr />
        Set B:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['B']
          }}
        />
        <hr />
        Set C:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['C']
          }}
        />
        <hr />
        Set D:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['D']
          }}
        />
        <hr />
        Set E:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['E']
          }}
        />
        <hr />
        Set F:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['F']
          }}
        />
        <hr />
        Set X:
        <SuperSlideMe
          onLastLevelReached={() => setEndReached(true)}
          levelConfig={{
            levelSets: ['X']
          }}
        />
        <hr />
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
