import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import {TableBody, TableContainer, TableHead, Typography} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import {NavLink} from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import SaveIcon from "@material-ui/icons/Save";
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

const MenuWithProps = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const {enqueueSnackbar} = useSnackbar();

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

const TracksTable = (props) => {
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

const ArtistsTable = (props) => {
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


const SearchResult = (props) => {
    const classes = useStyles();
    return (
        <SnackbarProvider maxSnack={3}>
            <div className={classes.root}>
                <AppBar style={style} position="static">
                    <Toolbar className={classes.toolBar}/>
                </AppBar>
                <Paper elevation={3} className={classes.paper}>
                    <div>
                        <Typography className={classes.typography} variant={"h6"}>
                            Результаты поиска:
                        </Typography>
                        {props.artists.length > 0 &&
                        <ArtistsTable artistsList={props.artists}/>
                        }
                        {props.tracks.length > 0 &&
                        <TracksTable songList={props.tracks} playlists={props.playlists}
                                     addTrackById={props.addTrackById}/>
                        }
                    </div>
                </Paper>
            </div>
        </SnackbarProvider>
    )
}


export default SearchResult;