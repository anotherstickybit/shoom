import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import playlistsPreviewReducer from "./PlaylistsPreviewReducer";
import artistsReducer from "./ArtistsReducer";
import albumReducer from "./AlbumReducer";
import searchReducer from "./SearchReducer";
import playingPlaylistReducer from "./PlayingPlaylistReducer";

let reducers = combineReducers({
        form: formReducer,
        playlistPreviews: playlistsPreviewReducer,
        artists: artistsReducer,
        album: albumReducer,
        searchResult: searchReducer,
        nowPlaying: playingPlaylistReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
