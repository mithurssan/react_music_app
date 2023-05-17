import React from 'react'
import { NavLink, Outlet } from "react-router-dom"
import "./style.css"

const NavBar = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "black"
  }

  const navA = ({ isActive }) => (isActive ? activeStyle : undefined)

  return (
    <>
      <nav>
        <h2>Eminem</h2>
        <ul className="nav-links">
          <li><NavLink style={navA} to="/">Home</NavLink></li>
          <li><NavLink style={navA} to="/albums">Albums</NavLink></li>
          <li><NavLink style={navA} to="/feedback">Feedback</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
