import React, { Component } from 'react';
import Article from '../Components/Article';
import TextArea from '../Components/TextArea'

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
            <div style={{position: "relative"}}>
            <Article article={this.state.article}></Article>
            <TextArea/>
            </div>
        )
    }
}

export default Post;