import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, Typography} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    typography: {
        display: 'inline-block',
        marginLeft: '40px',
        marginTop: '20px',
    },
    genreButton: {
        marginLeft: '40px',
        // width: '80px',
        height: '40px',
        marginTop: '20px'
    }
}))

const Genres = (props) => {
    const classes = useStyles();

    return (
        <div>
            <Button className={classes.genreButton} size={"medium"} onClick={'#'}
                    variant={"contained"} color={"secondary"}>
                Рок
            </Button>
        </div>
    )
}

export default Genres;