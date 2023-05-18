import React from 'react'
import { Link, useLocation } from "react-router-dom"

const NotFound = () => {
    const location = useLocation();

    return (
        <>
            <h2 style={{ fontSize: "50px" }}>Page <span style={{ color: "white" }}> {location.pathname}</span> not found ⚠️</h2>
            <Link to="/" style={{ color: "white", fontWeight: "bold" }}>Go back to Home &rarr;</Link>
        </>
    )
}

export default NotFound;
