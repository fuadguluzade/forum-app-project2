import React, { Component } from 'react';

class Post extends Component {

    componentDidMount() {
        let a = this.props.match.params;
        console.log(a)
    }



    render() {
        return (<h1>Hello</h1>)
    }
}

export default Post;