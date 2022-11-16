import React, { useState } from "react";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import TopNavbar from "../TopNavbar";

const Header = (props) => {
  const [title, setTitle] = useState("Welcome to my website");
  const [showTitle, setShowTitle] = useState(true);

  const handleClick = () => {
    setTitle("Selamat datang diwebsite saya");
  };

  return (
    <div>
      <TopNavbar />
      {showTitle && <h1>{title}</h1>}
      <h3>{props.subTitle}</h3>
      <Logo />

      <Button title="Ganti Judul" setTitle={handleClick} />

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => setShowTitle(!showTitle)}
      >
        {showTitle && "Hide Title"}
        {!showTitle && "Show Title"}
      </button>
    </div>
  );
};

export default Header;
