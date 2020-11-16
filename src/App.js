import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import style from "./App.css"
import HeaderClass from "./components/Header/Header";
import SimpleTabs from "./components/Navbar/Tabs";
import {Route} from "react-router-dom";
import Playlist from "./components/Playlist/Playlist";

class App extends React.Component {
    componentDidMount() {
        document.title = 'Shoom Music Service';
    }

    render() {
        return (
            <div>
                <Container style={style} maxWidth={false}>
                    <HeaderClass/>
                    <Route path={'/home'} component={SimpleTabs} />
                    <Route path={'/playlist'} component={Playlist} />
                </Container>
                {/*<BackToTop/>*/}
            </div>
        );
    }

}

export default App;
