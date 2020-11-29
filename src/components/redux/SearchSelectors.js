import {createSelector} from "reselect";

export const getArtistsSelector = (state) => {
    return state.searchResult.artists;
}

export const getTracksSelector = (state) => {
    return state.searchResult.tracks;
}

export const getSearchedArtists = createSelector(getArtistsSelector, (artists) => {
    return artists.filter(u => true);
})


export const getSearchedTracks = createSelector(getTracksSelector, (tracks) => {
    return tracks.filter(u => true);
})

