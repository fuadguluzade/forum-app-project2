import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import Posts from './Pages/Posts'
import Login from './Components/Login';
import Profile from './Components/Profile';

class App extends React.Component {
  state = {
    data: []
  }

  callBackFunc = dataFromChild => {
    this.setState({ data: dataFromChild })
  }

  render() {
    console.log(this.state.data)
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" render={() => <Home callBackFunc={this.callBackFunc} data={this.state.data} />}></Route>
            <Route exact path="/post/:id" render={() => <Post data={this.state.data} />}></Route>
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


