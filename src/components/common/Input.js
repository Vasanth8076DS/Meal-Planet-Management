import React, { useEffect, useReducer } from "react";

// Define inputReducer before using it in useReducer
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return { ...state, value: action.val };

    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, { value: "" });

  const { id, onInput } = props;
  const { value } = inputState;

  useEffect(() => {
    onInput(id, value);
  }, [id, value]);

  const changeHandler = (event) => {
    dispatch({ type: "CHANGE", val: event.target.value });
  };

  const element =
    props.element === "input" ? (
      <input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={changeHandler}
        value={inputState.value}
        className={props.className}
      />
    ) : (
      <textarea
        name={props.name}
        id={props.id}
        type={props.type}
        onChange={changeHandler}
        value={inputState.value}
        rows={props.rows || 3}
        className={props.className}
      />
    );

  return (
    <div>
      <label htmlFor={props.id} className={props.labelClassName}>{props.label || ""}</label>
      {element}
    </div>
  );
};

export default Input;
