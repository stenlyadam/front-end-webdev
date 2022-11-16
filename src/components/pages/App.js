import React from "react";
import Header from "../molecules/Header";
import Body from "../molecules/Body";
import SideBar from "../molecules/SideBar";
import Footer from "../molecules/Footer";

function App() {
  return (
    <div>
      <Header subTitle="Website untuk belajar ReactJS" />
      <Body />
      <SideBar />
      <Footer />
    </div>
  );
}

export default App;
