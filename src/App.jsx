import './App.css'
import artist from './assets/artist'
import { ArtistDetail, ArtistMusicList, UserForm } from './components';

function App() {
  return (
    <>
      <ArtistDetail artistName={artist.eminem.name} artistGenre={artist.eminem.genre} artistImg={artist.eminem.imageUrl} artistDesc={artist.eminem.description} />
      <ArtistMusicList artistMusic={artist.eminem.music} />
      <UserForm />
    </>
  )
}

export default App
