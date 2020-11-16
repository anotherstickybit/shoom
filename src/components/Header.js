import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const Header = () => {
    const useStyles = makeStyles((theme) => ({
        header: {
            height: '70px',
            background: '#2E3B55'
        },
        h: {
            paddingLeft: '90px',
            paddingTop: '20px',
        }
    }));
    const classes = useStyles();

    return (
        <AppBar id={'header'} position={'static'} className={classes.header} elevation={0}>
            <Typography className={classes.h} variant="h5">
                Shoom
            </Typography>
        </AppBar>
    );
}

export default Header;