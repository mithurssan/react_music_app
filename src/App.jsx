import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { NavBar } from './layout';
import * as Pages from "./pages";
import './App.css'

function App() {

  useEffect(() => {
    const timer = setInterval(() => {
      const colours = ["#3d3d3d", "#383838", "#242424"];
      const randomColour = colours[Math.floor(Math.random() * colours.length)];
      document.body.style.backgroundColor = randomColour;
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/albums" element={<Pages.Albums />} />
          <Route path="/feedback" element={<Pages.Feedback />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
