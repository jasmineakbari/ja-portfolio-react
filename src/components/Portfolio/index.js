import React from 'react';
import devConnect from '../../assets/images/dev-connect.PNG';
import exploreOutdoors from '../../assets/images/explore-outdoors.PNG';
import taskmaster from '../../assets/images/taskmasterPro.PNG';
import workday from '../../assets/images/work-day-scheduler.PNG';
import weatherHub from '../../assets/images/weather-hub.PNG';
import photoPort from '../../assets/images/photo-port.PNG'

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
                            <img id= "fifty" src={taskmaster} style={{ width: "80%" }} alt="Taskmaster Pro" /></a>
                        <p>An intuitive task manager with color coded deadlines</p>
                    </div>
                    <div className="p-2" data-aos="fade-right" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Work Day Scheduler</h3>
                        <a href="https://jasmineakbari.github.io/work-day-scheduler/" target="_blank">
                            <img id="fifty" src={workday} style={{ width: "80%" }} alt="Work Day Scheduler" /></a>
                        <p>A simple Work Day Planner, color coded to show upcoming, current and past events</p>
                    </div>
                    <div className="p-2" data-aos="fade-right" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Explore Outdoors</h3>
                        <a href="https://jasmineakbari.github.io/Explore-Outdoors/" target="_blank">
                            <img id="twentyFive" src={exploreOutdoors} style={{ width: "80%" }} alt="Explore Outdoors" /></a>
                        <div>
                            <p>A group project: Travel Destination page to help users determine a new vacation location with a quiz and flight widget.</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 p-2">
                    <div className="p-2" data-aos="fade-left" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Weather Hub</h3>
                        <a href="https://jasmineakbari.github.io/weather-hub/" target="_blank">
                            <img id="fifty" src={weatherHub} style={{ width: "80%" }} alt="Weather Hub" /></a>
                        <p>A Weather Application page with 8 day forecast</p>
                    </div>
                    <div className="p-2" data-aos="fade-left" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Photo Port</h3>
                        <a href="https://jasmineakbari.github.io/photo-port/" target="_blank">
                            <img id="twentyFive" src={photoPort} style={{ width: "80%", height: "50%" }} alt="Photo Port" /></a>
                        <div>
                            <p>A sample Photography Portfolio using React.</p>
                        </div>
                    </div>
                    <div className="p-2" data-aos="fade-left" data-aos="zoom-in" data-aos-duration="3000">
                        <h3>Dev-Connect</h3>
                        <a href="https://dev-connect-ac.herokuapp.com/login" target="_blank">
                            <img id="fifty" src={devConnect} style={{ width: "80%" }} alt="Dev Connect"/></a>
                        <p>A Social Media Application geared towards Web Developers</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Portfolio;