import React from "react";
import Header from "../molecules/Header";
import Body from "../molecules/Body";
import Sidebar from "../molecules/Sidebar";
import Footer from "../molecules/Footer";

export default function App() {
  return (
    <div>
      <Header subTitle="Website ini untuk belajar React" />
      <Body />
      <Sidebar />
      <Footer />
    </div>
  );
}
