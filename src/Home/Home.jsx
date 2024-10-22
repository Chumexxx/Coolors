import "./Home.css"
import Apps from "../Components/Apps/Apps";
import Companies from "../Components/Companies/Companies";
import Hero from "../Components/Hero/Hero";
import Footer from "../Static/Footer/Footer";
import Header from "../Static/Header/Header";

const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Hero/>
            <Apps/>
            <Companies/>
            <Footer/>
        </div>
    );
};

export default Home;