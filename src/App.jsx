import { useState } from 'react'
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
  const [liked, setLiked] = useState(false);

  const handleLike = (e) => {
    setLiked(!liked);
    e.target.classList.toggle("song-liked");
  }

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

function UserSurveyForm() {
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
            <input type="text" name="name" placeholder="name" value={name} onChange={e => setName(e.target.value)} required/>
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

function App() {
  const songComponents = [];
  for (let i = 0; i < artist.music.length; i++) {
    songComponents.push(<ArtistMusicDetails idx={i} key={i} />);
  }

  return (
    <>
      <ArtistDetails />
      {songComponents}
      <UserSurveyForm />
    </>
  )
}

export default App
