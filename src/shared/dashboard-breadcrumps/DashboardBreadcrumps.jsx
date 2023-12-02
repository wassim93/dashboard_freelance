import React from "react";
import PropTypes from "prop-types";
import "./dashboard-breadcrumps.scss";

function DashboardBreadcrumps(props) {
  return (
    <div className="dashboard-tlbar d-block mb-4">
      <div className="row">
        <div className="colxl-12 col-lg-12 col-md-12">
          <h1 className="mb-1 fs-3 fw-medium">Employer Dashboard</h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item text-muted">
                <a href="#">Employer</a>
              </li>
              <li className="breadcrumb-item text-muted">
                <a href="#">Dashboard</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#" className="text-primary">
                  Employer Dashboard
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
}

DashboardBreadcrumps.propTypes = {};

export default DashboardBreadcrumps;
