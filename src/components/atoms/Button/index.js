import React from "react";

const Button = ({ title, setTitle }) => {
  return (
    <button type="button" className="btn btn-primary" onClick={setTitle}>
      {title}
    </button>
  );
};

export default Button;
