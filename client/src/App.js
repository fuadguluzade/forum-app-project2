import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import Posts from './Pages/Posts'

function App() {
  return (
    <Router>
      <div>
        <Nav/>
          <Route exact path="/" component={Home} />
          <Route exact path="/post/" component={Post} />
      </div>
    </Router>
  );
}

export default App;


