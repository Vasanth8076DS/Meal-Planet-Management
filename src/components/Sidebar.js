import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import SideBarJson from "../components/SideBar.json";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);



  return (
    <nav className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-inner">
        <header className="sidebar-header">
          <button
            type="button"
            className="sidebar-burger"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="material-symbols-outlined">
              {isOpen ? "close" : "menu"}
            </span>
          </button>
          
        </header>
        <nav className="sidebar-menu">
      {Object.keys(SideBarJson).map((itemKey) => {
        const item = SideBarJson[itemKey];
        return (
          <Link
            key={itemKey}
            to={item.uiPath}
            className="sidebar-link sidebar-button"
          >
            <span className="material-symbols-outlined">{item?.iconName}</span>
            <p className="p">{itemKey}</p>
          </Link>
        );
      })}
    </nav>
      </div>
    </nav>
  );
};

export default Sidebar;
