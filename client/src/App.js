import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import Posts from './Pages/Posts'
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Favorites from './Components/Favorites';

function App() {
  return (
    <Router>
      <div>
        <Nav/>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/post/" component={Post} />
          <Route exact path="/posts/" component={Posts} />
          <Route exact path="/favorites" component={Favorites}/>
      </div>
    </Router>
  );
}

export default App;


