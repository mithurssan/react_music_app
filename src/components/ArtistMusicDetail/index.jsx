import React, { useState } from "react";

function ArtistMusicDetails({ artistMusic }) {
    const [liked, setLiked] = useState(false);

    const handleLike = (e) => {
        setLiked(!liked);
        e.target.classList.toggle("song-liked");
    }

    return (
        <>
            <div className="music-container">
                <div className="music-details">
                    <img src={artistMusic.cover} alt={`${artistMusic.album} Cover`} />
                    <div className="music-content">
                        <h2>{artistMusic.name}</h2>
                        <h3>Album: {artistMusic.album}</h3>
                        <p>Release Date: {artistMusic.releaseDate}</p>
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
