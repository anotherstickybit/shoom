import {albumAPI} from "../../api/api";


const GET_ALBUM_BY_ID = "GET_ALBUM_BY_ID";

let initialState = {
    currentAlbum: {}
}

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALBUM_BY_ID:
            return {
                ...state,
                currentAlbum: action.currentAlbum
            };
        default:
            return state;
    }
}

export const setCurrentAlbum = (currentAlbum) => ({type: GET_ALBUM_BY_ID, currentAlbum})


export const requestAlbumById = (albumId) => {
    return (dispatch) => {
        albumAPI.getAlbumById(albumId).then(response => {
            if (response.status === 200) {
                dispatch(setCurrentAlbum(response.data))
            }
        })
    }
}

export default albumReducer;