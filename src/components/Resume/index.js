import React from 'react';
import resumeDoc from '../../assets/images/resume.PNG';

function Resume() {
    return(
        <div id="resume">
            <a href={resumeDoc} target="_blank" id="resumeLink">
                <btn type="submit" id="download">View and Download Resume</btn>
            </a>
        </div>
    );
}

export default Resume;