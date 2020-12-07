
export const getArtistsSelector = (state) => {
    return state.artists.artists
}

export const getCurrentArtist = (state) => {
    return state.artists.currentArtist;
}

export const getCurrentArtistAlbums = (state) => {
    return state.artists.currentArtistAlbumPreviews;
}