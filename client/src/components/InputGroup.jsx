import React from 'react';

const InputGroup = ({
    label = '',
    value,
    onChange,
    type = 'text',
    id = '',
    name = '',
    required = false,
}) => {
    return (
        <div>
            <label className="block mb-2 text-gray-900" htmlFor="name">
                {label}
            </label>
            <input
                type={type}
                className="block w-full px-1.5 py-2.5 text-base font-normal text-gray-700 bg-gray-50 border border-solid border-gray-100 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-gray-100 focus:border-blue-600 focus:outline-none"
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                required={required}
            />
        </div>
    );
};

export default InputGroup;
