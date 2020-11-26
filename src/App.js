import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import style from "./App.css"
import HeaderClass from "./components/Header/Header";
import SimpleTabs from "./components/Navbar/Tabs";
import {Redirect, Route} from "react-router-dom";
import PlaylistContainer from "./components/Playlist/PlaylistContainer"
import ArtistContainer from "./components/Artist/ArtistContainer";
import AlbumContainer from "./components/Album/AlbumContainer";

class App extends React.Component {
    componentDidMount() {
        document.title = 'Shoom Music Service';
    }

    render() {
        return (
            <div>
                <Container style={style} maxWidth={false}>
                    <Redirect to={'/home'} />
                    <HeaderClass/>
                    <Route path={'/home'} render={() => <SimpleTabs />} />
                    <Route path={'/playlist/:id'} render={ () => <PlaylistContainer />} />
                    <Route path={'/artist/:id'} render={() => <ArtistContainer />} />
                    <Route path={'/album/:id'} render={() => <AlbumContainer />} />
                </Container>
                {/*<BackToTop/>*/}
            </div>
        );
    }

}

export default App;
