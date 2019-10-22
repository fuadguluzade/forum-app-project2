import React, { Component } from 'react';

class Post extends Component {
    componentDidMount() {
        let a = this.props;
        console.log(a)

        let b = this.props.match;
        console.log(b)
    }



    render() {
        return (<h1>Hello</h1>)
    }
}

export default Post;