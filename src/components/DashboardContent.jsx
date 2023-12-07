import React from "react";
import PropTypes from "prop-types";
import DashboardBreadcrumps from "../shared/dashboard-breadcrumps/DashboardBreadcrumps";
import DashboardCards from "../shared/dashboard-cards/DashboardCards";
import DashboardChart from "../shared/dashboard-chart/DashboardChart";
import NotificationPanel from "../shared/notification-panel/NotificationPanel";
import Datatable from "../shared/datatable/Datatable";
import Footer from "../layouts/Footer";
import { CardsDummyData } from "../shared/dashboard-cards/cards-dummy-data";
import { NotificationDummyData } from "../shared/notification-panel/notifications-dummy-data";
import { DatatableActions, DummyDatatableData } from "../shared/datatable/dummy-datatable-data";

function DashboardContent(props) {
  const onRowActionClick = (action, data) => {
    console.log(action, "daaaaa", data);
  };
  return (
    <>
      <DashboardBreadcrumps />

      <div className="dashboard-widg-bar">
        <DashboardCards items={CardsDummyData} />
        <div className="row gx-4 gy-4 mb-4">
          <DashboardChart />
          <NotificationPanel items={NotificationDummyData} />
        </div>
        <Datatable
          items={DummyDatatableData}
          onRowActionClick={onRowActionClick}
          DatatableActions={DatatableActions}
        />
      </div>

      <Footer />
    </>
  );
}

DashboardContent.propTypes = {};

export default DashboardContent;
