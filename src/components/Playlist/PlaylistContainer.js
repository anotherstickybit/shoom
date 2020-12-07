import React from "react";
import Playlist from "./Playlist";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {removeTrackById, getPlaylistById} from "../redux/PlaylistsPreviewReducer";
import {compose} from "redux";
import {getCurrentPlaylist} from "../../selectors/PlaylistSelectors";

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
            currentPlaylist: getCurrentPlaylist(state)
})


export default compose(connect(mapStateToProps, {getPlaylistById, removeTrackById}), withRouter)(PlaylistContainer);