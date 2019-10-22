import React, { Component } from 'react';
import axios from 'axios';
// import API from '../Utils/API';
// import { Container } from 'react-bootstrap';
// import { CardDeck } from 'react-bootstrap';
// import { Alert } from 'react-bootstrap';

class CommentedPosts extends Component {
    state ={
        news: {},
        comments:[],
        userCommentField:''
    }

    componentDidMount = () => {
        this.getComments();
    }

    
    getComments = async () => {
        console.log(this.props);
        const { id } = this.props.match.params;
        try {
            const newsResponse = await axios.get(`/api/news/${id}`)
            const commentResponse = await axios.get(`/api/comments/${id}`)
            console.log(commentResponse);
            console.log(newsResponse);
            const news = newsResponse.data;
            const comments = commentResponse.data
            this.setState({news, comments, userCommentField: ''});
        } catch(error) {
            console.log(error)
        }
    }
    
    renderComments = () => {
        return this.state.comments.map(comment => {
            return <li key={comment.id}>{comment.newsComment}</li>
        })
    }

    handleInputChange = event => {
        //pull put value
        const {value} = event.target;
        this.setState({ userCommentField: value });
        //make a post request...why???
        
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { userCommentField: comment } = this.state;
        try {
            console.log('Heeh eee');
            //why api is here??? send data find key, and send data......//req.body.newsComment
            const response = await axios.post(`/api/news/${this.props.match.params.id}`, { newsComment: comment });
            this.getComments();
        } catch(e) {
            console.log(e)
        }
    }
    
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>News Detail Page</h1>
                <h3>{this.state.news.news}</h3>
                <h4>Comments</h4>
                <ul>
                    {this.renderComments() }
                </ul>

                <form>
                <div className="form-group">
                        <label for="exampleInputEmail1">Leave a Comment</label>
                        <input
                        type="text" 
                        //attach to the state//
                        value={this.state.userCommentField}
                        onChange={this.handleInputChange}
                        className="form-control" 
                        id="exampleInputEmail1" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email" />
                    </div>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default CommentedPosts;