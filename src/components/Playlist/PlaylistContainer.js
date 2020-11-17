import React from "react";
import Playlist from "./Playlist";

class PlaylistContainer extends React.Component {

    componentDidMount() {
        // console.log(this.props.match.params.id)
    }

    render() {
        let id = this.props.match.params.id;
        return (
            <Playlist id={id}/>
        )
    }
}

export default PlaylistContainer