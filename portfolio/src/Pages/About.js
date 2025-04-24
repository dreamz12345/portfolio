import { useDocumentTitle } from "../Components/Hooks/changeTitle";

import "./About.css";

import myPhoto from "./../Assets/moj_portret.png"
import pythonLogo from "../Assets/python-logo-only.png";
import reactLogo from "../Assets/React-icon.svg.png";

const About = () => {
    useDocumentTitle("About Me")

    var python_projects = "https://github.com/dreamz12345/Python-Projects";
    var c_projects = "https://github.com/dreamz12345/Arduino-Heater";
    var react_projects = "https://github.com/dreamz12345/portfolio";
    var docs_link = "https://github.com/dreamz12345/Python-Projects/blob/main/15%20-%20Coffee%20Machine/main.py";
    var my_github_page = "https://github.com/dreamz12345";

    return (
        <div className="page">
            <div className="pageAboveFooter">

                <div className="pageContent">
                    
                            <div className="aboutTopDiv">
                                <img className="aboutPortraitPhoto" alt="My Portrait" src={myPhoto}></img>
                                <div className="aboutTopText">
                                    <text className="thinTxt">My name is <text className="boldTxt">Łukasz Spychała.</text></text>
                                    <text className="thinTxt">I'm aspiring <text className="boldTxt">software developer</text></text>
                                    <text className="thinTxt">with a goal of delivering <text className="boldTxt">high quality code</text></text>
                                    <text className="thinTxt">with <text className="boldTxt">full documentation.</text></text>
                                    <div className="projectsTechnologiesUsed">
                                        <img src={pythonLogo} alt="projectsPhoto" className="technologiesUsedPhoto"></img>
                                        <img src={reactLogo} alt="reactLogo" className="technologiesUsedPhoto"></img>
                                    </div>
                                </div>
                            </div>

                    <div className="aboutMidDiv">
                        <text className="aboutTitleText">Skills</text>
                        <text className="boldTxt">Hard Skills:</text>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Programming: </text>Mainly <a href={python_projects} className="aboutLinkText">Python</a> but also a little bit of <a href={c_projects} className="aboutLinkText"> C++</a> and <a href={react_projects} className="aboutLinkText"> React JSX</a></li>
                            <li className="thinTxt"><text className="midTxt">Commitment to quality: </text>I always try to find the best possible solutions before I start to code.</li>
                            <li className="thinTxt"><text className="midTxt">Creating with future in mind: </text>I believe that <a href={docs_link} className="aboutLinkText"> documentation</a> and good code design is very important to make sure my code can be understandable and reusable in the future. </li>
                            <li className="thinTxt"><text className="midTxt">Version control software: </text>I use <a href={my_github_page} className="aboutLinkText">GitHub </a> and GitKraken.</li>
                            <li className="thinTxt"><text className="midTxt">Tests: </text>I can write simple tests for my code with UnitTests and Pytest libraries.</li>
                            <li className="thinTxt"><text className="midTxt">Wide range of interests: </text>3D modeling, 2D digital art, composition, color theory and more.</li>
                            <li className="thinTxt"><text className="midTxt">Language: </text>Polish and English.</li>
                        </ul>
                        <text className="boldTxt">Soft Skills:</text>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Curiosity: </text>Being curious person allows me to discover new solutions fast.</li>
                            <li className="thinTxt"><text className="midTxt">Grow-mindset: </text>I easliy find and learn from courses, tutorials, and quicktips which allows me to grow fast.</li>
                            <li className="thinTxt"><text className="midTxt">Personal culture: </text>I do understand that everyone deserves respect and anyone can be wrong - myself included.</li>
                            <li className="thinTxt"><text className="midTxt">Team player: </text>Good atmosphere in a team is important to me.</li>
                        </ul>

                        <text className="aboutTitleText">How do I write my code:</text>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">High Quality: </text>I develop the code in small incremental steps making sure it always works.</li>
                            <li className="thinTxt"><text className="midTxt">Incrementally: </text>I always develop in a way that will allow to easliy expend on created solutions in the future.</li>
                            <li className="thinTxt"><text className="midTxt">With future in mind: </text>Keeping functions as independend as possible makes refactoring easy and ensures that the code is flexible and clear.</li>
                            <li className="thinTxt"><text className="midTxt">Easy to Read: </text>I always try to oblige with community set code formating standards. I try to keep every single line of code as short and simple as possible which gives high readability and easy debugging if needed.</li>
                        </ul>

                        <text className="aboutTitleText">What is my mindset:</text>
                        <ul>
                            <li className="thinTxt"><text className="midTxt">Not stubborn: </text>I easliy adapt to new tools and work ethic in the new work environment.</li>
                            <li className="thinTxt"><text className="midTxt">Focus on the right thing: </text>Finishing project and client satisfaction is the most important thing to me.</li>
                            <li className="thinTxt"><text className="midTxt">Flexible: </text>I'm open to do courses to learn about technologies and libraries that your company use.</li>
                            <li className="thinTxt"><text className="midTxt">Continous Improvement: </text>I'm always looking for improvement of the code but I'm not going to force the company to do things my way.</li>
                        </ul>
                    </div>

                    <div className="aboutBotDiv"></div>

                </div>
            </div>

        </div>
    )
}

export default About;