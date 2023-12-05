import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./sidebar.scss";

function Sidebar(props) {
  const navigateTo = useNavigate();
  return (
    <>
      <a
        className="mobNavigation"
        data-bs-toggle="collapse"
        href="#MobNav"
        role="button"
        aria-expanded="false"
        aria-controls="MobNav"
      >
        <i className="fas fa-bars mr-2"></i>Dashboard Navigation
      </a>
      <div className="collapse" id="MobNav">
        <div className="dashboard-nav">
          <div className="dash-user-blocks pt-5">
            <div className="jbs-grid-usrs-thumb">
              <div className="jbs-grid-yuo">
                <a href="candidate-detail.html">
                  <figure>
                    <img src="https://placehold.co/200x200" className="img-fluid circle" alt="" />
                  </figure>
                </a>
              </div>
            </div>
            <div className="jbs-grid-usrs-caption mb-3">
              <div className="jbs-kioyer">
                <span className="theme-bg">05 Openings</span>
              </div>
              <div className="jbs-tiosk">
                <h4 className="jbs-tiosk-title">
                  <a href="candidate-detail.html">Instagram App</a>
                </h4>
                <div className="jbs-tiosk-subtitle">
                  <span>
                    <i className="fa-solid fa-location-dot me-2"></i>Canada
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="dashboard-inner">
            <ul data-submenu-title="Main Navigation">
              <li className="active">
                <a href="employer-dashboard.html">
                  <i className="fa-solid fa-gauge-high me-2"></i>User Dashboard
                </a>
              </li>
              <li>
                <a href="#" onClick={() => navigateTo("/nosidebar")}>
                  <i className="fa-regular fa-user me-2"></i>NoSidebar
                </a>
              </li>
              <li>
                <a href="employer-profile.html">
                  <i className="fa-regular fa-user me-2"></i>User Profile{" "}
                </a>
              </li>
              <li>
                <a href="employer-jobs.html">
                  <i className="fa-solid fa-business-time me-2"></i>My Jobs
                </a>
              </li>
              <li>
                <a href="employer-submit-job.html">
                  <i className="fa-solid fa-pen-ruler me-2"></i>Submit Jobs
                </a>
              </li>
              <li>
                <a href="employer-applicants-jobs.html">
                  <i className="fa-solid fa-user-group me-2"></i>Applicants Jobs
                </a>
              </li>
              <li>
                <a href="employer-shortlist-candidates.html">
                  <i className="fa-solid fa-user-clock me-2"></i>Shortlisted Candidates
                </a>
              </li>
              <li>
                <a href="employer-package.html">
                  <i className="fa-solid fa-wallet me-2"></i>Package
                </a>
              </li>
              <li>
                <a href="employer-messages.html">
                  <i className="fa-solid fa-comments me-2"></i>Messages
                </a>
              </li>
              <li>
                <a href="employer-change-password.html">
                  <i className="fa-solid fa-unlock-keyhole me-2"></i>Change Password
                </a>
              </li>
              <li>
                <a href="employer-delete-account.html">
                  <i className="fa-solid fa-trash-can me-2"></i>Delete Account
                </a>
              </li>
              <li>
                <a href="index.html">
                  <i className="fa-solid fa-power-off me-2"></i>Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

Sidebar.propTypes = {};

export default Sidebar;
