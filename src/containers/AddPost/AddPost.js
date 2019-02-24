import React, {Component, Fragment} from 'react';
import axios from '../../axios-blog';
import PostForm from "../../components/PostForm/PostForm";
import {Container, Jumbotron} from "reactstrap";

class AddPost extends Component {
    addPost = post => {
        axios.post('posts.json', post).then(() => {
            this.props.history.replace('/');
        });
    };

    render() {
        return (
            <Fragment>
                <Jumbotron fluid>
                    <Container fluid>
                <h1 style={{textAlign: 'center',
                            fontSize: '80px'}}>Add new post</h1>
                <PostForm onSubmit={this.addPost}/>
                    </Container>
                </Jumbotron>
            </Fragment>
        );
    }
}

export default AddPost;