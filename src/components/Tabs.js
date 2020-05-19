import React from "react";
import Tab from './Tab';
import { NavLink } from 'react-router-dom';


const tabNames = ["Home", "About", "Features"];

export default function Tabs() {
  return (
    <ul className="tabs">
      {tabNames.map(tabName => {
        if (tabName === "Home") {
          return <Tab><NavLink to="/" activeClassName="is-active" exact={true}>{tabName}</NavLink></Tab>
        } else {
          return <Tab><NavLink to={tabName.toLowerCase()} activeClassName="is-active">{tabName}</NavLink></Tab>
        }
      })}
    </ul>
  );
}
