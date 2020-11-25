import React from "react";
import Main from "./Main";
import {compose} from "redux";
import {connect} from "react-redux";
import {removePlaylistById, requestPlaylistPreviews} from "../redux/PlaylistsPreviewReducer";
import {getAlbumsPreviews, getAlbumsPreviewsSelector, getImgURL} from "../redux/PlaylistSelectors";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.requestPlaylistPreviews();
    }

    render() {
        return (
            <Main {...this.props} albumPreviews={this.props.playlistPreviews} removePlaylistById={this.props.removePlaylistById}
                  img_URL={this.props.img_URL}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        playlistPreviews: getAlbumsPreviews(state),
        img_URL: getImgURL(state)
    };
}

export default connect(mapStateToProps, {removePlaylistById, requestPlaylistPreviews})(MainContainer)
