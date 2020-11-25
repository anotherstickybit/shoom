import {createSelector} from "reselect";

export const getArtistsSelector = (state) => {
    return state.artists.artists
}

export const getArtists = createSelector(getArtistsSelector, (artists) => {
    return artists.filter(u => true)
})

export const getCurrentArtist = (state) => {
    return state.artists.currentArtist;
}

export const getCurrentArtistAlbums = (state) => {
    return state.artists.currentArtistAlbumPreviews;
}