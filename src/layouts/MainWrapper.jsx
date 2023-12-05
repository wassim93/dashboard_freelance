import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./Sidebar";
import "./main.scss";

function MainWrapper({ children, withSidebar }) {
  // const apiUrl = import.meta.env.MODE;
  // console.log(apiUrl);
  return (
    <div id="main-wrapper">
      <Header />
      <div className="clearfix"></div>
      <div className="dashboard-wrap bg-light">
        {withSidebar && <Sidebar />}
        <div className="dashboard-content">{children}</div>
      </div>
      <a id="back2Top" className="top-scroll" title="Back to top" href="#">
        <i className="fa fa-arrow-up"></i>
      </a>
    </div>
  );
}

MainWrapper.propTypes = {};

export default MainWrapper;
