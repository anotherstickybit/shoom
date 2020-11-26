import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        marginLeft: '10px',
        marginTop: '20px',
        display: 'flex',
        width: '510px',
        height: '250px'
    },
    details: {
        display: 'grid',
    },
    content: {
        marginTop: '70px'
    },
    cover: {
        marginLeft: 'auto',
        width: '250px',
        height: '250px'
    }
}));

export default function MediaControlCard(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card className={classes.root}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">
                            {props.albumName}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {props.artistName}
                        </Typography>
                    </CardContent>

                </div>
                <CardMedia
                    className={classes.cover}
                    image={props.imgURL}
                />
            </Card>
        </div>
    );
}