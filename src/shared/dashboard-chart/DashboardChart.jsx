import React from "react";
import PropTypes from "prop-types";
import "./dashboard-chart.scss";

function DashboardChart(props) {
  return (
    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
      <div className="card">
        <div className="card-header">
          <h4 className="mb-0">Extra Area Chart</h4>
        </div>
        <div className="card-body">
          <ul className="list-inline text-center m-t-40">
            <li>
              <h5>
                <i className="fa fa-circle me-1 text-warning"></i>Active jobs
              </h5>
            </li>
            <li>
              <h5>
                <i className="fa fa-circle me-1 text-danger"></i>Expired Jobs
              </h5>
            </li>
            <li>
              <h5>
                <i className="fa fa-circle me-1 text-success"></i>Applied Applicants
              </h5>
            </li>
          </ul>
          <div className="chart" id="line-chart" style={{ height: "300px" }}></div>
        </div>
      </div>
    </div>
  );
}

DashboardChart.propTypes = {};

export default DashboardChart;
