import "./Header.css"

const Header = () => {
    return (
        <div className="Container">
            <div className="logo">
                coolors
            </div>

            <div className="navs">
                <a href="#">Tools</a>
                <a href="#">Go Pro</a>
                <a href="#">Sign In</a>
                <button>Sign Up</button>
            </div>
        </div>
    )
}

export default Header;