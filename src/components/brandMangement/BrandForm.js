import React from "react";
import Input from "../common/Input";
import { useForm } from "../hook/form-hook";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  brandId: Yup.string().required("Brand ID is required"),
  brandName: Yup.string().required("Brand Name is required"),
  brandIdLogoUrl: Yup.string().required("Brand Logo URL is required"),
  brandDesc: Yup.string().required("Brand Description is required"),
});

function BrandForm(props) {
  // Define the initial input configuration
  const initialInput = {
    brandId: {
      value: "",
    },
    brandName: {
      value: "",
    },
    brandIdLogoUrl: {
      value: "",
    },
    brandDesc: {
      value: "",
    },
  };

  // Use the useForm hook to manage the form state
  const [formState, inputHandler, setFormData] = useForm(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Yup to validate the form data
      await validationSchema.validate(formState.inputs, { abortEarly: false });

      // If validation succeeds, you can proceed with form submission
      const formData = {
        brandId: formState.inputs.brandId.value,
        brandName: formState.inputs.brandName.value,
        brandIdLogoUrl: formState.inputs.brandIdLogoUrl.value,
        brandDesc: formState.inputs.brandDesc.value,
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
      <h2>Brand Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <Input
              id="brandId"
              element="input"
              type="text"
              label="Brand ID"
              name="brandId"
              value={formState.inputs.brandId.value}
              onInput={inputHandler}
              className="form-control"
              labelClassName="mt-2"
            />
          </div>
          <div className="col-6">
            <Input
              id="brandName"
              element="input"
              type="text"
              label="Brand Name"
              name="brandName"
              value={formState.inputs.brandName.value}
              onInput={inputHandler}
              className="form-control"
              labelClassName="mt-2"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6 mt-3">
            <Input
              id="brandIdLogoUrl"
              element="input"
              type="text"
              label="Brand Logo URL"
              name="brandIdLogoUrl"
              value={formState.inputs.brandIdLogoUrl.value}
              onInput={inputHandler}
              className="form-control"
              labelClassName="mt-2"
            />
          </div>
          <div className="col-6 mt-3">
            <Input
              id="brandDesc"
              element="input"
              type="text"
              label="Brand Description"
              name="brandDesc"
              value={formState.inputs.brandDesc.value}
              onInput={inputHandler}
              className="form-control"
              labelClassName="mt-2"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6"></div>

          <button type="submit" className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default BrandForm;
