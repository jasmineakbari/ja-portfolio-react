import React from 'react';
import devConnect from '../../assets/images/';

function Portfolio() {
    return(
        <div className="container m-auto" id="portfolio">
        <div className="shadow-lg">
            <div className="row justify-content-center">
                <h2>My Projects</h2>
            </div>
            <div className="row justify-content-center">
                <div className="col-6 p-2">
                    <div className="p-2" data-aos="fade-right" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Taskmaster Pro</h3>
                        <a href="https://jasmineakbari.github.io/taskmaster-pro/" target="_blank">
                            <img id= "fifty" src="assets/images/taskmasterPro.png"/></a>
                        <p>An intuitive task manager with color coded deadlines</p>
                    </div>
                    <div className="p-2" data-aos="fade-right" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Work Day Scheduler</h3>
                        <a href="https://jasmineakbari.github.io/work-day-scheduler/" target="_blank">
                            <img id="fifty" src="assets/images/work-day-scheduler.png"/></a>
                        <p>A simple Work Day Planner, color coded to show upcoming, current and past events</p>
                    </div>
                    <div className="p-2" data-aos="fade-right" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Explore Outdoors</h3>
                        <a href="https://jasmineakbari.github.io/Explore-Outdoors/" target="_blank">
                            <img id="twentyFive" src="assets/images/explore-outdoors.png"/></a>
                        <div>
                            <p>A group project: Travel Destination page to help users determine a new vacation location with a quiz and flight widget.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className="p-2" data-aos="fade-left" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Weather Hub</h3>
                        <a href="https://jasmineakbari.github.io/weather-hub/" target="_blank">
                            <img id="fifty" src="assets/images/weather-hub.png"/></a>
                        <p>A Weather Application page with 8 day forecast</p>
                    </div>
                    <div className="p-2" data-aos="fade-left" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Run Buddy</h3>
                        <a href="https://jasmineakbari.github.io/run-buddy/" target="_blank">
                            <img id="twentyFive" src="assets/images/run-buddy.png"/></a>
                        <div>
                            <p>A sample launch page, with a contact form, personal trainer cards and company mission.</p>
                        </div>
                    </div>
                    <div className="p-2" data-aos="fade-left" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Dev-Connect</h3>
                        <a href="https://jasmineakbari.github.io/weather-hub/" target="_blank">
                            <img id="fifty" src={devConnect} /></a>
                        <p>A Social Media Application geared towards Web Developers</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Portfolio;