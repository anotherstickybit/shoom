const PLAY = 'PLAY';
const PAUSE = 'PAUSE';

let initialState = {
    playingList: [],
    isPlaying: false
}

const playingPlaylistReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLAY:
            return {
                ...state,
                playingList: action.tracks,
                isPlaying: true
            };
        case PAUSE:
            return {
                ...state,
                isPlaying: false
            }
        default:
            return state;
    }

}

export const setPlayingPlaylist = (tracks) => ({type: PLAY, tracks})
export const setPause = () => ({type: PAUSE})

export const play = (currentPlaylist) => {
    return (dispatch) => {
        dispatch(setPlayingPlaylist(currentPlaylist));
    }
}

export const pause = () => {
    return (dispatch) => {
        dispatch(setPause())
    }
}

export default playingPlaylistReducer;