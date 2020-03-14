import React from "react";
import "./About.css"

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="container mt-4">
                    <div className="card text-center bg-dark">
                        <div className="card-header CatagoryText" href="#collapseOne">
                            About
                        </div>
                        <div className='card-body CatagoryMain text-white'>
                            <h2 className="text-header">What is this?</h2>
                            <p className="text-about">This is a website dedicated to compiling a list of video game randomizers that have been scattered across the internet.</p>
                            <h2 className="text-header">What is a Randomizer?</h2>
                            <p className="text-about">Randomizers bring a whole new level of replayability to many old games by randomly changing various gameplay elements. These elements can be anything from enemies, level layouts, items or even difficulty. Randomizers have been steadily growing in popularity as players wish to revisit some of the classics they grew up with.</p>
                            <ul className="list-group list-group-flush tech-used">
                                <li className="list-group-item CatagoryText">Tech Used</li>
                                <li className="list-group-item tech-item">SQL</li>
                                <li className="list-group-item tech-item">Express</li>
                                <li className="list-group-item tech-item">React</li>
                                <li className="list-group-item tech-item">Node</li>
                                <li className="list-group-item tech-item">Bootstrap</li>
                                <li className="list-group-item tech-item">Heroku</li>
                            </ul>
                        </div>.
                    </div>
                </div>
            </div>
        );
    }
}

export default About;