import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import {Typography} from "@material-ui/core";

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
        }
    }
))

const style = {
    flexGrow: 1,
    background: '#30475e'
};


const SearchResult = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}/>
            </AppBar>
            <Paper elevation={3} className={classes.paper}>
                <Typography variant={"h6"}>
                    Text
                </Typography>
            </Paper>
        </div>
    )
}


export default SearchResult;