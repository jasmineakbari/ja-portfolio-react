import React from 'react';
import profile from '../../assets/images/profile-1.jpg';

function About() {
    return(
        <div className="container-fluid">
            <div className="container shadow-lg" id="about">
                <div className="row mb-5 rounded">
                    <div className="col-sm-4 p-4 m-auto aboutText">
                        <h2 className="text-center">About Me</h2>
                        <p>Born and raised in San Diego, CA I made my way to Florida in July 2019 
                            and have been here ever since. With a Finance and compliance background, 
                            I found my passion in coding after taking some free online courses; leading me to 
                            make my full transition to front end web development and achieveing a 
                            certifcation from UCF for Full Stack Web Development. I have an 
                            ever-increasing skill set and desire to grow in my career fueled by my
                            passion to create!
                        </p>
                    </div>
                    <div className="col-sm-4 m-auto">
                        <img src={profile} alt='banner' className="aboutImg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;