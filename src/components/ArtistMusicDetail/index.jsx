import React, { useState } from "react";

function ArtistMusicDetails({ artistAlbum }) {
    const [liked, setLiked] = useState(false);

    const handleLike = (e) => {
        setLiked(!liked);
        e.target.classList.toggle("song-liked");
    }

    return (
        <>
            <div className="music-container">
                <div className="music-details">
                    <div className="music-content">
                        <h2>Album: {artistAlbum.title}</h2>
                        <p>Release Date: {artistAlbum["first-release-date"]}</p>
                    </div>
                    <button
                        className="likeBtn"
                        type="submit"
                        onClick={handleLike}
                    >{liked ? "Unlike" : "Like"}</button>
                </div>
            </div>
        </>
    )
}

export default ArtistMusicDetails;
