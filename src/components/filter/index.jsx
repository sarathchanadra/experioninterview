import React, { Component, useState } from "react";
import "../filter/style.scss";
import closeicon from "../../assets/icons/close.svg";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

const Filterarea = () => {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  return (
    <div className="filter-contianer">
      <p>Filters based on your profile</p>
      <div className="d-flex justify-content-between">
        <div className="filter-tile-section">
          <div className="slection-tile">
            {" "}
            <p>Size </p>
            <img src={closeicon} alt="close" />
          </div>
          <div className="slection-tile">
            {" "}
            <p>Color </p>
            <img src={closeicon} alt="close" />
          </div>
          <div className="slection-tile">
            {" "}
            <p>Nike </p>
            <img src={closeicon} alt="close" />
          </div>
          <div className="slection-tile">
            {" "}
            <p>Casual </p>
            <img src={closeicon} alt="close" />
          </div>
          <div className="slection-tile">
            {" "}
            <p>Footwear </p>
            <img src={closeicon} alt="close" />
          </div>
        </div>
        <div className="buttons-right">
          <button className="btn-filter btn-filter-borderless">
            {" "}
            Clear all{" "}
          </button>
          <button className="btn-filter"> Filter </button>
        </div>
      </div>
    </div>
  );
};
export default Filterarea;
