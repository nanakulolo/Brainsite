import logo from "../../assets/logo/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav">
      <NavLink className="nav__link" to="/">
        <img className="nav__logo" src={logo} alt="BrainFlix"></img>
      </NavLink>
      <form className="nav__input">
        <div className="nav__subcontainer">
          <input type="text" id="search" required placeholder="Search"></input>
          <img className="nav__avatar" src={mohan} alt="avatar"></img>
          <NavLink className="nav__link" to="/images">
            <button className="nav__button" type="submit">
              Upload
            </button>
          </NavLink>
        </div>
      </form>
    </div>
  );
}

export default NavBar;
