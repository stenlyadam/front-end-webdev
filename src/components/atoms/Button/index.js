import React from "react";

const Button = ({ title, handleClick }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={handleClick}>
      {title}
    </button>
  );
};

export default Button;
