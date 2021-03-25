import React from "react";

const Input = ({ label, id, value, setValue, ...props}) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        {...props}
      />
    </>
  );
};

export default Input;
