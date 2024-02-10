import { Link } from "react-router-dom";
import Input from "../form/Input-forms";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const menuToggle = () => {
        const toggleMenu = document.querySelector(".menu");
        toggleMenu.classList.toggle("active");
    }

    const logSubmit = () => {
        sessionStorage.removeItem('token');
        navigate('/');
    }

    return (
        <nav className="header" id="scrolling-header">
            <div className="header__link">
                <Link to="/home">Home</Link>
                <Link to="/">Annonce</Link>
                <Link to="/message">Discussions</Link>
                <a href="#contact">Favoris</a>
            </div>
            <div className="header__logo">
                <img src="original-09fbcba49141e23681d567a670936f32.jpg" alt="" />
            </div>
            <div className="header__profile">
                <div className="header__profile__search">
                    <form>
                        <span class="material-symbols-outlined search">
                            search
                        </span>
                        <Input placeholder={'Search....'} />
                    </form>
                </div>
                <div class="action">
                    <span onClick={menuToggle} className="material-symbols-outlined">
                        person
                    </span>
                    <div class="menu">
                        <h3>Tendry Ny Avo</h3>
                        <ul>
                            <li>
                                <img src="./assets/icons/user.png" alt="" /><a href="#">Historique Annonce</a>
                            </li>
                            <li>
                                <img src="./assets/icons/edit.png" alt="" /><a href="#">Liste favoris</a>
                            </li>
                            <li>
                                <img src="./assets/icons/log-out.png" alt="" /><a onClick={logSubmit}>Logout</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header;