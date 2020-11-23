import React from "react";
import Main from "./Main";
import {compose} from "redux";
import {connect} from "react-redux";
import {removePlaylistById, requestPlaylistPreviews} from "../redux/PlaylistsPreviewReducer";
import {getAlbumsPreviews, getImgURL} from "../redux/PlaylistSelectors";

class MainContainer extends React.Component {

    componentDidMount() {
        this.props.getAlbumsPreviews();
    }

    render() {
        return (
            <Main albumPreviews={this.props.playlistPreviews} removePlaylistById={this.props.removePlaylistById}
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

export default compose(connect(mapStateToProps, {removePlaylistById, getAlbumsPreviews: requestPlaylistPreviews}))(MainContainer)
