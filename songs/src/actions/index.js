// anytime we update data, we call anction creator
// Action creator
// named export
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

// export default selectSong
