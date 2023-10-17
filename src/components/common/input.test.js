import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from './Input';


describe('Input Component', () => {
  it('should render an input element', () => {
    const { getByPlaceholderText } = render(
      <Input
        id="test-input"
        element="input"
        type="text"
        placeholder="Test Placeholder"
        name="testInput"
        className="test-class"
        label="Test Label"
        labelClassName="label-class"
        onInput={() => {}}
      />
    );

    const inputElement = getByPlaceholderText('Test Placeholder');
    expect(inputElement).toBeInTheDocument();
  });

  it('should call the onInput function when the input changes', () => {
    const onInputMock = jest.fn();
    const { getByPlaceholderText } = render(
      <Input
        id="test-input"
        element="input"
        type="text"
        placeholder="Test Placeholder"
        name="testInput"
        className="test-class"
        label="Test Label"
        labelClassName="label-class"
        onInput={onInputMock}
      />
    );

    const inputElement = getByPlaceholderText('Test Placeholder');
    fireEvent.change(inputElement, { target: { value: 'New Value' } });

    expect(onInputMock).toHaveBeenCalledWith('test-input', 'New Value');
  });
});
