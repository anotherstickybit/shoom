import {createSelector} from "reselect";

export const getAlbumsPreviewsSelector = (state) => {
    return state.playlistPreviews.playlistPreviews;
}

export const getAlbumsPreviews = createSelector(getAlbumsPreviewsSelector, (playlistPreviews) => {
    return playlistPreviews.filter(u => true);
})

export const getImgURL = (state) => {
    return state.playlistPreviews.img_URL;
}