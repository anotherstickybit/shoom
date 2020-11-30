import React from "react";
import {Typography, withStyles} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import TextField from "@material-ui/core/TextField";

class PlaylistName extends React.Component {

    state = {
        editMode: false,
        playlistName: this.props.playlistName
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.renamePlaylist(this.state.playlistName, this.props.id)
    }
    onStatusChange = (e) => {
        this.setState({
            playlistName: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.playlistName !== this.props.playlistName) {
            this.setState({
                playlistName: this.props.playlistName
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <Typography onDoubleClick={this.activateEditMode}
                            gutterBottom variant="h5" component="h2">
                    {this.props.title}
                </Typography>
                }
                {this.state.editMode &&
                    <TextField onChange={this.onStatusChange}
                               onBlur={this.deactivateEditMode} color={"secondary"}
                               defaultValue={this.state.playlistName}
                               inputProps={{ maxLength: 15 }}
                    />
                }
            </div>
        )
    }
}

export default PlaylistName;