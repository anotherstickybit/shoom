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
import {removeTrackById} from "../redux/PlaylistsPreviewReducer";

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
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.artistName}</TableCell>
                            <TableCell align="right">
                                <Tooltip title={'Remove'}>
                                    <IconButton size={"small"} aria-label="settings"
                                                onClick={() => {props.removeTrackById(row.id, props.playlistId)}}>
                                        {/*//todo: here*/}
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
    const exampleData = [
        {
            id: '1',
            name: 'name1',
            artist: 'artist1',
            length: '5:00'
        },
        {
            id: '2',
            name: 'name2',
            artist: 'artist2',
            length: '3:00'
        },
        {
            id: '3',
            name: 'name3',
            artist: 'artist3',
            length: '4:00'
        },
    ]

    return (
        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}/>
            </AppBar>
            <Paper elevation={3} className={classes.paper}>
                <Typography className={classes.typography} variant="h6" gutterBottom>
                    {props.currentPlaylist.name}
                </Typography>
                <TableFilling songList={props.currentPlaylist.trackList}
                              playlistId={props.currentPlaylist.id}
                              removeTrackById={props.removeTrackById}
                />
            </Paper>
        </div>
    )
}

export default Playlist;