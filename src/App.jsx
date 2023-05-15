import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const artist = {
  name: "Eminem",
  genre: "Hip-Hop",
  imageUrl: "https://i.imgur.com/IE6Xlzt.jpeg",
  description: "Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, and record producer. He is credited with popularizing hip hop in middle America and is critically acclaimed as one of the greatest rappers of all time. Eminem is one of the best-selling artists in music history, and easily one of rap's biggest crossover successes. He was the first white rapper since the Beastie Boys to garner both sales and critical respect, but his impact has exceeded this confining distinction. On sheer technical skills, Eminem is one of the greatest MCs of his generation: rapid, fluid, dexterous, and unpredictable, capable of pulling off long-form narratives or withering asides."
};


function ArtistDetails() {
  return (
    <>
      <h1>{artist.name} ({artist.genre})</h1>
      <div className="artist-info">
        <img
          className="avatar"
          src={artist.imageUrl}
          alt={`Photo of ${artist.name}`}
        />
        <p>{artist.description}</p>
      </div>

    </>
  )
}

function ArtistMusicDetails() {
  return (
    <button>I'm a button</button>
  )
}



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ArtistDetails />
    </>
  )
}

export default App
