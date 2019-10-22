import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import Posts from './Pages/Posts'

class App extends Component {



  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/" component={Post} />
          <Route exact path="/posts/" component={Posts} />
        </Switch>
      </Router>
    );
  }
}

export default App;


