import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import VideogameDetail from "./components/VideogameDetail";
import VideogameCreation from "./components/VideogameCreation";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/videogames" render={({location})=> <Home location={location}/>}/>
      <Route path="/videogames/:id" render={({match})=> <VideogameDetail match={match}/>}/>
      <Route path="/videogame" element={<VideogameCreation/>} /> 
      </Routes>
    </div>
  );
}

export default App;
