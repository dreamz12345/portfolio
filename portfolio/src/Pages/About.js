import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import ScrollToTop from "../Components/scrollToTop";
import placeholder_portrait from "./../Assets/placeholder_portrait.png"
import "./About.css";

const About = () => {
    var python_projects = "https://github.com/dreamz12345/Python-Projects";
    var c_projects = "https://github.com/dreamz12345/Arduino-Heater";
    var react_projects = "https://github.com/dreamz12345/portfolio";
    var docs_link = "https://github.com/dreamz12345/Python-Projects/blob/main/15%20-%20Coffee%20Machine/main.py";
    var my_github_page = "https://github.com/dreamz12345";
    return (
        <div className="page">
            <ScrollToTop/>
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">
                    
                    <div className="aboutTopDiv">
                        <img className="aboutPortraitPhoto" alt="My Portrait" src={placeholder_portrait}></img>
                        <div className="aboutTopText">
                            <span className="thinTxt">My name is <span className="boldTxt">Łukasz Spychała.</span></span>
                            <span className="thinTxt">I'm aspiring <span className="boldTxt">software developer</span></span>
                            <span className="thinTxt">with a goal of delivering <span className="boldTxt">high quality code</span></span>
                            <span className="thinTxt">with <span className="boldTxt">full documentation.</span></span>
                        </div>
                    </div>
                    

                    <div className="aboutMidDiv">
                        <span className="aboutTitleText">Skills</span>
                        <span className="boldTxt">Hard Skills:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Programming: </text>Mainly <a href={python_projects} className="aboutLinkText">Python</a> but also a little bit of <a href={c_projects} className="aboutLinkText"> C++</a> and <a href={react_projects} className="aboutLinkText"> React JSX</a></li>
                            <li className="thinTxt"><text className="midTxt">Commitment to quality: </text>I always try to find the best possible solutions before I start to code.</li>
                            <li className="thinTxt"><text className="midTxt">Creating with future in mind: </text>I believe that <a href={docs_link} className="aboutLinkText"> documentation</a> and good code design is very important to make sure my code can be understandable and reusable in the future. </li>
                            <li className="thinTxt"><text className="midTxt">Version control software: </text>I use <a href={my_github_page} className="aboutLinkText">GitHub </a> and GitKraken.</li>
                            <li className="thinTxt"><text className="midTxt">Tests: </text>I can write simple tests for my code in UnitTests na Pytest libraries.</li>
                            <li className="thinTxt"><text className="midTxt">Wide range of interests: </text>3D modeling, 2D digital art, composition, color theory and more.</li>
                            <li className="thinTxt"><text className="midTxt">Language: </text>Polish and English.</li>
                        </ul>
                        <span className="boldTxt">Soft Skills:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Curiosity: </text>Being curious person allows me to discover new solutions fast.</li>
                            <li className="thinTxt"><text className="midTxt">Grow-mindset: </text>I easliy find and learn from courses, tutorials, and quicktips which allows me to grow fast.</li>
                            <li className="thinTxt"><text className="midTxt">Personal culture: </text>I do understand that everyone deserves respect and anyone can be wrong - myself included.</li>
                            <li className="thinTxt"><text className="midTxt">Team player: </text>Good atmosphere in a team is important to me.</li>
                            <li className="thinTxt"><text className="midTxt">I'm not stubborn: </text>I easliy adapts to new tools and work ethic in the new work environment.</li>
                        </ul>

                        <span className="aboutTitleText">How do I write my code:</span>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">High Quality: </text>I develop the code in small incremental steps making sure it always works.</li>
                            <li className="thinTxt"><text className="midTxt">Incrementally: </text>I always develop in a way that will allow to easliy expend on created solutions in the future.</li>
                            <li className="thinTxt"><text className="midTxt">Continous Improvement: </text>Keeping functions as independend as possible makes refactoring easy and ensures that the code is flexible and clear.</li>
                            <li className="thinTxt"><text className="midTxt">Easy to Read: </text>I always try to oblige with community set code formating standards. I try to keep every single line of code as short and simple as possible which gives high readablity and easy debugging if needed.</li>
                        </ul>

                        <span className="aboutTitleText">What is my mindset when I work on a project:</span>
                        <span className="thinTxt">- I'm always looking for improvement of the code but I'm not going to force the company to do things my way.</span>
                        <span className="thinTxt">- Team player.</span>
                        <span className="thinTxt">- Finishing project and client satisfaction is the most important thing to keep the company afloat.</span>
                        <span className="thinTxt">- Easliy adapts to new tools and work ethic in new working environment.</span>
                        <span className="thinTxt">- I'm open to do courses to learn about technologies and libraries that your company use.</span>
                        <span className="thinTxt">- Good personal culture, I understand and accept that sometimes I could be wrong and others can be right.</span>
                        <span className="thinTxt">- When I write my code I always try to get done as much as possible in shortest possible time by focusing on functions and </span>
                        <span className="thinTxt">- I believe that software development is about solving problems and correct mindset and less about what programming language or library I'm currently using.</span>
                        <span className="thinTxt"></span>
                        <span className="thinTxt"></span>
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