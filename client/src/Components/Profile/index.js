import React, { Component } from 'react'
import Results from '../Results';
import { ListGroup } from 'react-bootstrap';
import jwt_decode from 'jwt-decode'
import axios from 'axios';

class Profile extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            userArticles: []
        }
    }
    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username
        })
        console.log(jwt_decode(localStorage.usertoken).username)
        this.getArticles();
    }
    getArticles = async () => {
        try {
            const articleResponse = await axios.post(`/api/news/user`, {
                username: jwt_decode(localStorage.usertoken).username
            })
            console.log(articleResponse.data)
            this.setState({
                userArticles: articleResponse.data
            })

        } catch (error) {
            console.log(error)
        }
    }
    renderArticles = () => {
        return this.state.userArticles.map((article, index) => {
            return <tr key={index}><td>{`Comment ${index + 1}:`}</td><td>{article.title}</td></tr>
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='jumbotron mt-5'>
                    <div className='col-lg-12 mx-auto'>
                        <h1 className='text-center'>PROFILE</h1>
                    </div>
                    <table className='table col-md-10 mx-auto'>
                        <tbody>
                            <tr>
                                <td><strong>Username</strong></td>
                                <td><strong>{this.state.username}</strong></td>
                            </tr>
                            {this.renderArticles()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default Profile