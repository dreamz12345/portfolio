import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css"
import myPhoto from "../Assets/myPhoto.jpg"
import placeholderphoto from "../Assets/asdasd.jpg"
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="page">
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">

                    <div className="linksDiv">
                        <NavLink to={"/about"} className="projectsLink">
                            <div className="projectsLinkTextDivLeft">
                                <div className="helloText">
                                    <span className="softDev">Hello, I'm</span>
                                    <span className="myName">Łukasz Spychała </span>
                                    <span className="softDev">I'm aspiring <span className="helloIm">Software Developer</span></span>
                                    <span className="softDev">Click here to learn </span>
                                    <span className="softDev">more about me.</span>
                                </div>
                            </div>
                            <div className="projectsPhotoDivLeft">
                                <img src={myPhoto} alt="myPhoto" className="projectsPhoto"></img>
                            </div>
                        </NavLink>
                    </div>

                    <div className="linksDiv">
                        <NavLink to="/projects" className="projectsLink">
                            <div className="projectsPhotoDivRight">
                                <img src={myPhoto} alt="projectsPhoto" className="projectsPhoto"></img>
                            </div>
                            <div className="projectsLinkTextDivRight">
                                <span className="projectsLinkTextRight">Check my personal projects here...</span>
                            </div>
                        </NavLink>
                    </div>

                    <div className="linksDiv">
                        <NavLink to="/about" className="projectsLink">
                            <div className="projectsLinkTextDivLeft">
                                <span className="projectsLinkTextLeft">Learn more about me.</span>
                            </div>
                            <div className="projectsPhotoDivLeft">
                                <img src={placeholderphoto} alt="projectsPhoto" className="projectsPhoto"></img>
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