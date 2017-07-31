import React from "react";
import { Link } from "react-router-dom";

const TopNavigation = () => (
  <div className="navbar navbar-inverse col-md-12 col-sm-12">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          My Lifting Journal
        </Link>
      </div>
    </div>
  </div>
);

export default TopNavigation;
