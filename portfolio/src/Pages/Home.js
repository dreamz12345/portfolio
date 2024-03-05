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
                            <div className="projectsPhotoDiv"><img src={myPhoto} alt="projectsPhoto" className="projectsPhoto"></img></div>
                            <div className="projectsLinkTextDiv"><span className="projectsLinkText">Check my personal projects here...</span></div>
                        </NavLink>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home;