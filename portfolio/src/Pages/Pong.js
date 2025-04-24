import { useDocumentTitle } from "../Components/Hooks/changeTitle";

import "./About.css";
import "./Projects/Projects.css";

import pythonLogo from "../Assets/python-logo-only.png";
import pongVideo from "../Assets/pong_animation0000-0120.mp4"


const Pong = () => {

    let json_data = require("../Data/links.json");
    let URLs = json_data[0];

    useDocumentTitle("Pong Project");
    return (
        <div className="page">

            <div className="pageAboveFooter">

                <div className="pageContent">

                    <div className="aboutMidDiv">
                        <text className="aboutTitleText">Pong</text>
                        <div className="projectsTechnologiesUsed">
                            <img src={pythonLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                        </div>
                    </div>


                <div className="homeDivOuter">
                <div className="homeDivMid">

                                            <div className="homeDivInner">

                                            <video src={pongVideo} alt="projectsPhoto" className="homePhoto" loop autoPlay muted />
                                            </div>

                                    </div>
                                    </div>
                    <div className="aboutMidDiv">

                    <text className="aboutTitleText">Here's my take on the famous arcade game - Pong.</text>

                    <text className="boldTxt">Project <a href={URLs.Pong_URL} className="aboutLinkText">GitHub </a> link.</text>
                    <text className="boldTxt">Screen:</text>
                        <ul>
  
                            <li className="midTxt">Background color - Black</li>
                            <li className="midTxt">Ball, Tennis Rocket, Scoreboard color - White</li>
                            <li className="midTxt">White vertical dotted line in the middle of the screen separating left and right side</li>
                        </ul>

                        <text className="boldTxt">Scoreboard:</text>
                        <ul>
                            <li className="midTxt">Background color - Black</li>
                            <li className="midTxt">Ball, Tennis Rocket, Scoreboard color - White</li>
                        </ul>
                        
                    </div>

                    

                    <div className="aboutBotDiv">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pong;