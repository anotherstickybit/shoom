import React from "react";
import Artist from "./Artist";


class ArtistContainer extends React.Component {
    componentDidMount() {

    }

    render() {
        let id = this.props.match.params.id;

        return (
            <Artist id={id} />
        )
    }
}

export default ArtistContainer