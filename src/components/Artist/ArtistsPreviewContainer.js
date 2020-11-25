import React from "react";
import {connect} from "react-redux";
import {requestArtists} from "../redux/ArtistsReducer";
import ArtistsPreview from "./ArtistsPreview";
import {getArtists, getArtistsSelector} from "../redux/ArtistSelectors";

class ArtistsPreviewContainer extends React.Component {

    componentDidMount() {
        this.props.requestArtists();
    }

    render() {
        return (
            <ArtistsPreview artistsList={this.props.artistsList}/>
        )
    }
}

let mapStateToProps = (state) => ({
    artistsList: getArtistsSelector(state),

})

export default connect(mapStateToProps, {requestArtists})(ArtistsPreviewContainer);