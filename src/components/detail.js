import * as React from "react"

import { Link } from "gatsby"

import AllPlaylists from "../../content/index.yaml"
import { getRandomPlaylistURL } from '../utils'

const Detail = ({playlist}) => {
  const randomPlaylistURL = getRandomPlaylistURL(AllPlaylists);
  const videoSrc = `https://www.youtube.com/embed/videoseries?list=${playlist.playlist_id}`
  return (
    <div>
      <div class="video-container">
          <iframe width="560" height="315" src={videoSrc} frameBorder="0" title={playlist.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div class="my-4 d-flex justify-content-center align-items-center">
          <Link className={`btn btn-primary mx-4`} to={randomPlaylistURL}>랜덤 재생</Link>
      </div>
      <div class="mb-4">
          <div class="card" style={{width: `100%`}}>
              <div class="card-body">
                  <h5 class="card-title">{playlist.title}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{playlist.keywords}</h6>
                  <p class="card-text"><small class="text-muted">{playlist.start_at} ~ {playlist.end_at}</small></p>
              </div>
          </div>
      </div>
    </div>
  )
}
export default Detail