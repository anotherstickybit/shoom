import React from "react";
import {Button, CardHeader, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";
import red from "@material-ui/core/colors/red";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import {NavLink} from "react-router-dom";
import {removePlaylistById} from "../redux/PlaylistsPreviewReducer";
import AddNewPlaylist from "./AddNewPlaylist";
import AddPlaylist from "./AddNewPlaylist";
import PlaylistName from "./PlaylistName";

const useStyles = makeStyles((theme) => ({
    typography: {
        display: 'inline-block',
        marginLeft: '40px',
        marginTop: '20px',
    },
    cardsArea: {
        marginTop: '25px',
    },
    card: {
        marginLeft: '20px',
        width: '300px',
        height: '350'
    },
    media: {
        height: '250px'
    },
    typographyCard: {
        marginTop: '-70px',
        marginLeft: '10px'
    }
}))

const CardItem = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader action={
                <IconButton aria-label="settings" onClick={() => {
                    props.removeById(props.id)
                }}>
                    <CloseIcon/>
                </IconButton>
            }
                        // title={props.title}
            />
            <CardContent>
                {/*<Typography className={classes.typographyCard} gutterBottom variant="h5" component="h2">*/}
                {/*    {props.title}*/}
                {/*</Typography>*/}
                <div className={classes.typographyCard}>
                <PlaylistName title={props.title} id={props.id} renamePlaylist={props.renamePlaylist}/>
                </div>
            </CardContent>
            <NavLink to={'/playlist/' + props.id}>
                <CardMedia
                    className={classes.media}
                    image={props.img_URL}
                    title={props.title}
                />
            </NavLink>
        </Card>
    )
}

const PlaylistsPreviews = (props) => {
    const classes = useStyles();

    return (
        <div>
            <div>
                <Grid
                    justify="space-between"
                    container
                    spacing={24}
                >
                    <Grid item xs={2}>
                        <Typography className={classes.typography} variant="h6" gutterBottom>
                            Плейлисты для Вас
                        </Typography>
                    </Grid>
                    <Grid item xs={10}>
                        <AddPlaylist/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.cardsArea}>
                <Grid container spacing={2}>

                    {props.albumPreviews.map((item) => {
                        return <Grid item>
                            <CardItem title={item.name} id={item.id} removeById={props.removePlaylistById}
                                      img_URL={props.img_URL} renamePlaylist={props.renamePlaylist}/>
                        </Grid>
                    })}
                </Grid>
            </div>

        </div>

    )
}

export default PlaylistsPreviews;