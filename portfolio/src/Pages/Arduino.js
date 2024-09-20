import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/scrollToTop";
//import placeholder_portrait from "./../Assets/placeholder_portrait4.png"
import arduinoLogo from "../Assets/arduino-logo.png";
import cplusplusLogo from "../Assets/c++-logo.png";
import "./About.css";
import placeholderPhoto from "../Assets/myPhoto.jpg";
import "./Projects.css";
import { useDocumentTitle } from "../Components/Hooks/changeTitle";


const About = () => {
    var python_projects = "https://github.com/dreamz12345/Python-Projects";
    var c_projects = "https://github.com/dreamz12345/Arduino-Heater";
    var react_projects = "https://github.com/dreamz12345/portfolio";
    var docs_link = "https://github.com/dreamz12345/Python-Projects/blob/main/15%20-%20Coffee%20Machine/main.py";
    var my_github_page = "https://github.com/dreamz12345";

    useDocumentTitle("Arduino Project")
    return (
        <div className="page">
            <ScrollToTop/>
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">


                <div className="aboutMidDiv">
                                <span className="aboutTitleText">Arduino Heater Controller</span>

                                                <div className="projectsTechnologiesUsed">
                                                    <img src={cplusplusLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                                    <img src={arduinoLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                                </div>

                            </div>

                <div className="homeDivOuter">
                <div className="homeDivMid">
                                      
                                            <div className="homeDivInner">

                                                <img src={placeholderPhoto} alt="projectsPhoto" className="homePhotoFit"></img>
                                            </div>
                                   
                                    </div>
                                    </div>

                    <div className="aboutMidDiv">


                        <span className="boldTxt">Hard Skills:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Programming: </text>Mainly <a href={python_projects} className="aboutLinkText">Python</a> but also a little bit of <a href={c_projects} className="aboutLinkText"> C++</a> and <a href={react_projects} className="aboutLinkText"> React JSX</a></li>
                            <li className="thinTxt"><text className="midTxt">Commitment to quality: </text>I always try to find the best possible solutions before I start to code.</li>
                            <li className="thinTxt"><text className="midTxt">Creating with future in mind: </text>I believe that <a href={docs_link} className="aboutLinkText"> documentation</a> and good code design is very important to make sure my code can be understandable and reusable in the future. </li>
                            <li className="thinTxt"><text className="midTxt">Version control software: </text>I use <a href={my_github_page} className="aboutLinkText">GitHub </a> and GitKraken.</li>
                            <li className="thinTxt"><text className="midTxt">Tests: </text>I can write simple tests for my code with UnitTests and Pytest libraries.</li>
                            <li className="thinTxt"><text className="midTxt">Wide range of interests: </text>3D modeling, 2D digital art, composition, color theory and more.</li>
                            <li className="thinTxt"><text className="midTxt">Language: </text>Polish and English.</li>
                        </ul>
                        <span className="boldTxt">Soft Skills:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Curiosity: </text>Being curious person allows me to discover new solutions fast.</li>
                            <li className="thinTxt"><text className="midTxt">Grow-mindset: </text>I easliy find and learn from courses, tutorials, and quicktips which allows me to grow fast.</li>
                            <li className="thinTxt"><text className="midTxt">Personal culture: </text>I do understand that everyone deserves respect and anyone can be wrong - myself included.</li>
                            <li className="thinTxt"><text className="midTxt">Team player: </text>Good atmosphere in a team is important to me.</li>
                        </ul>

                        <span className="aboutTitleText">How do I write my code:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">High Quality: </text>I develop the code in small incremental steps making sure it always works.</li>
                            <li className="thinTxt"><text className="midTxt">Incrementally: </text>I always develop in a way that will allow to easliy expend on created solutions in the future.</li>
                            <li className="thinTxt"><text className="midTxt">With future in mind: </text>Keeping functions as independend as possible makes refactoring easy and ensures that the code is flexible and clear.</li>
                            <li className="thinTxt"><text className="midTxt">Easy to Read: </text>I always try to oblige with community set code formating standards. I try to keep every single line of code as short and simple as possible which gives high readability and easy debugging if needed.</li>
                        </ul>

                        <span className="aboutTitleText">What is my mindset:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Not stubborn: </text>I easliy adapt to new tools and work ethic in the new work environment.</li>
                            <li className="thinTxt"><text className="midTxt">Focus on the right thing: </text>Finishing project and client satisfaction is the most important thing to me.</li>
                            <li className="thinTxt"><text className="midTxt">Flexible: </text>I'm open to do courses to learn about technologies and libraries that your company use.</li>
                            <li className="thinTxt"><text className="midTxt">Continous Improvement: </text>I'm always looking for improvement of the code but I'm not going to force the company to do things my way.</li>
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

export default About;