import React from "react";
import SearchResult from "./SearchResult";
import {getIsLoading, getSearchedArtists, getSearchedTracks} from "../redux/SearchSelectors";
import {connect} from "react-redux";

class SearchResultContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        if (this.props.isLoading === true) {
            return <div>Loading</div>
        }
        return (
            <SearchResult artists={this.props.artists} tracks={this.props.tracks}/>
        )
    }
}

let mapStateToProps = (state) => ({
    artists: getSearchedArtists(state),
    tracks: getSearchedTracks(state)
})

export default connect(mapStateToProps, {})(SearchResultContainer);
