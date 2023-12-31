import React from "react";
import PropTypes from "prop-types";
import "./dashboard-cards.scss";

function DashboardCards({ items }) {
  return (
    <div className="row align-items-center gx-4 gy-4 mb-4">
      {items?.map((item, index) => (
        <div key={index} className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
          <div className="dash-wrap-bloud">
            <div className="dash-wrap-bloud-icon">
              <div className={`bloud-icon ${item?.fontAwesomeIconColor}`}>
                <i className={item?.fontAwsomeIcon}></i>
              </div>
            </div>
            <div className="dash-wrap-bloud-caption">
              <div className="dash-wrap-bloud-content">
                <h5 className="ctr">{item?.value}</h5>
                <p>{item?.title}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

DashboardCards.propTypes = {
  items: PropTypes.array.isRequired,
};

export default DashboardCards;
