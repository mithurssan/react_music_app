import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../contexts"
import "./style.css"

const Login = () => {
    const [inputValue, setinputValue] = useState("");
    const inputRef = useRef();
    const goTo = useNavigate();
    const { setUser } = useAuth();

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleInput = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser(inputValue)
        goTo("/")
    }

    return (
        <div className="auth-form-container">
            <form
                onSubmit={handleSubmit}
                className="auth-form"
            >
                <div className="auth-form-content">
                    <label htmlFor="username" className="mr10">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="mr10 p10"
                        placeholder="type your name"
                        autoComplete="off"
                        value={inputValue}
                        onChange={handleInput}
                        ref={inputRef}
                    />
                    <input type="submit" className="p10" />
                </div>
            </form>
        </div>
    )
}

export default Login
