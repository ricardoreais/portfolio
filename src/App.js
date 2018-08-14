import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/framework/header/header';
import Intro from './components/framework/intro/intro';
import Bio from './components/framework/bio/bio';
import Skills from './components/framework/skills/skills';

var mockName = 'ricardo reais';
var mockTitle = 'software developer.';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={mockName}/>
        <Intro title={mockTitle}/>
        <Bio/>
        <Skills/>
      </div>
    );
  }
}

export default App;