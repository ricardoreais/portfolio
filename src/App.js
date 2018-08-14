import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './components/framework/header/header';
import Profile from './components/framework/profile/profile';
import Game from './components/game/game';

var name = 'ricardo reais';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header name={name}/>
          <Route exact path="/portfolio/" component={Profile} />
          <Route path="/portfolio/tictactoe" component={Game} />
        </div>
      </Router>
    );
  }
}

export default App;