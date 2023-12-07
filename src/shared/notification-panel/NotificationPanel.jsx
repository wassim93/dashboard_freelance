import React from "react";
import PropTypes from "prop-types";
import "./notification-panel.scss";

function NotificationPanel({ items }) {
  return (
    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4>Notifications</h4>
        </div>
        <div className="ground-list ground-list-hove">
          {items?.map((item, index) => (
            <div key={index} className="ground ground-single-list">
              <a href="#">
                <div className={`btn-circle-40 ${item?.fontAwesomeIconColor}`}>
                  <i className={`${item?.fontAwsomeIcon}`}></i>
                </div>
              </a>

              <div className="ground-content">
                <h6>
                  <a href="#">
                    <strong>{item?.notificationStrongText}</strong> {item?.notificationText}
                  </a>
                </h6>
                <span className="small">{item?.notificationTime}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

NotificationPanel.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NotificationPanel;
