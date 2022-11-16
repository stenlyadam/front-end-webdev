import React, { useState } from "react";
import Logo from "../../atoms/Logo";
import TopNavbar from "../TopNavbar";
import Button from "../../atoms/Button";

const Header = (props) => {
  // let title = "Welcome to my website";
  const [title, setTitle] = useState("Welcome to my website");

  const handleClick = () => {
    setTitle("Selamat datang di website saya");
    console.log(title);
  };

  return (
    <>
      <TopNavbar />
      <h1> {title} </h1>
      <h3> {props.subTitle}</h3>
      <Button title="Change Title" handleClick={handleClick} />
      <Logo />
    </>
  );
};

export default Header;
