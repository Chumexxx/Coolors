import "./Companies.css"
import DisneyIcon from "../../assets/disney.svg"
import DreamworksIcon from "../../assets/dreamworks.svg"
import WarnerBrosIcon from "../../assets/WB.svg"
import NetflixIcon from "../../assets/netflix.svg"
import AirBnBIcon from "../../assets/airbnb.svg"
import DropBoxIcon from "../../assets/dropbox.svg"
import HansbroIcon from "../../assets/hansbro.svg"
import UbisoftIcon from "../../assets/ubisoft.svg"
import EAIcon from "../../assets/ea.svg"
import ApplesIcon from "../../assets/apple.svg"
import MicrosoftIcon from "../../assets/microsoft.svg"


const Companies = () => {
    return (
        <div className="companiesContainer">
            
            <p className="textDiv">Used by 5+ million designers and by top companies</p>
            
            <div className="imagesDiv">
                <img id="companyImg" src={DisneyIcon} alt="" />
                <img id="companyImg" src={DreamworksIcon} alt="" />
                <img id="companyImg" src={WarnerBrosIcon} alt="" />
                <img id="companyImg" src={NetflixIcon} alt="" />
                <img id="companyImg" src={AirBnBIcon} alt="" />
                <img id="companyImg" src={DropBoxIcon} alt="" />
                <img id="companyImg" src={HansbroIcon} alt="" />
                <img id="companyImg" src={UbisoftIcon} alt="" />
                <img id="companyImg" src={EAIcon} alt="" />
                <img id="companyImg" src={ApplesIcon} alt="" />
                <img id="companyImg" src={MicrosoftIcon} alt="" />
            </div>
        </div>
    )
}

export default Companies;