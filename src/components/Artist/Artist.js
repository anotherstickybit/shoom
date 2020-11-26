import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import {CardHeader, Typography} from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {NavLink} from "react-router-dom";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
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
        table: {
            // width: 650,
            // marginLeft: '10px'
        },
        tableContainer: {
            marginTop: '20px',
            width: 650,
            marginLeft: '20px'
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

    const exampleArtists = [
        {
            id: 1,
            name: 'Metallica',
            album: 'Master of Puppets',
            img: 'https://img.discogs.com/CRpfzSba7JxMKJ73GiOOc2cMs50=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-8579882-1577799526-6136.jpeg.jpg'
        },
        {
            id: 2,
            name: 'Metallica',
            album: 'Metallica',
            img: 'https://upload.wikimedia.org/wikipedia/ru/c/c2/Metallica_Album.jpg'
        }
    ]

    return (

        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}/>
            </AppBar>
            <Paper elevation={3} className={classes.paper}>
                {props.currentArtist.id &&
                <div>
                    <Typography className={classes.typography} variant="h6" gutterBottom>
                        Artist {props.currentArtist.name}<br/>
                        Albums:
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