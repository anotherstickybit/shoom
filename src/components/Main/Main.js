import React from "react";
import {CardHeader, Typography} from "@material-ui/core";
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

const useStyles = makeStyles((theme) => ({
    typography: {
        display: 'inline-block',
        marginLeft: '40px',
        marginTop: '20px',
    },
    cardsArea: {
        marginTop: '20px',
    },
    card: {
        marginLeft: '10px',
        width: '300px',
        height: '350'
    },
    avatar: {
        backgroundColor: red[500],
    },
    media: {
        // width: '100px',
        height: '200px'
    }
}))

const CardItem = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                    U
                </Avatar>}
                        action={
                            <IconButton aria-label="settings" onClick={''}>
                                {/*//todo: here*/}
                                <CloseIcon/>
                            </IconButton>
                        }
                        title={props.title}
                        subheader="Дата и время создания"
            />
            <NavLink to={'/playlist/' + props.id} id={props.id}>
            <CardMedia
                className={classes.media}
                image="https://1lady.pro/wp-content/uploads/2014/01/default-placeholder.png"
                title={props.title}
            />
            </NavLink>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Группы, входящие в плейлист.
                </Typography>
            </CardContent>

        </Card>
    )
}

const Main = () => {

    const classes = useStyles();
    const elements = ['one', 'two', 'three', 'four'];

    return (
        <div>
            <div>
                <Typography className={classes.typography} variant="h6" gutterBottom>
                    Плейлисты для Вас %username%
                </Typography>
            </div>
            <div className={classes.cardsArea}>
                <Grid container spacing={2}>

                    {elements.map((value, index) => {
                        return <Grid item>
                            <CardItem title={value + '' + index} id={index}/>
                        </Grid>
                    })}
                    {/*<CardItem title={'2343'} />*/}

                </Grid>
            </div>
        </div>

    )
}

export default Main;