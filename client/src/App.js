import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/home'
import Post from './Pages/Post'
import Posts from './Pages/Posts'
import Login from './Components/Login';
import Profile from './Components/Profile';
import Register from './Components/Register';
import Favorites from './Components/Favorites';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      log: false
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
    console.log(this.state.data)
    return (
      <Router>
        <div>
          <Nav log={this.state.log}/>
          <Switch>
            <Route exact path="/" render={() => <Home callBackFunc={this.callBackFunc} data={this.state.data} />}></Route>
            <Route exact path="/post/:id" render={() => <Post data={this.state.data} />}></Route>
            <Route exact path="/login" render={() => <Login action={this.login} log={this.state.log} />}></Route>
            <Route exact path="/profile" render={() => <Profile action={this.login} log={this.state.log} />}></Route>
            <Route exact path="/register" component={Register} />
            <Route exact path="/post/" component={Post} />
            <Route exact path="/posts/" component={Posts} />
            <Route exact path="/favorites" component={Favorites}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;


