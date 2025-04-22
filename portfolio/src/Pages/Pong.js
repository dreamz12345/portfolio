import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/scrollToTop";
//import placeholder_portrait from "./../Assets/placeholder_portrait4.png"

import pythonLogo from "../Assets/python-logo-only.png";
import "./About.css";

import "./Projects.css";
import { useDocumentTitle } from "../Components/Hooks/changeTitle";
import pongVideo from "../Assets/pong_animation0000-0120.mp4"



const Pong = () => {


    useDocumentTitle("Pong Project")
    return (
        <div className="page">
            <ScrollToTop/>
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">


                <div className="aboutMidDiv">
                                <span className="aboutTitleText">Pong</span>

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

                    <span className="aboutTitleText">Here's my take on the famous arcade game - Pong.</span>
                    <span className="boldTxt">Screen:</span>
                        <ul>
                            <li className="midTxt">Background color - Black</li>
                            <li className="midTxt">Ball, Tennis Rocket, Scoreboard color - White</li>
                            <li className="midTxt">White vertical dotted line in the middle of the screen separating left and right side</li>
                        </ul>

                        <span className="boldTxt">Scoreboard:</span>
                        <ul>
                            <li className="midTxt">Background color - Black</li>
                            <li className="midTxt">Ball, Tennis Rocket, Scoreboard color - White</li>
                            <li className="midTxt">White vertical dotted line in the middle of the screen separating left and right side</li>
                        </ul>
                        
                    </div>

                    

                    <div className="aboutBotDiv">
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Pong;