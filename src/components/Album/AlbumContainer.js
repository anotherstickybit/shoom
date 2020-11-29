import React from "react";
import Album from "./Album";
import {getCurrentAlbum} from "../redux/AlbumSelectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestAlbumById} from "../redux/AlbumReducer";
import {withRouter} from "react-router-dom";
import {getAlbumsPreviews, getPlaylistsPreviewsSelector} from "../redux/PlaylistSelectors";
import {addTrackById} from "../redux/PlaylistsPreviewReducer";

class AlbumContainer extends React.Component {

    componentDidMount() {
        let albumId = this.props.match.params.id;
        this.props.requestAlbumById(albumId);
    }

    render() {
        return (
            <Album currentAlbum={this.props.currentAlbum} playlists={this.props.playlists}
                   addTrackById={this.props.addTrackById}/>
        )
    }
}

let mapStateToProps = (state) => ({
    currentAlbum: getCurrentAlbum(state),
    playlists: getPlaylistsPreviewsSelector(state)
})

export default compose(connect(mapStateToProps, {requestAlbumById, addTrackById}), withRouter)(AlbumContainer)