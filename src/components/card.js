import * as React from "react"

import { Link } from "gatsby"

const Card = ({playlist}) => {
  return (
    <div className="card shadow-sm">
      <img className="card-img-top" src={playlist.thumbnail_url} width="100%" alt={playlist.title} />
      <div className="card-body">
        <div>
          <Link to={playlist.playlist_id} className={`text-decoration-none text-reset stretched-link`}>{playlist.title}</Link>
        </div>
        <div>
            <span>{playlist.start_at} ~ {playlist.end_at}</span>
        </div>
      </div>
    </div>
  )
}
export default Card