import React, { Component } from 'react';
import Article from '../Components/Article';
import TextArea from '../Components/TextArea'
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

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
        const log = this.props.log
        let commentArea;
        if (log) {
            commentArea = <TextArea />
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
                {commentArea}
            </div>
        )
    }
}

export default withRouter(Post);