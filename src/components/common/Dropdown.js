import React, { useState } from 'react';

const Dropdown = ({ options, multiSelect, onSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionClick = (option) => {
    if (multiSelect) {
      // For multi-select, toggle the selection of the option
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter((item) => item !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      // For single option select, select only the clicked option
      setSelectedOptions([option]);
    }
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle">Select Options</button>
      <div className="dropdown-menu">
        {options.map((option) => (
          <div
            key={option}
            onClick={() => handleOptionClick(option)}
            className={`dropdown-item ${selectedOptions.includes(option) ? 'selected' : ''}`}
          >
            {option}
          </div>
        ))}
      </div>
      <button className="submit-button" onClick={() => onSelect(selectedOptions)}>
        Submit
      </button>
    </div>
  );
};

export default Dropdown;
