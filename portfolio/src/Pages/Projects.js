import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ScrollToTop from "../Components/scrollToTop";
import "./Projects.css";
import "./About.css";
import pongSquare from "../Assets/pong_square_size.jpg";
import pythonLogo from "../Assets/python-logo-only.png";
import arduinoLogo from "../Assets/arduino-logo.png";
import cplusplusLogo from "../Assets/c++-logo.png";
import GitHubLogo from "../Assets/GitHub_Logo_White.png"
import pongVideo from "../Assets/pong_animation0000-0120.mp4"
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

                            <div className="aboutMidDiv">
                                <span className="aboutTitleText">Projects</span>
                            </div>

                            <div className="homeDivOuter">

                                <div className="homeDivMid">
                                            <a className="homeDivInner" href={github_link}>
                                                <span className="boldTxt">All of my Projects</span>
                                                <img src={GitHubLogo} alt="projectsPhoto" className="homePhotoFit"></img>
                                            </a>
                                </div>

                                    <div className="homeDivMid">
                                        <NavLink to="/projects">
                                            <div className="homeDivInner">
                                                <div className="projectsTechnologiesUsed">
                                                <span className="boldTxt">Pong</span>
                                                <img src={pythonLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                                </div>
                                                <video src={pongVideo} alt="projectsPhoto" className="homePhotoFit" loop autoPlay muted />
                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className="homeDivMid">
                                        <NavLink to="/hobbies">
                                            <div className="homeDivInner">
                                                <div className="projectsTechnologiesUsed">
                                                    <span className="boldTxt">Arduino Heater</span>
                                                    <img src={cplusplusLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                                    <img src={arduinoLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                                </div>
                                                <img src={placeholderPhoto} alt="projectsPhoto" className="homePhotoFit"></img>
                                            </div>
                                        </NavLink>
                                    </div>


                            <div className="homeDivMid">
                                <NavLink to="/projects">
                                    <div className="homeDivInner">
                                        <span className="boldTxt">Contact</span>
                                        <video src={pongVideo} alt="projectsPhoto" className="homePhoto" video loop autoPlay muted />
                                    </div>
                                </NavLink>
                            </div>




</div>





                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects;