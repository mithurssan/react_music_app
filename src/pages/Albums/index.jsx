import React from 'react'
import { useNavigate } from "react-router-dom";
import { ArtistMusicList } from "../../components";
import "./style.css"

const Albums = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className="backBtn" onClick={() => navigate("/")}>Back to Home</button>
      <ArtistMusicList />
    </>
  )
}

export default Albums
