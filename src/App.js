import React, {Component} from 'react';
import {NotificationContainer} from "react-notifications";
import {Container} from "reactstrap";

import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <Toolbar />
                <Container></Container>
            </div>
        );
    }
}

export default App;