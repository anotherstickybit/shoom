import {playlistAPI, playlistPreviewsAPI} from "../../api/api"

const GET_ALL = 'GET_ALL';
const GET_BY_ID= 'GET_BY_ID';
const REMOVE_BY_ID= 'REMOVE_BY_ID';
const ADD_TRACK = 'ADD_TRACK';


let initialState = {
    playlistPreviews: [

    ],
    errorOnRemoving: false,
    img_URL: 'https://images.macrumors.com/t/LGuWSa3kB8rIGbhA7CJm-zusWmg=/1200x1200/smart/article-new/2018/05/apple-music-note.jpg',
    currentPlaylist: {},
    trackAdded: false
}

const playlistsPreviewReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL:
            return {
                ...state,
                playlistPreviews: action.playlistPreviews
            };
        case REMOVE_BY_ID:
            return {
                state
            };
        case GET_BY_ID:
            return {
                ...state,
                currentPlaylist: action.currentPlaylist
            };
        case  ADD_TRACK:
            return {
                ...state,
                trackAdded: action.trackAdded
            }
        default:
            return state;
    }
}

export const setPreviews = (playlistPreviews) => ({type: GET_ALL, playlistPreviews})
export const setCurrentPlaylist = (currentPlaylist) => ({type: GET_BY_ID, currentPlaylist})
export const addTrack = (trackAdded) => ({type: ADD_TRACK, trackAdded})

export const requestPlaylistPreviews = () => {
    return (dispatch) => {
        playlistPreviewsAPI.getPreviews().then(data => {
            dispatch(setPreviews(data))
        })
    }
}

export const removePlaylistById = (playlistId) => {
    return (dispatch) => {
        playlistPreviewsAPI.removePlaylistById(playlistId).then(response => {
            if (response.status === 200) {
                dispatch(requestPlaylistPreviews());
            }
        })
    }
}

export const addNewPlaylist = (newPlaylistName) => {
    return (dispatch) => {
        playlistPreviewsAPI.addNewPlaylist(newPlaylistName).then(response => {
            if (response.status === 200) {
                dispatch(requestPlaylistPreviews())
            }
        })
    }
}

export const renamePlaylist = (newName, id) => {
    return (dispatch) => {
        playlistPreviewsAPI.renamePlaylist(newName, id).then(response => {
            if (response.status === 200) {
                dispatch(requestPlaylistPreviews())
            }
        })
    }
}

export const getPlaylistById = (playlistId) => {
    return (dispatch) => {
        playlistAPI.getById(playlistId).then(response => {
            if (response.status === 200) {
                dispatch(setCurrentPlaylist(response.data))
            }
        })
    }
}

export const removeTrackById = (playlistTrackId, playlistId) => {
    return (dispatch) => {
        playlistAPI.removeTrackById(playlistTrackId).then(response => {
            if (response.status === 200) {
                dispatch(getPlaylistById(playlistId))
            }
        })
    }
}

export const addTrackById = (playlistId, trackId) => {
    return (dispatch) => {
        playlistAPI.addTrack(playlistId, trackId).then(response => {
            if (response.status === 200) {
                dispatch(addTrack(true))
            }
        })
    }
}

export default playlistsPreviewReducer;