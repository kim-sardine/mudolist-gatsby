
export function shuffleArray(array) {
  // https://stackoverflow.com/a/12646864/5778044
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

export function getRandomPlaylistURL(playlists) {
  shuffleArray(playlists);
  return '/' + playlists[0].playlist_id;
}

export function order(inputArray, orderBy) {
  if (orderBy) {
    var playlistsWithStartAt = [];
    var playlistsWithOutStartAt = [];
    inputArray.forEach(playlist => {
      if (playlist.start_at === '') {
        playlistsWithOutStartAt.push(playlist);
      }
      else {
        playlistsWithStartAt.push(playlist);
      }
    });
    if (orderBy === 'new') {
      playlistsWithStartAt.sort((a, b) => Date.parse(b.start_at) - Date.parse(a.start_at));
    }
    else if (orderBy === 'old') {
      playlistsWithStartAt.sort((a, b) => Date.parse(a.start_at) - Date.parse(b.start_at));
    }
    inputArray = playlistsWithStartAt.concat(playlistsWithOutStartAt);
  }
  else {
    shuffleArray(inputArray)
  }
  return inputArray
}
