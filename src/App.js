import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import style from "./App.css"
import HeaderClass from "./components/Header/Header";
import SimpleTabs from "./components/Navbar/Tabs";
import {Route} from "react-router-dom";
import PlaylistContainer from "./components/Playlist/PlaylistContainer"
import Artist from "./components/Artist/Artist";
import ArtistContainer from "./components/Artist/ArtistContainer";

class App extends React.Component {
    componentDidMount() {
        document.title = 'Shoom Music Service';
    }

    render() {
        return (
            <div>
                <Container style={style} maxWidth={false}>
                    <HeaderClass/>
                    <Route path={'/home'} render={() => <SimpleTabs />} />
                    <Route path={'/playlist/:id'} component={PlaylistContainer} />
                    <Route path={'/artist/:id'} component={ArtistContainer} />
                </Container>
                {/*<BackToTop/>*/}
            </div>
        );
    }

}

export default App;
