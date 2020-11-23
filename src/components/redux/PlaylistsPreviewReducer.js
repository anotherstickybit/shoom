import {playlistPreviewsAPI} from "../../api/api"

const GET_ALL = 'GET_ALL';
const GET_BY_ID= 'GET_BY_ID';
const REMOVE_BY_ID= 'REMOVE_BY_ID';
const CREATE_NEW= 'CREATE_NEW';


let initialState = {
    playlistPreviews: [
        {id: 1,
        name: 'songs'},
        {id: 2,
        name: 'rock'}
    ],
    errorOnRemoving: false,
    img_URL: 'https://images.macrumors.com/t/LGuWSa3kB8rIGbhA7CJm-zusWmg=/1200x1200/smart/article-new/2018/05/apple-music-note.jpg'
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
            }
        default:
            return state;
    }
}

export const setPreviews = (playlistPreviews) => ({type: GET_ALL, playlistPreviews})

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

export default playlistsPreviewReducer;