import { NavLink } from "react-router-dom";
import { navMenu } from "../../helpers/navMenu";
import "./style.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-logo">
          <img src="/src/image/logo.png" alt="logo" className="logo-img" />
        </div>

        <div className="navbar-links">
          <a href="#home" className="navbar-link">Home</a>
          <a href="#about" className="navbar-link">About</a>
          <a href="#skills" className="navbar-link">Skills</a>
          <a href="#contacts" className="navbar-link">Contacts</a>
          {/* {navMenu.map(({ id, path, title }) => (
            <NavLink key={id} to={path} className="navbar-link">
              {title}
            </NavLink>
          ))} */}

        </div>
      </div>
    </div>
  );
};

export default Navbar;
