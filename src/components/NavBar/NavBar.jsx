import logo from "../../assets/logo/BrainFlix-logo.svg";
import mohan from "../../assets/images/Mohan-muruge.jpg";
import "./NavBar.scss";

function NavBar() {
  
  return (
    <div className="nav">
      <link to="/" className="nav__link">
        <img className="nav__logo" src={logo} alt="BrainFlix"></img>
      </link>
      <form className="nav__input">
        <div className="nav__subcontainer">
          <input type="text" id="search" required placeholder="Search"></input>
          <img className="nav__avatar" src={mohan} alt="mohan"></img>
          <link to="/upload" className="nav__link">
            <button className="nav__button" type="submit">
              upload
            </button>
          </link>

        </div>
      
      </form>
    </div>
  );
}

export default NavBar;
