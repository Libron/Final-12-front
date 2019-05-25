import React, {Component} from 'react';
import FormElement from "../UI/Form/FormElement";
import {Button, Col, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import connect from "react-redux/es/connect/connect";
import {uploadPhoto} from "../../store/actions/galleryActions";

class UploadPhotoForm extends Component {
    state = {
        title: '',
        image: null
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

        this.props.uploadPhoto(formData);
    };

    getFieldError = fieldName => {
        return this.props.error && this.props.error.errors && this.props.error.errors[fieldName] && this.props.error.errors[fieldName].message;
    };

    render() {
        return (
            <Form onSubmit={this.submitFormHandler}>
                <h2>Upload photo to your gallery</h2>

                <FormElement
                    propertyName="title"
                    title="Title"
                    type="text"
                    value={this.state.title}
                    onChange={this.inputChangeHandler}
                    error={this.getFieldError('title')}
                    placeholder="Enter your desired title"
                    autoComplete="new-title"
                />

                <FormGroup row>
                    <Label sm={2} for="image">Image</Label>
                    <Col sm={10}>
                        <Input
                            type="file"
                            name="image" id="image"
                            onChange={this.fileChangeHandler}
                        />

                        {this.props.error && (
                            <FormFeedback>{this.getFieldError('image')}</FormFeedback>
                        )}
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Button type="submit" color="success" size="lg" block style={{marginTop: '15px'}}>Upload now</Button>
                </FormGroup>
            </Form>
        );
    }
}

const mapStateToProps = state => ({
    error: state.gallery.error
});

const mapDispatchToProps = dispatch => ({
    uploadPhoto: data => dispatch(uploadPhoto(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPhotoForm);