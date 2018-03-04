import React, {Component} from 'react';
import './header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top App-header">
        <h1 className="App-title">{this.props.name}</h1>
      </nav>
    );
  }
}

export default Header;
