import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {IconButton, Typography} from "@material-ui/core";
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0',
        margin: '0',
    },
    controls: {
        display: 'inline-block',
        float: "left",
        marginTop: '3px'
    },
    description: {
        display: 'inline-block',
        float: "right",
        marginTop: '5px',
        marginLeft: '15px'
    },
    playIcon: {
        height: 35,
        width: 35,
    },
    nextPrevIcons: {
        height: 25,
        width: 25,
    },
    trackName: {
        fontSize: '20px',
        color: 'black'
    },
    artistName: {
        fontSize: '15px',
        color: 'black'
    }
}))

const PlayingControls = (props) => {


    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.description}>
                <Typography className={classes.trackName}>
                    trackName
                </Typography>
                <Typography className={classes.artistName}>
                    artistName
                </Typography>
            </div>
            <div className={classes.controls}>
                <IconButton aria-label="previous">
                    <SkipPreviousIcon className={classes.nextPrevIcons} color={"secondary"}/>
                </IconButton>
                {props.isPlaying &&
                <IconButton aria-label="pause" onClick={props.pause}>
                    <PauseIcon className={classes.playIcon} color={"secondary"}/>
                </IconButton>
                }
                {!props.isPlaying &&
                <IconButton aria-label="play" onClick={() => props.play([])}>
                    <PlayArrowIcon className={classes.playIcon} color={"secondary"}/>
                </IconButton>
                }
                <IconButton aria-label="next">
                    <SkipNextIcon className={classes.nextPrevIcons} color={"secondary"}/>
                </IconButton>
            </div>
        </div>
    )
}

export default PlayingControls;