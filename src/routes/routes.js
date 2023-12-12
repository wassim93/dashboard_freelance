// routes.js
import React from "react";
import Home from "../components/CandidateDashboard";
import EmployerDashboard from "../components/EmployerDashboard";
import CandidateDashboard from "../components/CandidateDashboard";
import { CandidateSidebarItems, EmployerSidebarItems } from "./sidebar-items";
import UserProfile from "../components/UserProfile";
import LandingPage from "../components/LandingPage";

const routes = [
  {
    path: "/home",
    component: LandingPage,
    exact: true,
    withSidebar: false,
    sidebarItems: null,
  },
  /** * Candidate dashboard routes * **/
  {
    path: "/candidate-dashboard",
    component: CandidateDashboard,
    exact: true,
    withSidebar: true,
    sidebarItems: CandidateSidebarItems,
  },

  {
    path: "/user-profile",
    component: UserProfile,
    withSidebar: true,
    sidebarItems: EmployerSidebarItems,
  },

  /** * Employer dashboard routes * **/

  {
    path: "/employer-dashboard",
    component: EmployerDashboard,
    withSidebar: true,
    sidebarItems: EmployerSidebarItems,
  },
  // {
  //   path: "/nosidebar",
  //   component: NoSidebar,
  //   withSidebar: false,
  //   // sidebarItems: EmployerSidebarItems,
  // },

  // Add more routes as needed
];

export default routes;
