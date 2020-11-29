import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import {TableBody, TableContainer, TableHead, Typography} from "@material-ui/core";
import AlbumCard from "./AlbumCard";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from '@material-ui/icons/Save';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {SnackbarProvider, useSnackbar} from 'notistack';

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
        table: {},
        tableContainer: {
            display: 'inline-block',
            marginTop: '50px',
            marginBottom: '20px',
            width: 650,
            marginLeft: '20px'
        },
        menu: {}
    }
))

const style = {
    flexGrow: 1,
    background: '#30475e'
};

const MenuWithProps = (props) => {
    const {enqueueSnackbar} = useSnackbar();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSave = (id, rowId, variant) => {
        props.addTrackById(id, rowId);
        enqueueSnackbar('Track added to playlist!', {variant});
        handleClose();
    }

    const classes = useStyles();

    return (
        <>
            <IconButton size={"small"} aria-label="settings"
                        onClick={handleClick}
            >
                <SaveIcon/>
            </IconButton>
            <Menu className={classes.menu}
                  id="long-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
            >
                {props.playlists.map((item) => (
                    <MenuItem
                        onClick={() => handleSave(item.id, props.rowId, 'success')}
                    >
                        {item.name}
                    </MenuItem>
                ))}
            </Menu>
        </>
    )

}

const TableFilling = (props) => {
    const classes = useStyles();


    return (
        <div>
            <TableContainer className={classes.tableContainer} component={Paper}>
                <Table className={classes.table} size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Композиция</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.songList.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">
                                    <MenuWithProps playlists={props.playlists}
                                                   rowId={row.id} addTrackById={props.addTrackById}/>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

const Album = (props) => {
    const classes = useStyles();

    return (
        <SnackbarProvider maxSnack={3}>
            <div className={classes.root}>
                <AppBar style={style} position="static">
                    <Toolbar className={classes.toolBar}/>
                </AppBar>
                <Paper elevation={3} className={classes.paper}>
                    {props.currentAlbum.id &&
                    <div>
                        <AlbumCard albumId={props.currentAlbum.id}
                                   artistName={props.currentAlbum.artist.name}
                                   imgURL={props.currentAlbum.imgURL}
                                   albumName={props.currentAlbum.name}
                        />
                        <TableFilling songList={props.currentAlbum.trackList} playlists={props.playlists}
                                      addTrackById={props.addTrackById}/>
                    </div>
                    }
                </Paper>
            </div>
        </SnackbarProvider>
    )

}

export default Album;