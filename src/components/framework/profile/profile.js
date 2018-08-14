import React, { Component } from 'react';
import Intro from './intro/intro';
import Bio from './bio/bio';
import Skills from './skills/skills';

var title = 'software developer.';

class Profile extends Component {
    render() {
        return (
            <div>
                <Intro title={title} />
                <Bio/>
                <Skills/>                
            </div>
        );
    }
}

export default Profile;