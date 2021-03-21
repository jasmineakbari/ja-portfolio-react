import React from 'react';

function About() {
    return(
        <div className="container-fluid">
            <div className="container shadow-lg" id="aboutMe">
                <div className="row mb-5 rounded">
                    <div className="col-4 p-4 m-auto aboutText">
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
                    <div className="col-4 m-auto">
                        <img src="https://via.placeholder.com/225x300" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;