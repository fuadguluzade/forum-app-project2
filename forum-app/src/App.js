import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Header';
import Input from './Input'
import RenderResults from './Results';
import Nav from './Nav';
import { CardDeck } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

class App extends Component {

  state = {
    data: []
  }

  getData = (dataFromChild) => {
    this.setState({ data: dataFromChild })
  }

  render() {
    return (
      <div>
        <Nav/>
        <Header />
        <Container>
          <Input giveData={this.getData} />
          <CardDeck>
            <RenderResults results={this.state.data} />
          </CardDeck>
        </Container>
      </div>
    )
  }
}

export default App;
