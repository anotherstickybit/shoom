import React from "react";
import PlaylistsPreviews from "./PlaylistsPreviews";
import {compose} from "redux";
import {connect} from "react-redux";
import {removePlaylistById, renamePlaylist, requestPlaylistPreviews} from "../redux/PlaylistsPreviewReducer";
import {getAlbumsPreviews, getPlaylistsPreviewsSelector, getImgURL} from "../redux/PlaylistSelectors";

class PlaylistsPreviewsContainer extends React.Component {

    componentDidMount() {
        this.props.requestPlaylistPreviews();
    }

    render() {
        return (
            <PlaylistsPreviews {...this.props} albumPreviews={this.props.playlistPreviews}
                               removePlaylistById={this.props.removePlaylistById}
                               img_URL={this.props.img_URL}
                               renamePlaylist={this.props.renamePlaylist}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        playlistPreviews: getPlaylistsPreviewsSelector(state),
        img_URL: getImgURL(state)
    };
}

export default connect(mapStateToProps, {removePlaylistById, requestPlaylistPreviews, renamePlaylist})(PlaylistsPreviewsContainer)
