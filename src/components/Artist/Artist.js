import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import {CardHeader, Typography} from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import {NavLink} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";

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
        card: {
            marginLeft: '20px',
            width: '300px',
            height: '350px'
        },
        media: {
            height: '270px'
        },
        cardsArea: {
            marginLeft: '20px',
            marginTop: '20px',
        },
    }
))

const style = {
    flexGrow: 1,
    background: '#30475e'
};

const CardItem = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                title={props.album}
                subheader={props.name}
            />
            <NavLink to={'/album/' + props.albumId}>
                <CardMedia
                    className={classes.media}
                    image={props.img}
                    title={props.name}
                />
            </NavLink>
        </Card>
    )
}

const Artist = (props) => {
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}/>
            </AppBar>
            <Paper elevation={3} className={classes.paper}>
                {props.currentArtist.id &&
                <div>
                    <Typography className={classes.typography} variant="h6" gutterBottom>
                        {props.currentArtist.name}<br/>
                        Доступные альбомы:
                    </Typography>
                    <div className={classes.cardsArea}>
                        <Grid container spacing={2}>
                            {props.currentArtistAlbums.map((item) => (
                                <CardItem name={props.currentArtist.name}
                                          img={item.imgURL} album={item.name} albumId={item.id}/>
                            ))}
                        </Grid>
                    </div>
                </div>
                }
            </Paper>
        </div>
    )
}

export default Artist