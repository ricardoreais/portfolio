import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/framework/header/header';
import Intro from './components/framework/intro/intro';

var mockName = 'ricardo reais';
var mockTitle = 'software developer.';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header name={mockName}/>
        <Intro title={mockTitle}/>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
