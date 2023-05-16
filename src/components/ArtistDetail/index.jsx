import React from "react";

function ArtistDetails({ artistName, artistGenre, artistImg, artistDesc }) {
  return (
    <>
      <h1>{artistName} ({artistGenre} Artist)</h1>
      <div className="artist-info">
        <img
          className="avatar"
          src={artistImg}
          alt={`Photo of ${artistName}`}
        />
        <p>{artistDesc}</p>
      </div>
    </>
  )
}

export default ArtistDetails;
