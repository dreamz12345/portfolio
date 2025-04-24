import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../../Components/Hooks/changeTitle";

import "./Projects.css";
import "../About.css";

import pythonLogo from "../../Assets/python-logo-only.png";
import arduinoLogo from "../../Assets/arduino-logo.png";
import cplusplusLogo from "../../Assets/c++-logo.png";
import GitHubLogo from "../../Assets/GitHub_Logo_White.png"
import pongVideo from "../../Assets/pong_animation0000-0120.mp4"
import placeholderPhoto from "../../Assets/myPhoto.jpg";


const Projects = () => {
    useDocumentTitle("Projects")

    var github_link = "https://github.com/dreamz12345/"

    return (
        
        <div className="page">
                    <div className="pageAboveFooter">

                        <div className="pageContent">

                            <div className="aboutMidDiv">
                                <text className="aboutTitleText">Projects</text>
                            </div>

                            <div className="homeDivOuter">

                                <div className="homeDivMid">
                                            <a className="homeDivInner" href={github_link}>
                                                <text className="boldTxt">All of my Projects</text>
                                                <img src={GitHubLogo} alt="projectsPhoto" className="homePhotoFit"></img>
                                            </a>
                                </div>

                                    <div className="homeDivMid">
                                        <NavLink to="/projects/pong">
                                            <div className="homeDivInner">
                                                <div className="projectsTechnologiesUsed">
                                                <text className="boldTxt">Pong</text>
                                                <img src={pythonLogo} alt="projectsPhoto" className="technologiesUsedPhoto marginLeft"></img>
                                                </div>
                                                <video src={pongVideo} alt="projectsPhoto" className="homePhotoFit" loop autoPlay muted />
                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className="homeDivMid">
                                        <NavLink to="/projects/arduino">
                                            <div className="homeDivInner">
                                                <div className="projectsTechnologiesUsed">
                                                    <text className="boldTxt">Arduino Heater</text>
                                                    <img src={cplusplusLogo} alt="projectsPhoto" className="technologiesUsedPhoto marginLeft"></img>
                                                    <img src={arduinoLogo} alt="projectsPhoto" className="technologiesUsedPhoto "></img>
                                                </div>
                                                <img src={placeholderPhoto} alt="projectsPhoto" className="homePhotoFit"></img>
                                            </div>
                                        </NavLink>
                                    </div>


                            <div className="homeDivMid">
                                <NavLink to="/projects">
                                    <div className="homeDivInner">
                                        <text className="boldTxt">Contact</text>
                                        <video src={pongVideo} alt="projectsPhoto" className="homePhoto" video loop autoPlay muted />
                                    </div>
                                </NavLink>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;