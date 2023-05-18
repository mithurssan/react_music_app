import React from 'react'
import { ArtistDetail } from "../../components";
import artist from '../../assets/artist'
import "./style.css"

const Home = () => {
    return (
        <ArtistDetail artistName={artist.eminem.name} artistGenre={artist.eminem.genre} artistImg={artist.eminem.imageUrl} artistDesc={artist.eminem.description} />
    )
}

export default Home
