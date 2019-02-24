import React, {Component} from 'react';

import './PostForm.css';
import {Button, Col, Form, Input, Label} from "reactstrap";
import FormGroup from "reactstrap/es/FormGroup";

class PostForm extends Component {

    constructor(props) {
        super(props);

        if (props.post) {
            this.state = {
                title: this.props.post.title,
                description: this.props.post.description
            }
        } else {
            this.state = {
                title: '',
                description: ''
            };
        }
    }

    valueChanged = event => {
        this.setState({[event.target.name]: event.target.value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.onSubmit({...this.state});
    };


    render() {
        return (
            <Form className="PostForm" onSubmit={this.submitHandler}>
                <FormGroup row >
                    <Label for="title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input type="text" name="title"
                               value={this.state.title} onChange={this.valueChanged}
                        />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="description" sm={2}>Description</Label>
                    <Col sm={10}>
                        <Input type="textarea" name="description"
                               value={this.state.description} onChange={this.valueChanged}
                        />
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col sm={{size: 20, offset: 5}}>
                        <Button style={{marginLeft: '700%'}} inverse color="info" type="submit">Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}

export default PostForm;