import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountryForm from "./countryForm";

function CountryManagement() {
  return (
    <>
      <CountryForm />
      <div className="row">
        <div className="col-3 mt-5">
          <Link to={`/countrymanagement`} className="sidebar-link"></Link>
        </div>
      </div>
    </>
  );
}

export default CountryManagement;
