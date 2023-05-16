import React, { useState } from "react";

function UserForm() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState("");
    const [userData, setUserData] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = { name, comment, rating };
        setUserData([...userData, data])
        alert("Submitted!");
        setName("");
        setComment("");
        setRating("");
    }

    return (
        <>
            <div className="form-container">
                <h2>Rate this Artist and leave a comment!</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-box">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} required />
                    </div>
                    <div className="form-box">
                        <label htmlFor="comment">Comment:</label>
                        <textarea name="comment" placeholder="comment" rows="10" value={comment} onChange={e => setComment(e.target.value)} required />
                    </div>
                    <div className="form-box">
                        <label htmlFor="selectedRating"> Rating:</label>
                        <select name="selectedRating" value={rating} onChange={e => setRating(e.target.value)} required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserForm;

