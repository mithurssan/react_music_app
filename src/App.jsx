import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes"
import { AuthProvider } from "./contexts"
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
      <AuthProvider>
        <Routes>
          <Route path="/" element={<ProtectedRoute redirectTo="/login" />}>
            <Route element={<NavBar />}>
              <Route index element={<Pages.Home />} />
              <Route path="/albums" element={<Pages.Albums />} />
              <Route path="/feedback" element={<Pages.Feedback />} />
            </Route>
          </Route>
          <Route path="/login" element={<Pages.Login />} />
          <Route path="*" element={<Pages.NotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
