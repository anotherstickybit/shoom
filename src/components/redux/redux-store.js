import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form"
import playlistsPreviewReducer from "./PlaylistsPreviewReducer";

let reducers = combineReducers({
        form: formReducer,
        playlistPreviews: playlistsPreviewReducer
    }
)

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

window.store = store;
