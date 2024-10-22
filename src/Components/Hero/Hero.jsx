import "./Hero.css"
import MyImage from "../../assets/colors.png"

const Hero = () => {
    return (
        <div className="heroContainer">
            <div className="heroText">
                <img  className="heroImage2" src={MyImage} alt="" />
                <h1 className="super">The super fast color pallets generator!</h1>
                <p className="lorem">Create the perfect pallete or get inspired by <br />
                    thousands of beautiful color schemes.</p>

                    <a href="#"><button className="genBtn">start the generator!</button></a>
                    <a href="#"><button className="exploreBtn">Explore trending palletes</button></a>
                    <a href="#"><button className="prodBtn">#1 Product of the Month</button></a>
            </div>

            <div>
                <img  className="heroImage" src={MyImage} alt="" />
                <img  className="heroImage1" src={MyImage} alt="" />
            </div>
        </div>
    );
};

export default Hero;