import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/scrollToTop";
import placeholder_portrait from "./../Assets/placeholder_portrait.png"
import "./About.css";
import { NavLink } from "react-router-dom";

const About = () => {
    var python_projects = "https://github.com/dreamz12345/Python-Projects";
    var c_projects = "https://github.com/dreamz12345/Arduino-Heater";
    var react_projects = "https://github.com/dreamz12345/portfolio";
    return (
        <div className="page">
            <ScrollToTop/>
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">
                    
                    <div className="aboutTopDiv">
                        <img className="aboutPortraitPhoto" alt="My Portrait" src={placeholder_portrait}></img>
                        <div className="aboutTopText">
                            <span className="aboutThinText">My name is <span className="aboutBoldText">Łukasz Spychała.</span></span>
                            <span className="aboutThinText">I'm aspiring <span className="aboutBoldText">software developer</span></span>
                            <span className="aboutThinText">with a goal of delivering <span className="aboutBoldText">high quality code</span></span>
                            <span className="aboutThinText">with <span className="aboutBoldText">full documentation.</span></span>
                        </div>
                    </div>
                    

                    <div className="aboutMidDiv">
                        <span className="aboutTitleText">Skills:</span>
                        <span className="aboutThinText">Programming languages: <a href={python_projects} className="aboutBoldText aboutLinkText">Python</a> but I also dabbed a bit in <a href={c_projects} className="aboutBoldText aboutLinkText"> C++ </a> and <a href={react_projects} className="aboutBoldText aboutLinkText"> React JSX</a></span><span className="aboutThinText">Technologies I use:</span>
                    </div>

                    <div className="aboutBotDiv">
                        
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default About;