import React, { useState } from "react";
import "./index.css";

const InputField = ({
  imageSrc,
  title,
  placeholder,
  inputType,
  showPasswordIcon,
  onIconClick,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
    if (onIconClick) {
      onIconClick(!isPasswordVisible);
    }
  };

  return (
    <div className="input-field">
      {imageSrc && <img src={imageSrc} alt="icon" className="input-icon" />}
      <div className="input-content">
        {title && <div className="input-title">{title}</div>}
        <input
          type={
            inputType === "password" && isPasswordVisible
              ? "text"
              : inputType
          }
          placeholder={placeholder}
          className="text-input"
        />
      </div>
      {inputType === "password" && showPasswordIcon && (
        <span
          className="toggle-password"
          onClick={handleTogglePassword}
        >
          {isPasswordVisible ? "🙈" : "👁️"}
        </span>
      )}
    </div>
  );
};

export default InputField;
