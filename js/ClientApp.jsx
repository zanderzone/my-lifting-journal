import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import TopNavigation from "./TopNavigation";
import Sidebar from "./Sidebar";
import Home from "./Home";

// const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="container">
      <div className="row">
        <TopNavigation />
      </div>
      <div className="row">
        <Sidebar />
        <Route path="/" component={Home} />
      </div>
    </div>
  </BrowserRouter>
);
// const SideBar = () => (
//   <div className="span3">
//     <div className="well sidebar-nav">
//       <ul className="nav nav-list">
//         <li className="nav-header">Sidebar</li>
//       </ul>
//     </div>
//   </div>
// );

// const App = () => (
//   <div>
//     <BrowserRouter>
//       <div className="app navbar navbar-inverse navbar-fixed-top">
//         <Switch>
//           <Route exact path="/" component={TopNavigation} />
//           <Route component={FourOhFour} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//     <div className="container-fluid">
//       <div className="row-fluid">
//         <SideBar />
//       </div>
//     </div>
//   </div>
// );

render(<App />, document.getElementById("app"));
