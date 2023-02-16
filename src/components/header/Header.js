import React from "react";
import {Link} from "react-router-dom";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <ul className="nav">
        <div className="justify-content-start logo-section">
          <div>App Name</div>
        </div>
        <div className="justify-content-end link-section">
          <li className="nav-item">
            <Link className="nav-link" to="/signin">Signin</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;