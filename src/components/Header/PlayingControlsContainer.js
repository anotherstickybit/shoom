import React from "react";
import {getIsPlaying} from "../../selectors/PlayingPlaylistSelector";
import {connect} from "react-redux";
import PlayingControls from "./PlayingControls";
import {pause, play} from "../redux/PlayingPlaylistReducer";

class PlayingControlsContainer extends React.Component {
    render() {
        return (
            <PlayingControls isPlaying={this.props.isPlaying} play={this.props.play}
                             pause={this.props.pause}/>
        )
    }
}

let mapStateToProps = (state) => ({
    isPlaying: getIsPlaying(state)
})

export default connect(mapStateToProps, {play, pause})(PlayingControlsContainer)
