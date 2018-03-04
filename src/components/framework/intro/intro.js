import './intro.css';
import React, {Component} from 'react';

class Intro extends Component {
	render() {
		return (
			<div className="row">
				<div className="col">
					<div className="jumbotron jumbotron-fluid intro-jumbotron m-0">
						<div class="container">
							<h1 className="intro-title font-weight-bold text-left">{this.props.title}</h1>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
