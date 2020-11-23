import * as axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/"
})

export const playlistPreviewsAPI = {
    getPreviews() {
        return instance.get(`playlists`)
            .then(response => {
                return response.data;
            })
    },
    removePlaylistById(playlistId) {
        return instance.delete(`playlists/removepl/${playlistId}`)
    },
    addNewPlaylist(newPlaylistName) {
        return instance.post(`playlists`, {id: 0, name: newPlaylistName})
    }
}