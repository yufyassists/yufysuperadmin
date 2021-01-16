import React from "react";
import { Redirect } from "react-router-dom";
import Home from "./Screens/Home";
import HomeOverview from "./Screens/HomeOverview";
import KnowYourhelper from './Screens/KnowYourHelper';
import Configuration from "./Screens/Configuration";
import AddOrRemove from "./Screens/AddOrRemove";
import InstantNotification from "./Screens/InstantNotification";
import Pendinghelperreferrals from "./Screens/Pendinghelperreferrals";
export default [
  {
    path: "/",
    exact: true,
    layout: Home,
    component: () => <Redirect to="/home" />
  },
  {
    path: "/home",
    layout: Home,
    component: HomeOverview
  },
  {
    path: "/knowyourhelper",
    layout: Home,
    component: KnowYourhelper
  },
  {
    path: "/configuration",
    layout: Home,
    component: Configuration
  },
  {
    path: "/addorremove",
    layout: Home,
    component: AddOrRemove
  },
  {
    path: "/instantNotification",
    layout: Home,
    component: InstantNotification
  },
  {
    path: "/Pendinghelperreferrals",
    layout: Home,
    component: Pendinghelperreferrals
  },
 
];
