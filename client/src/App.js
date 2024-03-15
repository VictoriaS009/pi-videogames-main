import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import VideoGameCreation from './components/VideogameCreation/VideogameCreation';
import VideogameDetail from "./components/VideogameDetail";


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/videogames"  element={<Home />}/>
      <Route path="/videogames/:id" element={ <VideogameDetail/>}/>
      <Route path="/videogamecreation" element={<VideoGameCreation/>} />
      </Routes>
    </div>
  );
}

export default App;
