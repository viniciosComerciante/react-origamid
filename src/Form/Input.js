import React from "react";

const Input = ({ label, id, value, onChange, ...props}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
};

export default Input;
