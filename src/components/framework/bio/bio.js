import React, {Component} from 'react';
import './bio.css';

class Bio extends Component {
  render() {
    return (
      <div className="row">
        <div className="col">
          <div className="jumbotron jumbotron-fluid mb-0">
            <div class="container">
              <h1 className="display-4 text-left mb-0">about me.</h1>
              <hr/>
              <br/>
              <p className="lead text-justify">
                engineer with experience developing. proficient with programming in C# and JavaScript, and adept with problem solving using computers
                ...by the way, I have a passion for design and minimalism.
                <br/>
                <br/>
                born in 96' in portugal, original from the coastal town of armação de pêra in the algarve district. 
                since my early days, I've always liked computers and playing games, eventually my interest for games faded and the interest for programming appeared. 
                nowadays I mainly enjoy music and skating.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Bio;
