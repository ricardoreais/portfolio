import React, {Component} from 'react';
import './skills.css'

class Skills extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid mb-0">
        <div class="container">
          <h1 className="display-4 text-left mb-0">my skills.</h1>
          <hr/>
          <br/>
          <p className="text-left">JavaScript</p>
          <div className="progress mb-4">
            <div className="progress-bar w-85 text-dark" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
          <p className="text-left">C#</p>
          <div className="progress mb-5">
            <div className="progress-bar w-75 text-dark" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
          <p className="text-left">HTML</p>
          <div className="progress mb-5">
            <div className="progress-bar w-65 text-dark" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">65%</div>
          </div>
          <p className="text-left">CSS</p>
          <div className="progress mb-5">
            <div className="progress-bar w-55 text-dark" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">55%</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
