import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Grid, TableBody, TableContainer, TableHead, Typography} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';

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

const TableFilling = (props) => {
    const classes = useStyles();
    return (
        <TableContainer className={classes.tableContainer} component={Paper}>
            <Table className={classes.table} size={"small"}>
                <TableHead>
                    <TableRow>
                        <TableCell>Композиция</TableCell>
                        <TableCell align="right">Исполнитель</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.songList.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.track.name}
                            </TableCell>
                            <TableCell align="right">{row.track.artistName}</TableCell>
                            <TableCell align="right">
                                <Tooltip title={'Удалить'}>
                                    <IconButton size={"small"} aria-label="settings"
                                                onClick={() => {
                                                    props.removeTrackById(row.id, props.playlistId)
                                                }}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

const Playlist = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}/>
            </AppBar>
            <Paper elevation={3} className={classes.paper}>
                {props.currentPlaylist.name &&
                <div>
                    <Typography className={classes.typography} variant="h6" gutterBottom>
                        {props.currentPlaylist.name}
                    </Typography>
                    <TableFilling songList={props.currentPlaylist.trackList}
                                  playlistId={props.currentPlaylist.id}
                                  removeTrackById={props.removeTrackById}
                    />
                </div>
                }
            </Paper>
        </div>
    )
}

export default Playlist;