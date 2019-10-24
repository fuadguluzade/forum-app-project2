import React, { Component } from 'react';
import Article from '../Components/Article';
import TextArea from '../Components/TextArea'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Post extends Component {
    state = {
        article: {},
        // news: {},
        comments: [],
        userCommentField: ''
    }
    componentDidMount() {
        const newsArray = JSON.parse(localStorage.getItem('newsData'));
        const index = this.props.match.params.id;
        this.setState({
            article: newsArray[index]
        })
        const sendArticle = async () => {
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
        sendArticle();
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
            const commentResponse = await axios.post(`/api/comments/comment`,{publishedAt:this.state.article.publishedAt})
            console.log(commentResponse.data)
            
        } catch (error) {
            console.log(error)
        }
    }

    renderComments = () => {
        // return this.state.comments.map(comment => {
        //     return <li key={comment.id}>{comment.newsComment}</li>
        // })
    }

    handleInputChange = event => {
        //pull put value
        const { value } = event.target;
        this.setState({ userCommentField: value });
        //make a post request...why???

    }

    handleSubmit = event => {
        event.preventDefault();
        const sendComment = async () => {
            const { userCommentField: comment } = this.state;
            try {
                const article = this.state.article
                //why api is here??? send data find key, and send data......//req.body.newsComment
                await axios.post(`/api/comments/`, {
                    newsComment: comment,
                    publishedAt: article.publishedAt,
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
                <Row className="mb-3">
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
                <h4>Comments</h4>
                <ul>
                    {this.renderComments()}
                </ul>
                {commentArea}
            </div>
        )
    }
}

export default withRouter(Post);