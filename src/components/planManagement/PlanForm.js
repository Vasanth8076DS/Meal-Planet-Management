import React, { useState } from "react";
import Input from "../common/Input";
import { useForm } from "../hook/form-hook";


// const validationSchema = Yup.object().shape({
//   brandId: Yup.string().required("Brand ID is required"),
//   brandName: Yup.string().required("Brand Name is required"),
//   brandIdLogoUrl: Yup.string().required("Brand Logo URL is required"),
//   brandDesc: Yup.string().required("Brand Description is required"),
// });

function PlanForm(props) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedKitchen, setSelectedKitchen] = useState("");
  const [selectedPackage, setSelectedPackage] = useState("");
  const [selectedMenuGroup, setSelectedMenuGroup] = useState("");
  // Define the initial input configuration
  const initialInput = {
    planName: {
      value: "",
    },
    planImg: {
      value: "",
    },
    dietaryInfo: {
      value: "",
    },
    benefit: {
      value: "",
    },
    plandesc: {
      value: "",
    },
  };

  // Use the useForm hook to manage the form state
  const [formState, inputHandler, setFormData] = useForm(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // If validation succeeds, you can proceed with form submission
      const formData = {
        planName: formState.inputs.planName.value,
        planImg: formState.inputs.planImg.value,
        dietaryInfo: formState.inputs.dietaryInfo.value,
        benefit: formState.inputs.benefit.value,
        plandesc: formState.inputs.plandesc.value,
        selectedBrand: selectedBrand,
        selectedCountry: selectedCountry,
        selectedCity: selectedCity,
        selectedKitchen: selectedKitchen,
        selectedPackage: selectedPackage,
        selectedMenuGroup: selectedMenuGroup,
      };

      // Do something with the form data, e.g., send it to an API
      console.log(formData);
    } catch (error) {
      // If validation fails, handle the validation errors
      console.error("Validation error:", error.errors);
    }
  };

  const BrandNameList = [
    { value: "", label: "Select Brand Name" },
    { value: "Nutri Planners", label: "Nutri Planners" },
    { value: "Nutri Ganiner", label: "Nutri Planners" },
  ];

  const CountriesList = [
    { value: "", label: "Select Country" },
    { value: "INDIA", label: "INDIA" },
    { value: "USA", label: "USA" },
    { value: "DUBAI", label: "DUBAI" },
    { value: "KUWIT", label: "KUWIT" },
  ];

  const CitiesList = [
    { value: "", label: "Select City" },
    { value: "Chennai", label: "Chennai" },
    { value: "Kolkatha", label: "Kolkatha" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Bengaluru", label: "Bengaluru" },
  ];

  const kitchenOptions = [
    { value: "", label: "Select Kitchen" },
    { value: "kitchen1", label: "Kitchen 1" },
    { value: "kitchen2", label: "Kitchen 2" },
    { value: "kitchen3", label: "Kitchen 3" },
  ];

  const packageOptions = [
    { value: "", label: "Select Package" },
    { value: "package1", label: "Package 1" },
    { value: "package2", label: "Package 2" },
    { value: "package3", label: "Package 3" },
    // Add more package options as needed
  ];

  const menuGroupOptions = [
    { value: "", label: "Select Menu Group" },
    { value: "group1", label: "Group 1" },
    { value: "group2", label: "Group 2" },
    { value: "group3", label: "Group 3" },
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Plan Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <label>Brand Name</label>
            <select
              className="form-select brand-input form-select-lg mb-3"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {BrandNameList.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <Input
              id="planName"
              element="input"
              type="text"
              label="Plan Name"
              name="planName"
              value={formState.inputs.planName.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Plan Name"
            />
          </div>
          <div className="col-4">
            <Input
              id="planImg"
              element="input"
              type="file"
              label="Plan Img"
              name="planImg"
              value={formState.inputs.planImg.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Plan Image"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <Input
              id="dietaryInfo"
              element="input"
              type="text"
              label="Dietary Info"
              name="dietaryInfo"
              value={formState.inputs.dietaryInfo.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Dietary Info"
            />
          </div>
          <div className="col-4">
            <Input
              id="benefit"
              element="input"
              type="text"
              label="Benefit"
              name="benefit"
              value={formState.inputs.benefit.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Benefit"
            />
          </div>
          <div className="col-4">
            <Input
              id="plandesc"
              element="input"
              type="text"
              label="Plan Desc"
              name="plandesc"
              value={formState.inputs.plandesc.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Plan Desc"
            />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-4">
            <label>Country</label>
            <select
              className="form-select brand-input form-select-lg mb-3"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {CountriesList.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label>City</label>
            <select
              className="form-select brand-input form-select-lg mb-3"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {CitiesList.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label>Kitchen</label>
            <select
              className="form-select brand-input form-select-lg mb-3"
              value={selectedKitchen}
              onChange={(e) => setSelectedKitchen(e.target.value)}
            >
              {kitchenOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <label>Package</label>
            <select
              className="form-select brand-input form-select-lg mb-3"
              value={selectedPackage}
              onChange={(e) => setSelectedPackage(e.target.value)}
            >
              {packageOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4">
            <label>Menu Group</label>
            <select
              className="form-select brand-input form-select-lg mb-3"
              value={selectedMenuGroup}
              onChange={(e) => setSelectedMenuGroup(e.target.value)}
            >
              {menuGroupOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 text-center">
            <button className="cancel_button">Cancel</button>
            <button
              className="save_button_brand"
              style={{ marginLeft: "10px" }}
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlanForm;
