import { NavLink } from "react-router-dom";
import { useDocumentTitle } from "../Components/Hooks/changeTitle";

import "./Home.css";
import "./Projects/Projects.css";

import myPhoto from "../Assets/moj_portret.png";
import pythonLogo from "../Assets/python-logo-only.png";
import reactLogo from "../Assets/React-icon.svg.png";
import pongVideo from "../Assets/pong_animation0000-0120.mp4"
import renderPhoto from "../Assets/TT-SU2_700_samples_transparen_background.png";



const Home = () => {

    useDocumentTitle("Home")

    return (
        <div className="page">
            <div className="pageAboveFooter">
                <div className="pageContent">

                    <div className="homeLinksDiv">
                        <NavLink to={"/about"} className="homeLink">
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
                        </NavLink>
                    </div>

                        <div className="homeDivOuter">
                            <div className="homeDivMid">
                                <NavLink to="/about">
                                    <div className="homeDivInner">
                                        <text className="boldTxt">About Me</text>
                                        <text className="homePhotoMail material-symbols-outlined">Assignment</text>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="homeDivMid">
                                <NavLink to="/projects">
                                    <div className="homeDivInner">
                                        <text className="boldTxt">Projects</text>
                                        <video src={pongVideo} alt="projectsPhoto" className="homePhoto" loop autoPlay muted />
                                    </div>
                                </NavLink>
                            </div>

                            <div className="homeDivMid">
                                <NavLink to="/other">
                                    <div className="homeDivInner">
                                        <text className="boldTxt">Other</text>
                                        <img src={renderPhoto} alt="projectsPhoto" className="homePhoto"></img>
                                    </div>
                                </NavLink>
                            </div>

                            <div className="homeDivMid">
                                <NavLink to="/contact">
                                    <div className="homeDivInner">
                                        <text className="boldTxt">Contact</text>
                                        <text className="homePhotoMail material-symbols-outlined">Mail</text>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default Home;