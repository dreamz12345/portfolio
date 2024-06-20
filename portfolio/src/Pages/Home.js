import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import ScrollToTop from "../Components/scrollToTop";
import "./Home.css"
import "./Projects.css"
import myPhoto from "../Assets/placeholder_portrait.png"
import pongSquare from "../Assets/pong_square_size.jpg"
import renderPhoto from "../Assets/TT-SU2_700_samples_transparen_background.png"
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
                                    <span className="aboutThinText">My name is <span className="aboutBoldText">Łukasz Spychała.</span></span>
                                    <span className="aboutThinText">I'm aspiring <span className="aboutBoldText">software developer</span></span>
                                    <span className="aboutThinText">you can <span className="aboutBoldText">click here</span></span>
                                    <span className="aboutThinText">to learn more <span className="aboutBoldText">About Me</span></span>
                                </div>
                            </div>
                        </NavLink>
                    </div>

                    <div className="homeLinksDiv">
                        <NavLink to="/projects" className="homeLink">
                            <div className="projectsPhotoDivRight">
                                <img src={pongSquare} alt="projectsPhoto" className="pongPhoto"></img>
                            </div>
                            <div className="homeLinkTextDivRight">
                                <span className="homeLinkTextRight">Check my personal projects here</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="homeLinksDiv">
                        <NavLink to="/Hobbies" className="homeLink">
                            <div className="homeLinkTextDivLeft">
                                <span className="homeLinkTextLeft">or see unreleated stuff like 3D renders.</span>
                            </div>
                            <div className="homePhotoDivLeft">
                                <img src={renderPhoto} alt="homePhoto" className="homePhoto"></img>
                            </div>
                        </NavLink>
                    </div>


                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;