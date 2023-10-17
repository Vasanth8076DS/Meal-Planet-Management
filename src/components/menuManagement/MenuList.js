// MenuTable.js
import React from "react";
import Table from "../common/Table";

function MenuTable(props) {
  const columns = [
    { key: "week", header: "Week" },
    { key: "day", header: "Day" },
    { key: "menuItemName", header: "Menu Item" },
    { key: "menuItemDesc", header: "Menu  Description" },
    { key: "menugroupItem", header: "Menu Group" },
  ];

  return (
    <div class="table-responsive">
      <Table data={props?.menuList[0]} columns={columns} className="table" />
    </div>
  );
}

export default MenuTable;