import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ScrollToTop from "../Components/scrollToTop";
import "./Projects.css"
import pongSquare from "../Assets/pong_square_size.jpg";
import pythonLogo from "../Assets/python-logo-only.png";
import arduinoLogo from "../Assets/arduino-logo.png";
import cplusplusLogo from "../Assets/c++-logo.png";
import GitHubLogo from "../Assets/GitHub_Logo_White.png"

import placeholderPhoto from "../Assets/myPhoto.jpg";
import { NavLink } from "react-router-dom";



const Projects = () => {

    var github_link = "https://github.com/dreamz12345/"

    return (
        
<div className="page">
    <ScrollToTop/>
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">

                <div className="projectsLinksDiv">
                        <a href={github_link} className="projectsLink">
                            <div className="projectsPhotoDivRight">
                                <img src={GitHubLogo} alt="projectsPhoto" className="projectsPhotoGitHub"></img>
                            </div>
                            <div className="projectsLinkTextDivRight">
                                <span className="projectsLinkTextRight">All of my Projects</span>
                                <span className="projectsLinkTextRightMedium">You can see them directly at my GitHub Page.</span>
                            </div>
                        </a>
                    </div>

                    <div className="projectsLinksDiv">
                        <NavLink to="/projects" className="projectsLink">
                            <div className="projectsPhotoDivRight">
                                <img src={pongSquare} alt="projectsPhoto" className="projectsPhoto"></img>
                            </div>
                            <div className="projectsLinkTextDivRight">
                                <span className="projectsLinkTextRight">Pong Game</span>
                                <span className="projectsLinkTextRightMedium">My take on famous oldschool game written in Python Turtle.</span>
                                <div className="projectsTechnologiesUsedDiv">
                                    <img src={pythonLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                </div>
                            </div>
                        </NavLink>
                    </div>


                    <div className="projectsLinksDiv">
                        <NavLink to="/projects" className="projectsLink">
                            <div className="projectsPhotoDivRight">
                                <img src={placeholderPhoto} alt="projectsPhoto" className="projectsPhoto"></img>
                            </div>
                            <div className="projectsLinkTextDivRight">
                                <span className="projectsLinkTextRight">Arduino Heater</span>
                                <span className="projectsLinkTextRightMedium">Personal project created to control heater pump with Arduino.</span>
                                <div className="projectsTechnologiesUsedDiv">
                                    <img src={cplusplusLogo} alt="projectsPhoto" className="cplusplusPhoto"></img>
                                    <img src={arduinoLogo} alt="projectsPhoto" className="arduinoPhoto"></img>
                                </div>
                            </div>
                        </NavLink>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;