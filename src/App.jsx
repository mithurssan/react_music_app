import './App.css'
import artist from './assets/artist'

function ArtistDetails() {
  return (
    <>
      <h1>{artist.name} ({artist.genre} Artist)</h1>
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

function ArtistMusicDetails({ idx }) {
  return (
    <>
      <div className="music-container">
        <div className="music-details">
          <img src={artist.music[idx].cover} alt={`${artist.music[idx].album} Cover`} />
          <div className="music-content">
            <h2>{artist.music[idx].name}</h2>
            <h3>Album: {artist.music[idx].album}</h3>
            <p>Release Date: {artist.music[idx].releaseDate}</p>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const songComponents = [];
  for (let i = 0; i < artist.music.length; i++) {
    songComponents.push(<ArtistMusicDetails idx={i} />);
  }

  return (
    <>
      <ArtistDetails />
      {songComponents}
    </>
  )
}

export default App
