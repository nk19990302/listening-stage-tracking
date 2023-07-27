import React from "react";
import "./button.css";

const Button = ({ children, onClick, disabled = false, style = {} }) => {
    return (
        <button
            disabled={disabled}
            className="btn"
            style={style}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
