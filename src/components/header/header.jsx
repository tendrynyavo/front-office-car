import { Link } from "react-router-dom";
import Input from "../form/input-form";

const Header = () => {
    
    let prevScrollpos = window.scrollY;

    window.onscroll = () => {
        let currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementsByClassName("header")[0].style.top = "0";
            document.getElementsByClassName("header")[0].style.transition = "0.3s";
        } else {
            document.getElementsByClassName("header")[0].style.top = "-110px";
        }
        prevScrollpos = currentScrollPos;
    }

    return (
        <nav className="header" id="scrolling-header">
            <div className="header__link">
                <Link to="/home">Home</Link>
                <Link to="/annonce">Annonce</Link>
                <a href="#news">Discussions</a>
                <a href="#contact">Favoris</a>
            </div>
            <div className="header__logo">
                <img src="original-09fbcba49141e23681d567a670936f32.jpg" alt="" />
            </div>
            <div className="header__profile">
                <div className="header__profile__name">
                    Tendry Ny Avo
                </div>
                <span className="material-symbols-outlined">
                    person
                </span>
                <span className="material-symbols-rounded">
                    logout
                </span>
            </div>
        </nav>
    );
}

export default Header;