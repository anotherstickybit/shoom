import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import playlistsPreviewReducer from "./PlaylistsPreviewReducer";
import artistsReducer from "./ArtistsReducer";

let reducers = combineReducers({
        form: formReducer,
        playlistPreviews: playlistsPreviewReducer,
        artists: artistsReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
