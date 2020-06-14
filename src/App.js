import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './Home';
class App extends React.Component {
  render() {
      return (
        <div className = 'app'>
          <Route exact to = '/' component = {Home}/>
        </div>
      );
  }
}

export default App;