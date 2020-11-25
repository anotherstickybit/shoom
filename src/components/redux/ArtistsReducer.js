import {artistsAPI} from "../../api/api";

const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';
const GET_CURRENT_ARTIST = 'GET_CURRENT_ARTIST';
const GET_CURRENT_ARTIST_ALBUM_PREVIEWS = 'GET_CURRENT_ARTIST_ALBUM_PREVIEWS';

let initialState = {
    artists: [],
    currentArtist: {},
    currentArtistAlbumPreviews: []
}

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_ARTISTS:
            return {
                ...state,
                artists: action.artists
            };
        case GET_CURRENT_ARTIST:
            return {
                ...state,
                currentArtist: action.artist
            };
        case GET_CURRENT_ARTIST_ALBUM_PREVIEWS:
            return {
                ...state,
                currentArtistAlbumPreviews: action.albumPreviews
            }
        default:
            return state
    }
}

export const setArtists = (artists) => ({type: GET_ALL_ARTISTS, artists})
export const setCurrentArtist = (artist) => ({type: GET_CURRENT_ARTIST, artist})
export const setCurrentArtistAlbumPreviews = (albumPreviews) =>
    ({type: GET_CURRENT_ARTIST_ALBUM_PREVIEWS, albumPreviews})

export const requestArtists = () => {
    return (dispatch) => {
        artistsAPI.getArtistsList().then(response => {
            if (response.status === 200) {
                dispatch(setArtists(response.data))
            }
        })
    }
}

export const requestCurrentArtist = (artistId) => {
    return (dispatch) => {
        artistsAPI.getCurrentArtist(artistId).then(response => {
            if (response.status === 200) {
                dispatch(setCurrentArtist(response.data))
            }
        })
    }
}

export const requestCurrentArtistAlbumPreviews = (artistId) => {
    return (dispatch) => {
        artistsAPI.getCurrentArtistAlbums(artistId).then(response => {
            if (response.status === 200) {
                dispatch(setCurrentArtistAlbumPreviews(response.data))
            }
        })
    }
}

export default artistsReducer;