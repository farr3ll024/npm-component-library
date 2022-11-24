import React from "react";
import PropTypes from 'prop-types';
import "./TextInput.css";

const TextInput = ({ type = "text", label, value, onChange }) => (
    <div className="simple-form-group">
        {label && <label className="simple-text-label">{label}</label>}
        <input
            type={type}
            className="simple-text-input"
            value={value}
            onChange={e => onChange && onChange(e.target.value)}
        />
    </div>
);

TextInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
};

export default TextInput;