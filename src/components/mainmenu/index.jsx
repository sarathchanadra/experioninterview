import React from "react";
import "../mainmenu/style.scss";
import menuicon from "../../assets/icons/menu.png";
import infoicon from "../../assets/icons/info.png";
import tickicon from "../../assets/icons/tick.png";
import usericon from "../../assets/icons/user.png";

const Manimenu = () => {
  return (
    <div className="sidebar-containter">
      <div className="sidebar-inner">
        <ul className="nav-menu">
          <li>
            <a>
              <img src={usericon} alt="user menu" />
            </a>
          </li>
          <li className="active">
            <a>
              <img src={menuicon} alt="menu" />
            </a>
          </li>
          <li>
            <a>
              <img src={tickicon} alt="menuthree" />
            </a>
          </li>
          <li>
            <a>
              <img src={infoicon} alt="info" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Manimenu;
