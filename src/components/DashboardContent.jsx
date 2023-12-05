import React from "react";
import PropTypes from "prop-types";
import DashboardBreadcrumps from "../shared/dashboard-breadcrumps/DashboardBreadcrumps";
import DashboardCards from "../shared/dashboard-cards/DashboardCards";
import DashboardChart from "../shared/dashboard-chart/DashboardChart";
import NotificationPanel from "../shared/notification-panel/NotificationPanel";
import Datatable from "../shared/datatable/Datatable";
import Footer from "../layouts/Footer";
import { CardsDummyData } from "../shared/dashboard-cards/cards-dummy-data";

function DashboardContent(props) {
  return (
    <>
      <DashboardBreadcrumps />

      <div className="dashboard-widg-bar">
        <DashboardCards items={CardsDummyData} />
        <div className="row gx-4 gy-4 mb-4">
          <DashboardChart />
          <NotificationPanel />
        </div>
        <Datatable />
      </div>

      <Footer />
    </>
  );
}

DashboardContent.propTypes = {};

export default DashboardContent;
