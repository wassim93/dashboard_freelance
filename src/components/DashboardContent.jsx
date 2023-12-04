import React from "react";
import PropTypes from "prop-types";
import DashboardBreadcrumps from "../shared/dashboard-breadcrumps/DashboardBreadcrumps";
import DashboardCards from "../shared/dashboard-cards/DashboardCards";
import DashboardChart from "../shared/dashboard-chart/DashboardChart";
import NotificationPanel from "../shared/notification-panel/NotificationPanel";
import Datatable from "../shared/datatable/Datatable";

function DashboardContent(props) {
  return (
    <>
      <DashboardBreadcrumps />

      <div className="dashboard-widg-bar">
        <DashboardCards />
        <div className="row gx-4 gy-4 mb-4">
          <DashboardChart />
          <NotificationPanel />
        </div>
        <Datatable />
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="py-3 text-center">© 2015 - 2023 Job Stock® Themezhub.</div>
        </div>
      </div>
    </>
  );
}

DashboardContent.propTypes = {};

export default DashboardContent;
