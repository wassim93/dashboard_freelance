import React from "react";
import PropTypes from "prop-types";
import "./notification-panel.scss";

function NotificationPanel(props) {
  return (
    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4>Notifications</h4>
        </div>
        <div className="ground-list ground-list-hove">
          <div className="ground ground-single-list">
            <a href="#">
              <div className="btn-circle-40 text-warning bg-light-warning">
                <i className="fas fa-home"></i>
              </div>
            </a>

            <div className="ground-content">
              <h6>
                <a href="#">
                  <strong>Kr. Shaury Preet</strong> Replied your message
                </a>
              </h6>
              <span className="small">Just Now</span>
            </div>
          </div>

          <div className="ground ground-single-list">
            <a href="#">
              <div className="btn-circle-40 text-danger bg-light-danger">
                <i className="fa-solid fa-comments"></i>
              </div>
            </a>

            <div className="ground-content">
              <h6>
                <a href="#">
                  Mortin Denver accepted your resume on <strong>Job Stock</strong>
                </a>
              </h6>
              <span className="small">20 min ago</span>
            </div>
          </div>

          <div className="ground ground-single-list">
            <a href="#">
              <div className="btn-circle-40 text-info bg-light-info">
                <i className="fa-solid fa-heart"></i>
              </div>
            </a>

            <div className="ground-content">
              <h6>
                <a href="#">
                  Your job #456256 expired yesterday <strong>View More</strong>
                </a>
              </h6>
              <span className="small">1 day ago</span>
            </div>
          </div>

          <div className="ground ground-single-list">
            <a href="#">
              <div className="btn-circle-40 text-danger bg-light-danger">
                <i className="fa-solid fa-thumbs-up"></i>
              </div>
            </a>

            <div className="ground-content">
              <h6>
                <a href="#">
                  <strong>Daniel Kurwa</strong> has been approved your resume!.
                </a>
              </h6>
              <span className="small">10 days ago</span>
            </div>
          </div>

          <div className="ground ground-single-list">
            <a href="#">
              <div className="btn-circle-40 text-success bg-light-success">
                <i className="fa-solid fa-comment-dots"></i>
              </div>
            </a>

            <div className="ground-content">
              <h6>
                <a href="#">
                  Khushi Verma left a review on <strong>Your Message</strong>
                </a>
              </h6>
              <span className="small">Just Now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NotificationPanel.propTypes = {};

export default NotificationPanel;
