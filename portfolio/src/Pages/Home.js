import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ScrollToTop from "../Components/scrollToTop";
import "./Home.css";
import "./Projects.css";
import myPhoto from "../Assets/placeholder_portrait4.png";

import pongVideo from "../Assets/pong_animation0000-0120.mp4"
import renderPhoto from "../Assets/TT-SU2_700_samples_transparen_background.png";
import { NavLink } from "react-router-dom";


const Home = () => {
    return (
        <div className="page">
                <ScrollToTop/>
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">

                    <div className="homeLinksDiv">
                        <NavLink to={"/about"} className="homeLink">
                        <div className="aboutTopDiv">
                            <img className="aboutPortraitPhoto" alt="My Portrait" src={myPhoto}></img>
                                <div className="aboutTopText">
                                    <span className="thinTxt">My name is <span className="boldTxt">Łukasz Spychała.</span></span>
                                    <span className="thinTxt">I'm aspiring <span className="boldTxt">software developer</span></span>
                                    <span className="thinTxt">with a goal of delivering <span className="boldTxt">high quality code</span></span>
                                    <span className="thinTxt">with <span className="boldTxt">full documentation.</span></span>
                                </div>
                            </div>
                        </NavLink>
                    </div>


                    
                        <div className="homeDivOuter">

                            <div className="homeDivMid">
                                <NavLink to="/about">
                                    <div className="homeDivInner">
                                        <span className="boldTxt">About Me</span>
                                        <span className="homePhotoTxt">Click here to learn more about me.</span>
                              
                                    </div>
                                </NavLink>
                            </div>

                            <div className="homeDivMid">
                                <NavLink to="/projects">
                                    <div className="homeDivInner">
                                        <span className="boldTxt">Projects</span>
                                        <video src={pongVideo} alt="projectsPhoto" className="homePhoto" video loop autoPlay muted />
                                    </div>
                                </NavLink>
                            </div>

                            <div className="homeDivMid">
                                <NavLink to="/projects">
                                    <div className="homeDivInner">
                                        <span className="boldTxt">Hobbies</span>
                                        <img src={renderPhoto} alt="projectsPhoto" className="homePhoto"></img>
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

export default Home;