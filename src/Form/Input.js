import React from "react";

const Input = ({ label, id, value, onChange, type, onBlur, placeholder, error}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
