import './intro.css';
import bgImg from '../../styles/images/background.jpg';
import React, { Component } from 'react';

class Intro extends Component {
  render() {
    return (
        <div>
            <h1 className="intro-title font-weight-bold text-left">{this.props.title}</h1>
            <div id="bg">
                <img src={bgImg} alt=""/>
            </div>
        </div>
    );
  }
}

export default Intro;
