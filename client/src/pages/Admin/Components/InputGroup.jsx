import React from "react";

const InputGroup = ({ className, onChange, value, type, name, label, id }) => {
  return (
    <div className={className}>
      <label htmlFor={id} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-1">
        <input
          value={value}
          onChange={onChange}
          type={type}
          name={name}
          id={id}
          className="block w-full rounded-md border-0 p-2 pr-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
          placeholder="180"
        />
      </div>
    </div>
  );
};

export default InputGroup;
