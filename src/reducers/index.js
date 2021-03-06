import { combineReducers } from "redux";

const SongsReducer = () => {
  return [
    {
      title: "No scrubs",
      duration: "4:05",
    },
    {
      title: "Macarena",
      duration: "3:20",
    },
    {
      title: "All stars",
      duration: "2:30",
    },
    {
      title: "I want it that way",
      duration: "1:45",
    },
  ];
};

const SelectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: SongsReducer,
  selectedSong: SelectedSongReducer,
});
