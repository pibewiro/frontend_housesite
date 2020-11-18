import React from "react";
const InputComponent = ({
  inputDivClass,
  id,
  label,
  type,
  inputClass,
  name,
  onChange,
  error,
  errorClass,
  mkey,
}) => {
  return (
    <div>
      <div className={inputDivClass}>
        <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          className={inputClass}
          name={name}
          onChange={onChange}
        />
        <p className={errorClass}>{error}</p>
      </div>
    </div>
  );
};

export default InputComponent;
