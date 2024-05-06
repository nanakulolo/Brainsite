import logo from "../../assets/logo/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import "./NavBar.scss";

function NavBar() {
  return (
    <div className="nav">
      <a className="nav__link" href="../../App.jsx">
        <img className="nav__logo" src={logo} alt="BrainFlix"></img>
      </a>
      <form className="nav__input">
        <div className="nav__subcontainer">
          <input type="text" id="search" required placeholder="Search"></input>
          <img className="nav__avatar" src={mohan} alt="mohan"></img>
          <button className="nav__button" type="submit">
            Upload
          </button>
        </div>
        
      </form>
    </div>
  );
}

export default NavBar;
