import React from 'react';
import './App.css';
import Container from "@material-ui/core/Container";
import Header from "./components/Header";
import style from "./App.css"

class App extends React.Component {
    componentDidMount() {
        document.title = 'Shoom Music Service';
    }

    render() {
        return (
            <div>
                <Container style={style} maxWidth={false}>
                    <Header/>
                    {/*<SimpleTabs/>*/}
                </Container>
                {/*<BackToTop/>*/}
            </div>
        );
    }

}

export default App;
