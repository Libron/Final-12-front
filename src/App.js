import React, {Component} from 'react';
import {Container} from "reactstrap";
import {connect} from "react-redux";
import {withRouter} from "react-router";
import {NotificationContainer} from "react-notifications";

import Toolbar from "./components/UI/Toolbar/Toolbar";
import {logoutUser} from "./store/actions/userActions";

import './App.css';
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div className="App">
                <NotificationContainer/>
                <Toolbar user={this.props.user} logout={this.props.logoutUser} />
                <Container>
                    <Routes user={this.props.user} />
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.users.user,
});

const mapDispatchToProps = dispatch => ({
    logoutUser: () => dispatch(logoutUser())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));