import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css"
import myPhoto from "../Assets/myPhoto.jpg"
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="page">
            <div className="pageAboveFooter">
                <Navbar />
                <div className="pageContent">
                    <div className="homeTopContent">
                        <div className="helloText">
                            <span className="helloIm">Hello, I'm </span>
                            <span className="myName">Łukasz Spychała </span>
                            <span className="softDev">Software Developer</span>
                        </div>
                        <div className="myPhotoDiv">
                            <img src={myPhoto} alt="myPhoto" className="myPhoto"></img>
                        </div>
                    </div>

                    <div className="linksDiv">
                        <NavLink to="/projects" className="projectsLink">
                            <img src={myPhoto} alt="projectsPhoto" className="projectsPhoto"></img>
                            <span className="projectsLinkText">Check my personal projects here...</span>
                        </NavLink>
                        <div className="aboutMeLink">
                            <span>Learn more about me</span>
                            <img src={myPhoto} alt="aboutMePhoto" className="aboutMePhoto"></img>
                        </div>
                        <div className="hobbiesLink">
                            <img src={myPhoto} alt="hobbiesPhoto" className="hobbiessPhoto"></img>
                            <span>I do other stuff as well.</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;