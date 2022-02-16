import React from "react";
import "./Button.css";

const BUTTON_STYLE = [
  "btn--primary-solid",
  "btn--warning-solid",
  "btn--danger-solid",
  "btn--success-solid",
  "btn--primary-outline",
  "btn--warning-outline",
  "btn--danger-outline",
  "btn--success-outline",
];

const BUTTON_SIZE = ["btn-medium", "btn-large"];

const Button = ({
  children,
  type,
  buttonText,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = BUTTON_STYLE.includes(buttonStyle)
    ? buttonStyle
    : BUTTON_STYLE[0];

  const checkButtonSize = BUTTON_SIZE.includes(buttonSize)
    ? buttonSize
    : BUTTON_SIZE[0];

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      buttonText={buttonText}
    >
      {children}
      {buttonText}
    </button>
  );
};

export default Button;
