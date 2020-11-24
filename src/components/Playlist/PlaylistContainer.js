import React from "react";
import Playlist from "./Playlist";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getPlaylistById, removeTrackById} from "../redux/PlaylistsPreviewReducer";
import {compose} from "redux";

class PlaylistContainer extends React.Component {

    componentDidMount() {
        let playlistId = this.props.match.params.id;
        this.props.getPlaylistById(playlistId);
    }

    render() {
        return (
            <Playlist {...this.props} currentPlaylist={this.props.currentPlaylist}
                      removeTrackById={this.props.removeTrackById}
            />
        );
    }
}

let mapStateToProps = (state) => ({
            currentPlaylist: state.playlistPreviews.currentPlaylist
})


export default compose(connect(mapStateToProps, {getPlaylistById, removeTrackById}), withRouter)(PlaylistContainer);