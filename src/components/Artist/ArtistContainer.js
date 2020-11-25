import React from "react";
import Artist from "./Artist";
import {compose} from "redux";
import {connect} from "react-redux";
import {requestCurrentArtist, requestCurrentArtistAlbumPreviews} from "../redux/ArtistsReducer";
import {withRouter} from "react-router-dom";
import {getCurrentArtist, getCurrentArtistAlbums} from "../redux/ArtistSelectors";


class ArtistContainer extends React.Component {

    componentDidMount() {
        let artistId = this.props.match.params.id;
        this.props.requestCurrentArtist(artistId);
        this.props.requestCurrentArtistAlbumPreviews(artistId);
    }

    render() {

        return (
            <Artist currentArtist={this.props.currentArtist}
                    currentArtistAlbums={this.props.currentArtistAlbums}/>
        )
    }
}

let mapStateToProps = (state) => ({
    currentArtist: getCurrentArtist(state),
    currentArtistAlbums: getCurrentArtistAlbums(state)
})

export default compose(connect(mapStateToProps,
    {requestCurrentArtist, requestCurrentArtistAlbumPreviews}), withRouter)(ArtistContainer)