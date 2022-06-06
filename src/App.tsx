import React, { useState} from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FullGameSite from "./components/FullGameSite";
import ShortGameSite from "./components/ShortGameSite";
import EasyGameSite from "./components/EasyGameSite";
import SetsGameSite from "./components/SetsGameSite";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/short' element={<ShortGameSite />} />
          <Route path='/easy' element={<EasyGameSite />} />
          <Route path='/sets' element={<SetsGameSite />} />
          <Route path='/' element={<FullGameSite />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
