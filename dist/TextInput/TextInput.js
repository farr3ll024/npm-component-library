import React from "react";
import PropTypes from 'prop-types';
import "./TextInput.css";

const TextInput = ({ type = "text", label, value, onChange }) => React.createElement(
    "div",
    { className: "simple-form-group" },
    label && React.createElement(
        "label",
        { className: "simple-text-label" },
        label
    ),
    React.createElement("input", {
        type: type,
        className: "simple-text-input",
        value: value,
        onChange: e => onChange && onChange(e.target.value)
    })
);

TextInput.propTypes = {
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
};

export default TextInput;