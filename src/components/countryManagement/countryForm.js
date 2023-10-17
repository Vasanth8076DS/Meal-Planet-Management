import React, { useState } from "react";
import * as Yup from "yup";
import { useForm } from "../hook/form-hook";
import Input from "../common/Input";

const validationSchema = Yup.object().shape({
  countryCode: Yup.string().required("Country Code is required"),
  countryName: Yup.string().required("Country Name is required"),
  countryLogo: Yup.string()
    .url("Country Logo must be a valid URL")
    .required("Country Logo URL is required"),
  isActive: Yup.boolean().required("Active status is required"),
});

const CountryForm = ({ initialValues, onSubmit }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const initialInput = {
    countryCode: {
      value: "",
    },
    countryName: {
      value: "",
    },
    countryLogo: {
      value: "",
    },
    isActive: {
      value: false,
    },
  };

  const [formState, inputHandler, setFormData] = useForm(initialInput);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit();

    try {
      await validationSchema.validate(formState.inputs, { abortEarly: false });
      // Handle form submission here
    } catch (error) {
      // If validation fails, handle the validation errors
      console.error("Validation error:", error.errors);
    }
  };

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel">
                Modal 1
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Show a second modal and hide this one with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle2"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Open second modal
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="modal fade"
        id="exampleModalToggle2"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel2"
        tabindex="-1"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalToggleLabel2">
                Modal 2
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              Hide this modal and show the first with the button below.
            </div>
            <div class="modal-footer">
              <button
                class="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
                data-bs-dismiss="modal"
              >
                Back to first
              </button>
            </div>
          </div>
        </div>
      </div>
      <a
        class="btn btn-primary"
        data-bs-toggle="modal"
        href="#exampleModalToggle"
        role="button"
      >
        Open first modal
      </a>
    </div>
  );
};

export default CountryForm;
