import React, {Component} from 'react';
import {NotificationContainer} from "react-notifications";
import {Container} from "reactstrap";

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <Container></Container>
            </div>
        );
    }
}

export default App;