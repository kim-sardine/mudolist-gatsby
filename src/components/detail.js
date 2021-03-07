import * as React from "react"

import { Link } from "gatsby"

const Detail = ({playlist}) => {
  const videoSrc = `https://www.youtube.com/embed/videoseries?list=${playlist.playlist_id}`
  return (
    <div>
      <div class="video-container">
          <iframe width="560" height="315" src={videoSrc} frameborder="0" title={playlist.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div>
          <div class="my-4 d-flex justify-content-center align-items-center">
              {/* <button type="button" class="btn btn-secondary mx-4" data-bs-toggle="modal" data-bs-target="#reportModal" data-bs-title="{{playlist.title}}">수정 요청</button> */}
              {/* {% include "playlists/playlist_hit_logo.html" with playlist=playlist %} */}
              {/* <a href="/" class="btn btn-primary mx-4">랜덤 재생</a> */}
              <Link className={`btn btn-primary mx-4`} to="/">랜덤 재생</Link>
          </div>
      </div>
      <div>
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