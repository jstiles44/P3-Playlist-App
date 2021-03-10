import { useState, useEffect } from "react"
import "./Explore.css"
import Song from "../../components/songExplore/Song"
import Sort from "../../components/sort/Sort"
import Layout from "../../components/Shared/layout/Layout"
import { getSongs } from '../../services/songs'
import {titleAZ, titleZA, artistAZ, artistZA} from "../../utils/sort"

const Explore = (props) => {
  const [allSongs, setAllSongs] = useState([])
  const [queriedSongs, setQueriedSongs] = useState([])
  const [sortType, setSortType] = useState([])

  useEffect(() => {
    const fetchSongs = async () => {
      const songs = await getSongs()
      setAllSongs(songs)
      setQueriedSongs(songs)
    }
    fetchSongs()
  }, [])

  const handleSort = type => {
    setSortType(type)
    switch (type) {
      case "title-ascending":
        setQueriedSongs(titleAZ(queriedSongs))
        break
      case "title-descending":
        setQueriedSongs(titleZA(queriedSongs))
        break
      case "artist-ascending":
        setQueriedSongs(artistAZ(queriedSongs))
        break
      case "artist-descending":
        setQueriedSongs(artistZA(queriedSongs))
        break
      default:
        break
    }
  }

  const handleFilter = event => {
    const newQueriedSongs = allSongs.filter(song => song.title.toLowerCase().includes(event.target.value.toLowerCase()))
    setQueriedSongs(newQueriedSongs, () => handleSort(sortType))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const songsJSX = queriedSongs.map((song, index) => {
    <Song title={song.title} _id={song._id} albumCover={song.albumCover} artist={song.artist} key={index}/>

  })

  return (
    <Layout user={props.user}>
      {/* <Filter onSubmit={handleSubmit} onChange={handleFilter} /> */}
      <Sort onsubmit={handleSubmit} onChange={handleSort} />
      <div className="songs-explore">
        {songsJSX}
      </div>
    </Layout>
  )
}

export default Explore 