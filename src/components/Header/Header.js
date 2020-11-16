import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";
import {Field, reduxForm} from "redux-form";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import blue from "@material-ui/core/colors/blue";
import TextField from "@material-ui/core/TextField";
import {connect} from "react-redux";
import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    header: {
        height: '70px',
        background: '#e8e8e8'
    },
    h: {
        paddingLeft: '90px',
        paddingTop: '15px',
        color: '#f50057',

    },
    textField: {
        // display: 'inline-block',
        marginLeft: '270px',
        marginTop: '-40px',
        width: '450px',
    },
    searchButton: {
        marginLeft: '-35px',
        marginTop: '-65px',
    }
}));

const renderTextField = ({
                             className,
                             label,
                             input,
                             placeholder,
                             meta: {touched, invalid, error},
                             ...custom
                         }) => (

    <TextField
        className={className}
        label={label}
        placeholder={placeholder}
        error={touched && invalid}
        helperText={touched && error}
        {...input}
        {...custom}
        InputLabelProps={{
            shrink: true,
        }}
        variant="outlined"
        size="small"
        color="secondary"
    />

)

const Header = (props) => {

    const theme = createMuiTheme({
        palette: {
            primary: blue,
        },
    });

    const classes = useStyles();

    return (
        <AppBar id={'header'} position={'static'} className={classes.header} elevation={0}>
            <NavLink style={{textDecoration: 'none'}} to={'/home'}>
                <Typography className={classes.h} variant="h4">
                    Shoom &#9836;
                </Typography>
            </NavLink>
            <form onSubmit={props.handleSubmit}>
                <ThemeProvider theme={theme}>
                    <Field name="searchInput" component={renderTextField} label={'Поиск'}
                           className={classes.textField} placeholder={'Укажи имя исполнителя или название трека'}
                    />
                    <IconButton className={classes.searchButton} size={'small'} type={"submit"} color={"secondary"}>
                        <SearchIcon color={"action"}></SearchIcon>
                    </IconButton>
                </ThemeProvider>
            </form>
        </AppBar>
    );
}

const HeaderReduxForm = reduxForm({form: 'search'})(Header)

class HeaderClass extends React.Component {

    onSubmit(formData) {
        console.log(formData);
    }

    render() {
        return (
            <HeaderReduxForm onSubmit={this.onSubmit.bind(this)}
            />
        );
    }

}

const mapStateToProps = (state) => ({})

export default connect(mapStateToProps, {})(HeaderClass)