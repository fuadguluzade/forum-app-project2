import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { login } from './../../Utils/UserFunction'

class Favorites extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            username: decoded.username
        })
    }
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1>What do you like?</h1>
                            <div className='form-group'>
                                <label>I like...</label>
                                <input type='favorite'
                                    className='form-control'
                                    name='favorites'
                                    placeholder='Enter your favorite thing here!'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button type='submit'
                                className='btn btn-lg btn-primary btn-block'>
                                Sign in
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )

    }
}

export default Favorites 
