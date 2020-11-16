import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.paper,
        },
        typography: {
            display: 'inline-block',
            marginLeft: '40px',
            marginTop: '20px',
        },
        paper: {
            width: 'inherit',
            minHeight: '82vh',
            height: '100%',
            marginTop: '25px',
            marginLeft: '2px',
            marginRight: '2px',
            backgroundColor: '#e8e8e8'
        },
        toolBar: {
            minHeight: 36,
            width: "100%"
        },

    }
))

const style = {
    flexGrow: 1,
    background: '#30475e'
};

const Playlist = (props) => {

    const classes = useStyles();


    return (
        <div className={classes.root}>
            <AppBar style={style} position="static">
            <Toolbar className={classes.toolBar} />
            </AppBar>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="h6" gutterBottom>
                    Плейлист {props.id}
                </Typography>
            </Paper>
        </div>
    )
}

export default Playlist;