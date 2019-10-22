import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import CommentedPosts from './Pages/Posts'
import Login from './Components/Login';
import Profile from './Components/Profile';

class App extends Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/post/" component={Post} />
          <Route exact path="/posts/:id" component={CommentedPosts} />
        </Switch>
      </Router>
    );
  }
}

export default App;


