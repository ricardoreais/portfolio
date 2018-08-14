import React, {Component} from 'react';
import './App.css';
import Header from './components/framework/header/header';
import Intro from './components/framework/intro/intro';
import Bio from './components/framework/bio/bio';
import Skills from './components/framework/skills/skills';
import Game from './components/game/game';

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
        <Game />
      </div>
    );
  }
}

export default App;