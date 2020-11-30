import React from "react";
import TextField from "@material-ui/core/TextField";
import {makeStyles} from "@material-ui/core/styles";
import {createMuiTheme} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import {Field, reduxForm} from "redux-form";
import blue from "@material-ui/core/colors/blue";
import {connect} from "react-redux";
import {addNewPlaylist} from "../redux/PlaylistsPreviewReducer";

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    openPopupButton: {
        marginTop: '20px',
        color: 'white'
    },
    textField: {
        margin: 4,
    },
    addButton: {
        marginTop: '10px',
        marginLeft: '4px',
        color: 'white',
        backgroundColor: '#2E3B55',
        '&:hover': {
            backgroundColor: '#475c85'
        },
    },
    popover: {
        marginTop: 5
    },
}));

const renderTextField = ({
                             label,
                             input,
                             meta: {touched, invalid, error},
                             ...custom
                         }) => (
    <TextField
        label={label}
        placeholder={label}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        variant="outlined"
        size="small"
        color={"secondary"}
    />
)

const AddNewPlaylist = (props) => {
    const theme = createMuiTheme({
        palette: {
            primary: blue,
        },
    });
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Button className={classes.openPopupButton} color="secondary" aria-describedby={id}
                    variant="contained"
                    onClick={handleClick}>
                Добавить
            </Button>
            <Popover
                id={id}
                open={open}
                className={classes.popover}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <Typography className={classes.typography}>
                    <form onSubmit={props.handleSubmit}>
                        <div>
                            <ThemeProvider theme={theme}>
                                <Field name="playlistName" component={renderTextField} label="Имя плейлиста"
                                       className={classes.textField}/>
                            </ThemeProvider>
                        </div>
                        <div>
                            <Button className={classes.addButton}
                                    aria-describedby={id}
                                    variant="contained" type={'submit'} onClick={handleClose}>Сохранить</Button>
                        </div>
                    </form>
                </Typography>
            </Popover>
        </div>
    )
}

const AddNewPlaylistReduxForm = reduxForm({form: 'addPlaylist'})(AddNewPlaylist)

class AddPlaylist extends React.Component {

    onSubmit(formData) {
        this.props.addNewPlaylist(formData.playlistName)
    }

    render() {
        return (
            <AddNewPlaylistReduxForm onSubmit={this.onSubmit.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {

}

export default connect(mapStateToProps, {addNewPlaylist})(AddPlaylist)