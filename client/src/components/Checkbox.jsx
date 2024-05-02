import React from 'react';
import CheckIcon from './CheckIcon';

const Checkbox = ({ handleInterestChange, participant, name, label }) => {
    return (
        <div className="flex gap-2 mb-1.5 items-center">
            <input
                className="hidden"
                type="checkbox"
                name={name}
                id={name}
                onChange={handleInterestChange}
            />
            <label
                htmlFor={name}
                className="text-gray-900 flex items-center gap-2"
            >
                <span
                    className={`h-[18px] w-[18px] rounded border border-gray-800 flex justify-center items-center ${
                        participant.interest.includes(name) &&
                        'bg-blue-500 !border-blue-500'
                    }`}
                >
                    <CheckIcon />
                </span>
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
