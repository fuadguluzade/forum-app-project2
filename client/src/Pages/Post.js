import React, { Component } from 'react';
import Article from '../Components/Article';

class Post extends Component {
    state = {
        article: {}
    }
    componentDidMount() {
        const newsArray = JSON.parse(localStorage.getItem('newsData'));
        const index = this.props.match.params.id;
        this.setState({
            article: newsArray[index]
        })
    }



    render() {
        return (
            <Article article={this.state.article}></Article>
        )
    }
}

export default Post;