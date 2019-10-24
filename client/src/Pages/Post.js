import React, { Component } from 'react';
import Article from '../Components/Article';
import TextArea from '../Components/TextArea'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import jwt_decode from 'jwt-decode'

class Post extends Component {
    constructor() {
        super()
        this.state = {
            article: {},
            // news: {},
            comments: [],
            userCommentField: '',
            username: ''
        }
    }
    async componentWillMount() {
        console.log(this.props.log)
        if (this.props.log) {
            const token = localStorage.usertoken
            const decoded = jwt_decode(token)
            this.setState({
                username: decoded.username
            })
        }
        const newsArray = JSON.parse(localStorage.getItem('newsData'));
        const index = this.props.match.params.id;
        this.setState({
            article: newsArray[index]
        })
        try {
            const article = newsArray[index]
            await axios.post(`/api/news/`, {
                author: article.author,
                content: article.content,
                title: article.title,
                description: article.description,
                publishedAt: article.publishedAt,
                source: article.source.name,
                url: article.url,
                urlToImage: article.urlToImage
            });
        } catch (e) {
            console.log(e)
        }        
    }

    async componentDidMount() {
        this.getArticleComments();
    }

    // getComments = async () => {
    //     console.log(this.props);
    //     const { id } = this.props.match.params;
    //     try {
    //         const newsResponse = await axios.get(`/api/news/${id}`)
    //         const commentResponse = await axios.get(`/api/comments/${id}`)
    //         console.log(commentResponse);
    //         console.log(newsResponse);
    //         const news = newsResponse.data;
    //         const comments = commentResponse.data
    //         this.setState({ news, comments, userCommentField: '' });
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    getArticleComments = async () => {
        try {
            const commentResponse = await axios.post(`/api/comments/comment`, {
                publishedAt: this.state.article.publishedAt
            })
            const articleComments = [];
            for (let i = 0; i < commentResponse.data.length; i++) {
                articleComments.push(commentResponse.data[i])
            }
            this.setState({
                comments: articleComments
            })
            console.log(this.state.comments)

        } catch (error) {
            console.log(error)
        }
    }

    renderPreviousComments = () => {
        return this.state.comments.map((comment, index) => {
            return <ListGroup.Item key={index}>{`${comment.username}: ${comment.newsComment}`}</ListGroup.Item>
        })
    }

    handleInputChange = event => {
        //pull put value
        const { value } = event.target;
        this.setState({ userCommentField: value });
        //make a post request...why???

    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.username)
        const sendComment = async () => {
            const { userCommentField: comment } = this.state;
            try {
                const article = this.state.article
                await axios.post(`/api/comments/`, {
                    newsComment: comment,
                    publishedAt: article.publishedAt,
                    username: this.state.username
                });

            } catch (e) {
                console.log(e)
            }
        }
        sendComment();
        this.getArticleComments();
    }

    render() {
        const log = this.props.log
        let commentArea;
        if (log) {
            commentArea =
                <TextArea
                    handleInputChange={this.handleInputChange}
                    handleSubmit={this.handleSubmit}
                />
            // <form>
            //     <div className="form-group">
            //         <label for="exampleInputComment">Leave a Comment</label>
            //         <input
            //             type="text"
            //             //attach to the state//
            //             value={this.state.userCommentField}
            //             onChange={this.handleInputChange}
            //             className="form-control"
            //             id="exampleInputComment"
            //             aria-describedby="emailHelp"
            //             placeholder="Enter Comments" />
            //     </div>
            //     <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            // </form>
        } else {
            commentArea = <Container>
                <Row className="mb-5">
                    <Col>
                        <ListGroup>
                            <ListGroup.Item>Login to Comment on this Article!</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        }
        return (
            <div style={{ position: "relative" }}>
                <Article article={this.state.article}></Article>
                <Container>
                    <Row className="mb-3">
                        <Col>
                            <h4>Comments</h4>
                            <ListGroup>
                                {this.renderPreviousComments()}
                            </ListGroup>
                            {commentArea}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(Post);