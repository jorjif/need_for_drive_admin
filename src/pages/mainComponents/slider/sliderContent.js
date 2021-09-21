import React from "react";
import Button from "../standartButton";
import "./slider.scss";
function Slide({ content, header, para, btn, click }) {
  const bg = `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%), url('${content}')`;
  return (
    <div
      className="slide"
      style={{
        backgroundImage: bg,
        mixBlendMode: "normal",
      }}
    >
      <h2>{header}</h2>
      <p>{para}</p>
      <Button msg="Подробнее" classes={btn} pressed={click} />
    </div>
  );
}
export default Slide;
