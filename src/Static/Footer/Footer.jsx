
import "./Footer.css"
const Footer = () => {
    return (
        <div className="footerContainer">
            
            <div className="listDiv">
                <div className="listDiv1">
                    <ul>
                        <li id="listTitle">
                            <strong>Tools</strong>
                        </li>
                        <li className="footerList"><a className="footerList" href="#">Generate your palettes</a></li>
                        <li className="footerList"><a className="footerList" href="#">Explore popular palettes</a></li>
                        <li className="footerList"><a className="footerList" href="#">Extract palette from image</a></li>
                        <li className="footerList"><a className="footerList" href="#">Contrast checker</a></li>
                        <li className="footerList"><a className="footerList" href="#">Preview palettes on designs</a></li>
                        <li className="footerList"><a className="footerList" href="#">Recolor your own design</a></li>
                        <li className="footerList"><a className="footerList" href="#">Color picker</a></li>
                        <li className="footerList"><a className="footerList" href="#">Browse free fonts</a></li>
                    </ul>
                </div>

                <div className="listDiv2">
                    <ul>
                        <li id="listTitle">
                            <strong>More</strong>
                        </li>
                        <li className="footerList" ><a className="footerList" href="#">List of colors</a></li>
                        <li className="footerList" ><a className="footerList" href="#">Browse gradients</a></li>
                        <li className="footerList" ><a className="footerList" href="#">Create a gradient</a></li>
                        <li className="footerList"><a className="footerList" href="#">Make a gradient palette</a></li>
                        <li className="footerList"><a className="footerList" href="#">Image converter</a></li>
                        <li className="footerList"><a className="footerList" href="#">Create a collage</a></li>
                        <li className="footerList"><a className="footerList" href="#">Font Generator</a></li>
                    </ul>
                </div>

                <div className="listDiv3">
                    <ul>
                        <li id="listTitle" >
                            <strong>Jobs</strong>
                        </li>
                        <li className="footerList" ><a className="footerList" href="#">Find your next job</a></li>
                        <li className="footerList" ><a className="footerList" href="#">Post a job</a></li>

                        <li id="listTitle" >
                            <strong>Apps</strong>
                        </li>
                        <li className="footerList" ><a className="footerList" href="#">ios App</a></li>
                        <li className="footerList" ><a className="footerList" href="#">Android App</a></li>
                        <li className="footerList" ><a className="footerList" href="#">Figma Plugin</a></li>
                        <li className="footerList"><a className="footerList" href="#">Adobe Extension</a></li>
                        <li className="footerList"><a className="footerList" href="#">Chrome Extension</a></li>
                        <li className="footerList"><a className="footerList" href="#">Instagram Pages</a></li>
                    </ul>
                </div>

                <div className="listDiv4">
                    <ul>
                        <li id="listTitle">
                            <strong>Company</strong>
                        </li>
                        <li className="footerList"><a className="footerList" href="#">Pricing</a></li>
                        <li className="footerList"><a className="footerList" href="#">License</a></li>
                        <li className="footerList"><a className="footerList" href="#">Terms of service</a></li>
                        <li className="footerList"><a className="footerList" href="#">Privacy policy</a></li>
                        <li className="footerList"><a className="footerList" href="#">Cookie policy</a></li>
                        <li className="footerList"><a className="footerList" href="#">Manage cookies</a></li>
                        <li className="footerList"><a className="footerList" href="#">Help center</a></li>
                        <li className="footerList"><a className="footerList" href="#">Advertise</a></li>
                        <li className="footerList"><a className="footerList" href="#">Affiliate</a></li>
                        <li className="footerList"><a className="footerList" href="#">Contact</a></li>
                    </ul>
                </div>
            </div> 

            <div >
                <p className="footer2">@ Coolors by  <strong>Fabrizo Bianchi.</strong>  From a creative to all others.</p>
            </div>
            
        </div>
    );
};

export default Footer;