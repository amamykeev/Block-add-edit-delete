import React, {Component, Fragment} from 'react';
import axios from '../../axios-blog';
import {Button, Container, Jumbotron} from "reactstrap";
import {NavLink} from "react-router-dom";

class ReadMore extends Component {

    state = {
        post: null
    };

    getPostUrl = () => {
        const id = this.props.match.params.id;
        return `posts/${id}.json`;

    };

    componentDidMount() {
        axios.get(this.getPostUrl()).then(response => {
            this.setState({post: response.data});
        })
    }

    deletePost = () => {
        axios.delete(this.getPostUrl()).then(() => {
            this.props.history.push('/')

        })
    };


    render() {
        return (
            this.state.post ? <Fragment>
                <Jumbotron fluid>
                    <Container fluid>
                <h1 style={{textAlign: 'center', marginBottom: '70px'}}>Read More:</h1>
                        <h3><span style={{fontSize: '20px'}}> Title: </span>{this.state.post.title}</h3>
                        <p><span style={{fontSize: '20px',}}> Description: </span>{this.state.post.description}</p>
                <NavLink to={"/posts/" + this.props.match.params.id + '/edit'}>
                    <Button style={{marginTop: '40px', marginRight: '12px'}} color="warning">To Change</Button>
                </NavLink>
                <Button style={{marginTop: '40px'}} color="danger" onClick={this.deletePost}>Delete</Button>
                    </Container>
                </Jumbotron>
            </Fragment> : null
        );
    }
}

export default ReadMore;