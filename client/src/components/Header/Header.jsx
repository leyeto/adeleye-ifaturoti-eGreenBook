import logo from "../../assets/logo/redbook-logo.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="header">
        <ul className="header__list">
          <li className="header__list-item">
            <NavLink to="/">
              <h1 className="header__brand-words">eRedBook</h1>
            </NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/weights">Weights Log</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/clinic-notes"> Clinical Notes</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/"> Login/Logout Clinician</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/"> Login/Logout User</NavLink>
          </li>
          <li className="header__list-item">
            <NavLink to="/"> Add New User</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
