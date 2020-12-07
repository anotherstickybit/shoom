
export const getPlaylistsPreviewsSelector = (state) => {
    return state.playlistPreviews.playlistPreviews;
}

export const getImgURL = (state) => {
    return state.playlistPreviews.img_URL;
}

export const getCurrentPlaylist = (state) => {
    return state.playlistPreviews.currentPlaylist;
}