import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Button, Typography} from "@material-ui/core";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";


const useStyles = makeStyles((theme) => ({
    typography: {
        display: 'inline-block',
        marginLeft: '40px',
        marginTop: '20px',
    },
    genreButton: {
        marginLeft: '40px',
        // width: '80px',
        height: '40px',
        marginTop: '20px'
    }
}))

const Genres = (props) => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        checkedA: false
    });


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <div>
            <Button className={classes.genreButton} size={"medium"} onClick={'#'}
                    variant={"contained"} color={"secondary"}>
                Рок
            </Button>
            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Secondary"
                />
            </FormGroup>
        </div>
    )
}

export default Genres;