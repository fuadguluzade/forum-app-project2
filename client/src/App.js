import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import CommentedPosts from './Pages/Posts'
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Favorites from './Components/Favorites';
import Footer from './Components/Footer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      log: true
    }
    this.login = this.login.bind(this);
  }
  callBackFunc = dataFromChild => {
    this.setState({ data: dataFromChild })
  }

  login() {
    this.setState({
      log: true
    });
  }

  logout() {
    this.setState({
      log: false
    });
  }

  render() {
    return (
      <div>      
      <Router>
          <Nav log={this.state.log}/>
          <Switch>
            <Route exact path="/login" render={() => <Login action={this.login} log={this.state.log} />}></Route>
            <Route exact path="/profile" render={() => <Profile action={this.login} log={this.state.log} />}></Route>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post/:id" render={() => <Post log={this.state.log} />}></Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/post/" component={Post} />
            <Route exact path="/posts/:id" component={CommentedPosts} />
            <Route exact path="/favorites" component={Favorites}/>
          </Switch>          
      </Router>
      <Footer/>
      </div>
    );
  }
}

export default App;


