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

export const playlistAPI = {
    getById(playlistId) {
        return instance.get(`playlists/${playlistId}`)
            .then(response => {
                return response;
            })
    },
    removeTrackById(trackId, playlistId) {
        return instance.delete(`playlists/remove/${playlistId}?trackId=${trackId}`)
    }
}

export const artistsAPI = {
    getArtistsList() {
        return instance.get(`artists`)
            .then(response => {
                return response;
            })
    },
    getCurrentArtist(artistId) {
        return instance.get(`artists/${artistId}`)
            .then(response => {
                return response;
            })
    },
    getCurrentArtistAlbums(artistId) {
        return instance.get(`albums/artist/${artistId}`)
            .then(response => {
                return response;
            })
    }
}