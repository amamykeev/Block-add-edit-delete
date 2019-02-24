import React, {Component, Fragment} from 'react';
import axios from '../../axios-blog';
import PostForm from "../PostForm/PostForm";

class Edit extends Component {
    state = {
        post: null
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        axios.get('posts/' + id + '.json').then(response => {
            this.setState({post: response.data});
        })
    }

    getPostUrl = () => {
        const id = this.props.match.params.id;
        return `posts/${id}.json`;
    };

    editPost = post => {
        axios.put(this.getPostUrl(), post).then(() => {
            this.props.history.replace('/');
        })
    };


    render() {
        let form = <PostForm
            onSubmit={this.editPost}
            post={this.state.post}
        />;

        if (!this.state.post) {
            form = <div>Loading...</div>
        }
        return (
            <Fragment>
                <h1>Edit Post:</h1>
                {form}
            </Fragment>
        );
    }
}

export default Edit;