import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//@import url("https://use.typekit.net/wok7cdm.css");

import { Home } from './Home';
import Thread from './Thread';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>This is the header</h1>
          </header>
          {/*Render the newly fetched data inside of this.state.data */}
          <p className="App-intro">{this.state.data}</p>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/thread" component={Thread} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
