import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Paper from "@material-ui/core/Paper";
import {TableBody, TableContainer, TableHead, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
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
        content: {

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
                {props.artistsList.length > 0 &&
                <div className={classes.content}>
                    <Typography className={classes.typography} variant={"h6"} gutterBottom>
                        Исполнители:
                    </Typography>
                    <div>
                        <TableFilling artistsList={props.artistsList}/>
                    </div>
                </div>
                }
        </div>
    )
}

export default ArtistsPreview;