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
    },
    renamePlaylist(newName, id) {
        return instance.post(`playlists`, {id: id, name: newName})
    }
}

export const playlistAPI = {
    getById(playlistId) {
        return instance.get(`playlists/${playlistId}`)
            .then(response => {
                return response;
            })
    },
    removeTrackById(playlistTrackId) {
        return instance.delete(`playlists/remove/${playlistTrackId}`)
    },
    addTrack(playlistId, trackId) {
        return instance.post(`playlists/add/${playlistId}?trackId=${trackId}`)
            .then(response => {
                return response;
            })
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
    },
    searchArtists(text) {
        return instance.get(`artists/search/${text}`)
            .then(response => {
                return response;
            })
    }
}

export const albumAPI = {
    getAlbumById(albumId) {
        return instance.get(`albums/${albumId}`)
            .then(response => {
                return response;
            })
    }
}

export const trackAPI = {
    searchTracks(text) {
        return instance.get(`tracks/search/${text}`)
            .then(response => {
                return response;
            })
    }
}