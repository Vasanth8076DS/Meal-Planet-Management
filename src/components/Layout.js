// Layout.js

import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";


const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="container mt-4">
        <div className="row ms-1 me-1">
          <div className="">
            <Sidebar />
          </div>
          <div className="">{props.children}</div>
        </div>
      </div>
      
    </div>
  );
};

export default Layout;
