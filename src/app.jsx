import React, {Component} from 'react';
import './app.css';
import OMDBSearch from './OMDBSearch';

const Router = require('react-router').Router;
const Route = require('react-router').Route;
const BrowserHistory = require('react-router').browserHistory;

class App extends Component {
  render(){
    return(
      <div className='bg'>
        <h1>Main App</h1>
        <Router history={BrowserHistory}>
          <Route path='search' component={OMDBSearch} />
        </Router>
      </div>
      );
  }
}

export default App;
