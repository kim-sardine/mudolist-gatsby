import * as React from "react"

import { Link } from "gatsby"

import AllPlaylists from "../../content/index.yaml"
import { getRandomPlaylistURL } from '../utils'

const Detail = ({playlist}) => {
  const randomPlaylistURL = getRandomPlaylistURL(AllPlaylists);
  const videoSrc = `https://www.youtube.com/embed/videoseries?list=${playlist.playlist_id}`
  return (
    <div>
      <div className="video-container">
          <iframe width="560" height="315" src={videoSrc} frameBorder="0" title={playlist.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="my-4 d-flex justify-content-center align-items-center">
          <Link className={`btn btn-primary mx-4`} to={randomPlaylistURL}>랜덤 재생</Link>
      </div>
      <div className="mb-4">
          <div className="card" style={{width: `100%`}}>
              <div className="card-body">
                  <h5 className="card-title">{playlist.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">{playlist.keywords}</h6>
                  <p className="card-text"><small className="text-muted">{playlist.start_at} ~ {playlist.end_at}</small></p>
              </div>
          </div>
      </div>
    </div>
  )
}
export default Detail