import React from "react";
import "./slider.scss";
import { ReactComponent as LeftArr } from "./sliderSvg/left.svg";
import { ReactComponent as RightArr } from "./sliderSvg/right.svg";
var classNames = require("classnames");

function Arrow({ direction, handleClick }) {
  const arrowClass = classNames({
    slider_arrow: true,
    slider_arrow_right: direction === "right",
  });
  return (
    <div onClick={handleClick} className={arrowClass}>
      {direction === "right" ? <RightArr /> : <LeftArr />}
    </div>
  );
}
export default Arrow;
