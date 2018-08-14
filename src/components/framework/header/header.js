import React, {Component} from 'react';
import './header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top App-header">
        <h1 className="App-title">{this.props.name}</h1>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tictactoe">Game</Link>
              </li>
            </ul>
          </div>
      </nav>
    );
  }
}

export default Header;