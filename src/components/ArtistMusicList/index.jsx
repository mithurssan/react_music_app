import React from 'react'
import ArtistMusicDetails from '../ArtistMusicDetail'

const ArtistMusicList = ({ artistMusic }) => {
  return (
    <>
      {
        artistMusic.map((artistMusic, idx) => {
          return <ArtistMusicDetails key={idx} artistMusic={artistMusic} />
        })
      }
    </>
  )
}

export default ArtistMusicList
