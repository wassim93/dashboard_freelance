import React from "react";
import "./user-detail.scss";
import PropTypes from "prop-types";

function UserDetail(props) {
  return (
    <div className="dashboard-profle-wrapper mb-4">
      <div className="dash-prf-start">
        <div className="dash-prf-start-upper mb-2">
          <div className="dash-prf-start-thumb jbs-verified">
            <figure className="mb-0">
              <img src="https://placehold.co/200x200" className="img-fluid rounded" alt="" />
            </figure>
          </div>
        </div>
        <div className="dash-prf-start-bottom">
          <div className="upload-btn-wrapper small">
            <button className="btn">Change Profile</button>
            <input type="file" name="myfile" />
          </div>
        </div>
      </div>
      <div className="dash-prf-end">
        <div className="dash-prfs-caption emplyer">
          <div className="dash-prfs-flexfirst">
            <div className="dash-prfs-title">
              <h4>Adobe Photoshop</h4>
            </div>
            <div className="dash-prfs-subtitle">
              <div className="jbs-job-mrch-lists">
                <div className="single-mrch-lists">
                  <span>Software & Application</span>.
                  <span>
                    <i className="fa-solid fa-location-dot me-1"></i>Canada, USA
                  </span>
                </div>
              </div>
            </div>
            <div className="jbs-kioyer mt-1">
              <div className="jbs-kioyer-groups justify-content-start">
                <span className="fa-solid fa-star active"></span>
                <span className="fa-solid fa-star active"></span>
                <span className="fa-solid fa-star active"></span>
                <span className="fa-solid fa-star active"></span>
                <span className="fa-solid fa-star"></span>
                <span className="aal-reveis">4.8</span>
              </div>
            </div>
          </div>
          <div className="dash-prfs-flexends">
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                checked
              />
              <label className="form-check-label" for="flexSwitchCheckChecked">
                Show Profile
              </label>
            </div>
          </div>
        </div>
        <div className="dash-prf-caption-end">
          <div className="dash-prf-infos">
            <div className="single-dash-prf-infos">
              <div className="single-dash-prf-infos-icons">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
              <div className="single-dash-prf-infos-caption">
                <p className="text-sm-muted mb-0">Email</p>
                <h5>Themezhub@gmail.com</h5>
              </div>
            </div>
            <div className="single-dash-prf-infos">
              <div className="single-dash-prf-infos-icons">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="single-dash-prf-infos-caption">
                <p className="text-sm-muted mb-0">Call</p>
                <h5>+91 256 356 8547</h5>
              </div>
            </div>
            <div className="single-dash-prf-infos">
              <div className="single-dash-prf-infos-icons">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="single-dash-prf-infos-caption">
                <p className="text-sm-muted mb-0">Emp.</p>
                <h5>2000 - 5000</h5>
              </div>
            </div>
          </div>
          <div className="dash-prf-completion">
            <p className="text-sm-muted">Profile Completed</p>
            <div
              className="progress"
              role="progressbar"
              aria-label="Example Success with label"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar bg-success" style={{ width: "75%" }}>
                75%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

UserDetail.propTypes = {};

export default UserDetail;
