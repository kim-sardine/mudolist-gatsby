import * as React from "react"

import Card from "./card"

const List = ({playlists}) => {
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {playlists.map((playlist) => (
        <div className="col" key={playlist.playlist_id}>
          <Card playlist={playlist} />
        </div>
      ))}
    </div>
  )
}
export default List