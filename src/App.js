import React from "react";
import "./assets/scss/config/app.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import BrandManagement from "./components/brandMangement/BrandMagement";
import PlanManagement from "./components/planManagement/PlanManagement";
import MenuManagement from "./components/menuManagement/MenuManagement";
import CountryManagement from "./components/countryManagement/countryManagement";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/brandmanagement" element={<BrandManagement />} />{" "}
          <Route path="/planmanagement" element={<PlanManagement />} />{" "}
          <Route path="/menumanagement" element={<MenuManagement />} />{" "}
          <Route path="/countrymanagement" element={<CountryManagement />} />{" "}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
