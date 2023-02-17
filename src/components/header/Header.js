import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import { Link } from "react-router-dom";
import "./header.scss";

const Header = () => {
  const [currentPath, setCurrentPath] = useContext(GlobalContext).currentPath;
  const signinFromNavHandler = () => {
    setCurrentPath("/signin");
  };
  return (
    <div className="header">
      <ul className="nav">
        <div className="justify-content-start logo-section">
          <div>App Name</div>
        </div>
        <div className="justify-content-end link-section">
          <li className="nav-item">
            {currentPath === "/" ? <Link className="nav-link" to="/signin" onClick={signinFromNavHandler}>Signin</Link> : <></>}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Header;