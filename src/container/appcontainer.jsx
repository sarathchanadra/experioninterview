import React from "react";
import Header from "../components/header";
import Mainmenu from "../components/mainmenu";
import Filterarea from "../components/filter";
import Cardcontainer from "../components/card/cardcontainer";
import "../style/scss/main.scss";

const Appcontainer = () => {
  return (
    <React.Fragment>
      <div className="app-container">
        <Header />
        <div className="app-main">
          <Mainmenu />
          <div className="app-main__outer">
            <Filterarea />
            <div className="row">
              <div className="d-flex justify-content-between mb-3">
                {" "}
                <h4> Showing 26 Product</h4>
                <div className="d-flex Sort-container">
                  <p>Sort by:</p>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Newest to oldest</option>
                    <option value="1">Oldest to Newwst</option>
                    <option value="2">Low to High</option>
                  </select>
                </div>
              </div>
              <div className="masonry">
                <Cardcontainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Appcontainer;
