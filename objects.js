var playlist = {
  'Julio Iglesias': 'Fragile', 
  'Celine Dion': 'I'm Alive'
}

 function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

 function removeFromPlaylist(playlist, artistName) {
  delete playlist[artistName]
  return playlist
} 