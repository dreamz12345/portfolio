import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Projects.css"
import pongSquare from "../Assets/pong_square_size.jpg";
import pythonLogo from "../Assets/python-logo-only.png";

import renderPhoto from "../Assets/TT-SU2_700_samples_transparen_background.png";
import { NavLink } from "react-router-dom";

const Projects = () => {
    return (
<div className="page">
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">



                    <div className="projectsLinksDiv">
                        <NavLink to="/projects" className="projectsLink">
                            <div className="projectsPhotoDivRight">
                                <img src={pongSquare} alt="projectsPhoto" className="projectsPhoto"></img>
                            </div>
                            <div className="projectsLinkTextDivRight">
                                <span className="projectsLinkTextRight">Pong Game</span>
                                <span className="projectsLinkTextRightMedium">Famous oldschool game written by me in Python Turtle.</span>
                                <div className="projectsTechnologiesUsedDiv">
                                    <img src={pythonLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
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