import React, {Component} from 'react';
import {Button, Card, CardBody, CardTitle, Col, Row} from "reactstrap";
import axios from '../../axios-blog';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import Spinner from "../../components/UI/Spinner/Spinner";
import PostForm from "../../components/PostForm/PostForm";


class PostList extends Component {
    state = {
        posts: [],
        loading: true
    };

    componentDidMount() {
        axios.get('posts.json').then(response => {
            if(!response.data) return;

            const fetchedPosts = Object.keys(response.data).map(key => {
                return {
                    ...response.data[key],
                    id: key
                }
            });

            this.setState({posts: fetchedPosts});
        }).finally(() => {
        this.setState({loading: false});
    });

    }

    readMore = (id) => {
        this.props.history.push(`/posts/${id}`);
    };

    render() {

        if (this.state.loading) {
            return <Spinner />;
        }

            if (this.state.posts) {
                return this.state.posts.map((post, index) => (
                    <Card key={index} inverse style={{ margin: "20px 0 0 140px", width: "50em"}}>
                        <CardBody>
                            <CardTitle style={{color: '#000'}}>{post.title}</CardTitle>
                            <Button onClick={() => this.readMore(post.id)}>Read More »</Button>
                        </CardBody>
                    </Card>
                ));
            }

        return this.state.posts.map(post => (
            <ErrorBoundary  key={post.id}>
            <Row style={{marginTop: "20px"}}>
                <Col sm={3}>
                    <h1>Posts:</h1>
                    <PostForm/>
                </Col>
            </Row>
            </ErrorBoundary>
        ));
    }
}

export default withErrorHandler(PostList, axios);