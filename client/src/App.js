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

  render() {
    return (
      <Router>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post/:id" component={Post}></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/post/" component={Post} />
            <Route exact path="/posts/:id" component={CommentedPosts} />
            <Route exact path="/favorites" component={Favorites}/>
          </Switch>
          <Footer/>
      </Router>
    );
  }
}

export default App;


