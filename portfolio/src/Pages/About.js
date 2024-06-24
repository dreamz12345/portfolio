import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/scrollToTop";
import placeholder_portrait from "./../Assets/placeholder_portrait.png"
import "./About.css";

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
                        <span className="aboutTitleText">Skills</span>
                        <span className="aboutBoldText">Hard Skills:</span>
                        <ul>
                            <li className="aboutThinText"><text className="aboutMidText">Programming: </text>Mainly <a href={python_projects} className="aboutLinkText">Python</a> but also a little bit of <a href={c_projects} className="aboutLinkText"> C++</a> and <a href={react_projects} className="aboutLinkText"> React JSX</a></li>
                            <li className="aboutThinText"><text className="aboutMidText">Commitment to quality: </text>I always try to find the best possible solutions before I start to code.</li>
                            <li className="aboutThinText"><text className="aboutMidText">Creating with future in mind: </text>I believe that documenation and good code design is very important to make sure my code can be understandable and reusable in the future. </li>
                            <li className="aboutThinText">I can create unit tests for my code.</li>
                            <li className="aboutThinText">I have wide range of hobbies: 3D modeling, 2D digital art, design so I have good understanding of color and composition that may come in handy in some projects.</li>
                            <li className="aboutThinText">Good English proficiency.</li>
                        </ul>
                        <span className="aboutTitleText">How do I write my code:</span>
                        <span className="aboutThinText">- I'm always looking for improvement of the code but I'm not going to force the company to do things my way.</span>
                        <span className="aboutThinText">- I'm willing to put a lot of effort into writing documenation for my code because I believe that it's very important to ensure that the code is reusable and understandable by me and other software developers in the future.</span>
                        <span className="aboutTitleText">What is my mindset when I work on a project:</span>
                        <span className="aboutThinText">- Team player.</span>
                        <span className="aboutThinText">- Finishing project and client satisfaction is the most important thing to keep the company afloat.</span>
                        <span className="aboutThinText">- Easliy adapts to new tools and work ethic in new working environment.</span>
                        <span className="aboutThinText">- I'm open to do courses to learn about technologies and libraries that your company use.</span>
                        <span className="aboutThinText">- Good personal culture, I understand and accept that sometimes I could be wrong and others can be right.</span>
                        <span className="aboutThinText">- When I write my code I always try to get done as much as possible in shortest possible time by focusing on functions and </span>
                        <span className="aboutThinText">- I believe that software development is about solving problems and correct mindset and less about what programming language or library I'm currently using.</span>
                        <span className="aboutThinText"></span>
                        <span className="aboutThinText"></span>
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