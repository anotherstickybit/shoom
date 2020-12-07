import React from "react";
import {connect} from "react-redux";
import {requestArtists} from "../redux/ArtistsReducer";
import ArtistsPreview from "./ArtistsPreview";
import {getArtistsSelector} from "../../selectors/ArtistSelectors";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

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

export default compose(connect(mapStateToProps, {requestArtists}), withRouter)(ArtistsPreviewContainer);