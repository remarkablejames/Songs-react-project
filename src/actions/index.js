// this is an action creator
export const SelectSong = (song) => {
  //return action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
