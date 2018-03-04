import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/framework/header/header';
import Intro from './components/framework/intro/intro';
import Bio from './components/framework/bio/bio';

var mockName = 'ricardo reais';
var mockTitle = 'software developer.';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header name={mockName}/>
        <div className="row">
          <div className="col">
            <Intro title={mockTitle}/>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Bio/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
