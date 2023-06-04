import { useState } from "react";

const FormGroup = ({ label, id, inputValue, setInputValue }) => {
    //   const [inputValue, setInputValue] = useState('');
    const [labelFocus, setLabelFocus] = useState(false);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleInputFocus = () => {
        setLabelFocus(true);
    };

    const handleInputBlur = () => {
        if (!inputValue) {
            setLabelFocus(false);
        }
    };

    return (
        <div className="form-group relative mb-4">
            <label
                htmlFor={id}
                className={`pointer-events-none absolute left-2 transition-all duration-300 text-sm  ${labelFocus || inputValue ? '-top-3 font-medium' : 'top-2 text-gray-700'
                    }`}
            >
                {label}
            </label>
            <input
                type="text"
                id={id}
                className="bg-gray-100 focus:bg-gray-100  p-2 w-full focus:outline-none border-b border-b-transparent focus:border-b-blue-950 transition-transform duration-200 ease-in-out"
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    );
};

export default FormGroup