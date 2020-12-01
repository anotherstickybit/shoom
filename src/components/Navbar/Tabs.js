import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Genres from "../Genres/Genres";
import ArtistsPreviewContainer from "../Artist/ArtistsPreviewContainer";
import PlaylistsPreviewsContainer from "../Main/PlaylistsPreviewsContainer";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    appBar: {
        backgroundColor: '#FE2E64',
    },
    get_button: {
        display: 'inline',
        width: 70
    },
    paper: {
        width: 'inherit',
        minHeight: '82vh',
        height: '100%',
        marginLeft: '-22px',
        marginRight: '-22px',
        backgroundColor: '#e8e8e8'
    },
    loginButton: {
        display: 'inline-block',
        marginTop: '9px',
        width: 90,
        height: 30,
        float: 'right',
        backgroundColor: '#2E3B55',
        '&:hover': {
            backgroundColor: '#475c85'
        },
    },
    toolBar: {
        minHeight: 36,
        width: "100%"
    },
    userNameTextField: {
        height: 15,
        width: 170
    },
    resize: {
        minHeight: 15,
    }

}));
const style = {
    flexGrow: 1,
    background: '#30475e'
};

export default function SimpleTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };


    return (
        <div className={classes.root}>
            <AppBar style={style} position="static">
                <Toolbar className={classes.toolBar}>
                    <Grid
                        justify="space-between"
                        container
                        spacing={24}
                    >
                        <Grid item>
                            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                <Tab label="Главное" {...a11yProps(0)}/>
                                <Tab label="Исполнители" {...a11yProps(1)} />
                            </Tabs>
                        </Grid>
                        <Grid item>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Paper elevation={3} className={classes.paper}>
                    <PlaylistsPreviewsContainer />
                </Paper>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Paper elevation={3} className={classes.paper}>
                    <ArtistsPreviewContainer />
                </Paper>
            </TabPanel>
        </div>
    );
}