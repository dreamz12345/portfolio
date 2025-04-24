

import renderPhoto from "../Assets/TT-SU2_700_samples_transparen_background.png";
import HOD from "../Assets/HOD_3000.png";
import IDME from "../Assets/IDME_2000.png";
import trkMEplus from "../Assets/trkME+.png";
import "./About.css";
import { useDocumentTitle } from "../Components/Hooks/changeTitle";


const Other = () => {
    useDocumentTitle("Other")

    
    return (
        <div className="page">
            <div className="pageAboveFooter">

                <div className="pageContent">

                    <div className="aboutMidDiv">
                        <span className="aboutTitleText">3D Models</span>
                        <span className="boldTxt">Renders</span>
                    </div>

                    <div className="homeDivOuter">

                        <div className="homeDivMid">
                            <div className="homeDivInner">
                                <img src={renderPhoto} alt="projectsPhoto" className="homePhoto" />
                            </div>
                        </div>

                        <div className="homeDivMid">
                            <div className="homeDivInner">
                                <img src={HOD} alt="projectsPhoto" className="homePhoto" />
                            </div>
                        </div>

                        <div className="homeDivMid">
                            <div className="homeDivInner">
                                <img src={IDME} alt="projectsPhoto" className="homePhoto" />
                            </div>
                        </div>

                        <div className="homeDivMid">
                            <div className="homeDivInner">
                                <img src={trkMEplus} alt="projectsPhoto" className="homePhoto" />
                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}


export default Other;