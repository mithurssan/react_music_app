import React, { useState, useEffect } from 'react'
import ArtistMusicDetails from '../ArtistMusicDetail'

const ArtistMusicList = () => {
  const [albumDetails, setAlbumDetails] = useState([]);

  async function getAlbumDetails() {
    try {
      const result = await fetch("https://musicbrainz.org/ws/2/release-group?artist=b95ce3ff-3d05-4e87-9e01-c97b66af13d4&inc=artist-credits&fmt=json")
      const data = await result.json();
      setAlbumDetails(data["release-groups"]);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    getAlbumDetails()
  }, [])

  return (
    <>
      {
        albumDetails.map((albumDetails, idx) => {
          return <ArtistMusicDetails key={idx} artistAlbum={albumDetails} />
        })
      }
    </>
  )
}

export default ArtistMusicList
