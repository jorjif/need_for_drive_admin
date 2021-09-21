import React from "react";
import classNames from "classnames";

function Dot({ active }) {
  const bgStyle = classNames({
    active_dot: active,
    slider_dots_dot: true,
  });
  return <span className={bgStyle} />;
}

function Dots({ slides, activeIndex }) {
  return (
    <div className="slider_dots">
      {slides.map((slide, i) => (
        <Dot key={slide} active={activeIndex === i} />
      ))}
    </div>
  );
}
export default Dots;
