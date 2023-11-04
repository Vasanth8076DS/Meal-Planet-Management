import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "../hook/form-hook";
import Input from "../common/Input";

// const validationSchema = Yup.object().shape({
//   countryCode: Yup.string().required("Country Code is required"),
//   countryName: Yup.string().required("Country Name is required"),
//   countryLogo: Yup.string()
//     .url("Country Logo must be a valid URL")
//     .required("Country Logo URL is required"),
//   isActive: Yup.boolean().required("Active status is required"),
// });

const CountryForm = ({ onSubmit }) => {
  // Define the initial input configuration
  const initialInput = {
    countryId: {
      value: "",
    },
    countryName: {
      value: "",
    },
    countryCode: {
      value: "",
    },
    countryCode: {
      value: "",
    },
    countryLogo: {
      value: "",
    },
  };

  // Use the useForm hook to manage the form state
  const [formState, inputHandler, setFormData] = useForm(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Yup to validate the form data

      // If validation succeeds, you can proceed with form submission
      const formData = {
        countryId: formState.inputs.countryId.value,
        countryName: formState.inputs.countryName.value,
        countryCode: formState.inputs.countryCode.value,
        countryLogo: formState.inputs.countryLogo.value,
      };

      // Do something with the form data, e.g., send it to an API
      console.log(formData);
    } catch (error) {
      // If validation fails, handle the validation errors
      console.error("Validation error:", error.errors);
    }
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Country Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <Input
              id="countryId"
              element="input"
              type="text"
              label="Country ID"
              name="countryId"
              value={formState.inputs.countryId.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Country Id"
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row mt-2">
          <div className="col-3"></div>
          <div className="col-6">
            <Input
              id="countryName"
              element="input"
              type="text"
              label="Country Name"
              name="countryName"
              value={formState.inputs.countryName.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Country Name"
            />
          </div>
          <div className="col-3"></div>
        </div>

        <div className="row mt-2">
          <div className="col-3"></div>
          <div className="col-6">
            <Input
              id="countryCode"
              element="input"
              type="text"
              label="Country Code"
              name="countryCode"
              value={formState.inputs.countryCode.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Country Code"
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row mt-2">
          <div className="col-3"></div>
          <div className="col-6">
            <Input
              id="countryLogo"
              element="input"
              type="file"
              label="Country Code"
              name="countryLogo"
              value={formState.inputs.countryLogo.value}
              onInput={inputHandler}
              className="brand-input"
              labelClassName="mt-2"
              placeholder="Country Logo"
            />
          </div>
          <div className="col-3"></div>
        </div>
        <div className="row">
          <div className="col-12 mt-3 text-center">
            <button className="cancel_button">Cancel</button>
            <button class="save_button_brand " style={{ marginLeft: "10px" }}>
              save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CountryForm;
