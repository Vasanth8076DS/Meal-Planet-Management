import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BrandForm from "./BrandForm";
import CountryForm from "../countryManagement/countryForm";


function BrandManagement() {
  const [brands, setBrands] = useState([]);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:3000/brands");

  //     setBrands(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  useEffect(() => {
   // fetchData();
  }, []);

  return (
    <>
      <BrandForm />
      <CountryForm/>

      <div className="row">
        {brands?.map((brand) => (
          <div className="col-3 mt-5" key={brand}>
            <Link to={`/brandmanagement`} className="sidebar-link">
              <div className="card m-auto" style={{ width: "18rem" }}>
                <img
                  src={brand?.logoUrl}
                  className="card-img-top"
                  alt={brand.brandName}
                />
                <div className="card-body">
                  <h5 className="card-title">{brand?.brandName}</h5>
                  <p className="card-text">{brand?.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandManagement;
