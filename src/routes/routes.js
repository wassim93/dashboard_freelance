// routes.js
import React from "react";
import Home from "../components/Home";
import DashboardContent from "../components/DashboardContent";
import NoSidebar from "../components/NoSidebar";

const routes = [
  {
    path: "/",
    component: Home,
    exact: true,
    withSidebar: true,
  },
  {
    path: "/dashboard",
    component: DashboardContent,
    withSidebar: true,
  },
  {
    path: "/nosidebar",
    component: NoSidebar,
    withSidebar: false,
  },
  // Add more routes as needed
];

export default routes;
