import React from "react";
import SearchResult from "./SearchResult";
import {
    getArtistsSelector,
    getTracksSelector
} from "../redux/SearchSelectors";
import {connect} from "react-redux";
import {addTrackById} from "../redux/PlaylistsPreviewReducer";
import {getPlaylistsPreviewsSelector} from "../redux/PlaylistSelectors";

class SearchResultContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return (
            <SearchResult artists={this.props.artists} tracks={this.props.tracks}
                          addTrackById={this.props.addTrackById} playlists={this.props.playlists}/>
        )
    }
}

let mapStateToProps = (state) => ({
    artists: getArtistsSelector(state),
    tracks: getTracksSelector(state),
    playlists: getPlaylistsPreviewsSelector(state)
})

export default connect(mapStateToProps, {addTrackById})(SearchResultContainer);
