import "./Apps.css"
import AndroidIcon from "../../assets/android.png"
import AppleIcon from "../../assets/apple.png"
import FigmaIcon from "../../assets/figma.png"
import ChromeIcon from "../../assets/chrome.png"
import AdobeIcon from "../../assets/adobe.png"

const Apps = () => {
    return (
        <div className="appContainer">
           <div className="appCard">
           <img id="appImg" src={AppleIcon} alt="" />
            <h2 id="initialText">ios App</h2>
            <h2 id="hoverText">View on the App Store</h2>
            <p id="initialText">Create, browse and save palettes on the go.</p>
           </div>

           <div className="appCard">
            <img id="appImg" src={AndroidIcon} alt="" />
            <h2 id="initialText">Android App</h2>
            <p id="initialText">Thousands of palettes in your pocket.</p>
            <h2 id="hoverText">View on the Play Store</h2>
           </div>

           <div className="appCard">
            <img id="appImg" src={FigmaIcon} alt="" />
            <h2 id="initialText">Figma Plugin</h2>
            <p id="initialText">All palettes right in your workspace.</p>
            <h2 id="hoverText">Install now</h2>
           </div>

           <div className="appCard">
            <img id="appImg" src={ChromeIcon} alt="" />
            <h2 id="initialText">Chrome Extension</h2>
            <p id="initialText">Get and edit a palette on every new tab.</p>
            <h2 id="hoverText">Add to Chrome</h2>
           </div>

           <div className="appCard">
            <img id="appImg" src={AdobeIcon} alt="" />
            <h2 id="initialText">Adobe Extension</h2>
            <p id="initialText">Use Coolors with your favourite tools.</p>
            <h2 id="hoverText">Download</h2>
           </div>
           
        </div>
    );
};

export default Apps;