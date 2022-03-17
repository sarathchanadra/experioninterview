import React from "react";
import "../header/header.scss";
import logo from "../../assets/Logo.png";
import searchicon from "../../assets/icons/search.svg";
import carticon from "../../assets/icons/cart.svg";
import likeicon from "../../assets/icons/like.svg";
import userimg from "../../assets/icons/userimg.svg";
import droparrow from "../../assets/icons/droparrow.svg";

const Header = () => {
  return (
    <div class="app-header">
      <div class="app-header__logo">
        <div class="logo-src">
          <img src={logo} />
        </div>
      </div>
      <div class="app-header__content">
        <div class="app-header-left">
          {" "}
          <h3> Hi John! </h3>{" "}
        </div>
        <div class="app-header-right">
          <div class="form-group has-search">
            <img src={searchicon} className="form-control-feedback" />
            <input
              type="text"
              class="form-control"
              placeholder="Search for products, brands and more"
            />
          </div>
          <div className="icons-container">
            <img src={likeicon} alt="like" />
            <img src={carticon} alt="cart" />
          </div>

          <div class="header-btn-lg pr-0">
            <img src={userimg} alt="user image " />
            <p> John Paul</p>
            <img src={droparrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
