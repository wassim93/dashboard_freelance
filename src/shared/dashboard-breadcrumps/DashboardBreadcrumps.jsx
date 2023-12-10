import React from "react";
import PropTypes from "prop-types";
import "./dashboard-breadcrumps.scss";

function DashboardBreadcrumps({ title, withNavigation, navigation1, navigation2, navigation3 }) {
  return (
    <div className="dashboard-tlbar d-block mb-4">
      <div className="row">
        <div className="colxl-12 col-lg-12 col-md-12">
          <h1 className="mb-1 fs-3 fw-medium">{title}</h1>
          {withNavigation && (
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item text-muted">
                  <a href="#">{navigation1}</a>
                </li>
                <li className="breadcrumb-item text-muted">
                  <a href="#">{navigation2}</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#" className="text-primary">
                    {navigation3}
                  </a>
                </li>
              </ol>
            </nav>
          )}
        </div>
      </div>
    </div>
  );
}

DashboardBreadcrumps.propTypes = {
  title: PropTypes.string.isRequired,
  withNavigation: PropTypes.bool,
  navigation1: PropTypes.string,
  navigation2: PropTypes.string,
  navigation3: PropTypes.string,
};
DashboardBreadcrumps.defaultProps = {
  withNavigation: false,
};

export default DashboardBreadcrumps;
