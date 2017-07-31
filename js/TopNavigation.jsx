import React from "react";
import { Link } from "react-router-dom";

const TopNavigation = () => (
  <div className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed">
          <span className="sr-only">Toggle Navigation</span>
        </button>
        <Link className="navbar-brand" to="/">
          My Lifting Journal
        </Link>
      </div>
    </div>
  </div>
);

export default TopNavigation;
