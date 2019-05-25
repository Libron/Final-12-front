import React, {Component} from 'react';
import {Alert, Button, Col, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {connect} from "react-redux";
import FormElement from "../../components/UI/Form/FormElement";
import {registerUser} from "../../store/actions/userActions";

class Register extends Component {
    state = {
        username: '',
        password: '',
        name: '',
        avatar: null
    };

    inputChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    fileChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.files[0]
        })
    };

    submitFormHandler = event => {
        event.preventDefault();

        const formData = new FormData();
        Object.keys(this.state).forEach(key => {
            formData.append(key, this.state[key]);
        });

        this.props.registerUser(formData);
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <div className="Register">
                <h2>Register New User</h2>
                {this.props.error && this.props.error.global && (
                    <Alert color="danger">
                        {this.props.error.global}
                    </Alert>
                )}
                <Form onSubmit={this.submitFormHandler}>
                    <FormElement
                        propertyName="name"
                        title="Display Name"
                        type="text"
                        value={this.state.name}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('name')}
                        placeholder="Enter Full Name"
                        autoComplete="new-name"
                    />

                    <FormElement
                        propertyName="username"
                        title="Username"
                        type="text"
                        value={this.state.username}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('username')}
                        placeholder="Enter your desired username"
                        autoComplete="new-username"
                    />

                    <FormElement
                        propertyName="password"
                        title="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.inputChangeHandler}
                        error={this.getFieldError('password')}
                        placeholder="Enter new secure password"
                        autoComplete="new-password"
                    />

                    <FormGroup row>
                        <Label sm={2} for="avatar">Avatar</Label>
                        <Col sm={10}>
                            <Input
                                type="file"
                                name="avatar" id="avatar"
                                onChange={this.fileChangeHandler}
                            />

                            {this.props.error && (
                                <FormFeedback>{this.getFieldError('avatar')}</FormFeedback>
                            )}
                        </Col>
                    </FormGroup>


                    <FormGroup row>
                        <Button type="submit" color="success" size="lg" block style={{marginTop: '15px'}}>Register</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.users.registerError
});

const mapDispatchToProps = dispatch => ({
    registerUser: userData => dispatch(registerUser(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);