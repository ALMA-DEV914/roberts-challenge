import React from "react";

const TextField = ({ label, inputProps, onChange, value }) => {
  return (
    <>
      <div className="container text-white login">
          <label className=" text-base text-800">{label}</label>
          <input
            className="bg-gray-200 border-2 outline-none"
            {...inputProps}
            onChange={onChange}
            value={value}
          />
      </div>
    </>
  );
};

export default TextField;
