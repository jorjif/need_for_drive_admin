import React from "react";
import NavBar from "./nav.js";
import Slider from "./slider/slider.js";
import MainPageContent from "./mainPageContent.js";

function mainPage() {
  return (
    <div className="page">
      <NavBar />
      <MainPageContent />
      <Slider />
    </div>
  );
}
export default mainPage;
