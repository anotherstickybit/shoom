import {artistsAPI, trackAPI} from "../../api/api";

const SEARCH_ARTISTS = 'SEARCH_ARTISTS';
const SEARCH_TRACKS = 'SEARCH_TRACKS';

let initialState = {
    artists: [],
    tracks: [],
    load: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_ARTISTS:
            return {
                ...state,
                artists: action.artists
            };
        case SEARCH_TRACKS:
            return {
                ...state,
                tracks: action.tracks
            };
        default:
            return state

    }
}

export const setSearchedArtists = (artists) => ({type: SEARCH_ARTISTS, artists})
export const setSearchedTracks = (tracks) => ({type: SEARCH_TRACKS, tracks})

export const search = (text) => {
    return (dispatch) => {
        artistsAPI.searchArtists(text).then(response => {
            if (response.status === 200) {
                dispatch(setSearchedArtists(response.data))
            }
        })
        trackAPI.searchTracks(text).then(response => {
            if (response.status === 200) {
                dispatch(setSearchedTracks(response.data))
            }
        })
    }
}

export default searchReducer;

