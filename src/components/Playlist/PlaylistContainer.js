import React from "react";
import Playlist from "./Playlist";

class PlaylistContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.match.params.id)
    }

    render() {
        return (
            <Playlist/>
        )
    }
}


export default PlaylistContainer