import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import {TableBody, TableContainer, TableHead, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import {NavLink} from "react-router-dom";

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

const TableFilling = (props) => {
    const classes = useStyles();
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} size={"small"}>
                <TableHead>
                    <TableRow>
                        <TableCell>Исполнитель</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.artistsList.map((row) => (
                        <TableRow key={row.id}>
                            <NavLink to={'/artist/' + row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                            </NavLink>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const ArtistsPreview = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                {!props.artistsList.length == 0 &&
                <div>
                    <Typography className={classes.typography} variant={"h6"} gutterBottom>
                        Исполнители:
                    </Typography>
                    <div>
                        <TableFilling artistsList={props.artistsList}/>
                    </div>
                </div>
                }
            </Paper>
        </div>
    )
}

export default ArtistsPreview;