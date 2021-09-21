import { useEffect, useState } from "react";
import Slide from "./sliderContent.js";
import bg1 from "./bg_pics/1.png";
import bg2 from "./bg_pics/2.png";
import bg3 from "./bg_pics/3.png";
import bg4 from "./bg_pics/4.png";
import Arrow from "./sliderArrows.js";
import Dots from "../dots.js";
import "./slider.scss";

function Slider() {
  const [index, setIndex] = useState(0);
  const [state, setState] = useState({
    Index: 0,
    translate: 0,
    transition: 0.45,
  });
  useEffect(() => {
    console.log(index);
    console.log(state);
  });
  const slides = [bg1, bg2, bg3, bg4];
  const slideHeader = ["Бесплатная парковка", "Страховка", "Бензин", "Обслуживание"]; //контейнер для заголовков слайда
  const slideParagraph = [
    //контейнер для основного текста
    "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
    "Полная страховка страховка автомобиля",
    "Полный бак на любой заправке города за наш счёт",
    "Автомобиль проходит еженедельное ТО",
  ];
  const nextSlide = () => {
    //пролистывает слайд вправо
    if (index === slides.length - 1) {
      //но если слайд последний - возвращает в начало
      setIndex(0);
      setState({
        ...state,
        translate: 0,
      });
      return;
    }
    setIndex((index) => index + 1);
    setState({
      ...state,
      translate: `${(index + 1) * 25}`,
    });
  };
  //перелистывает назад
  const prevSlide = () => {
    if (index === 0) {
      setIndex(slides.length - 1);
      setState({
        ...state,
        translate: `${(slides.length - 1) * 25}`,
      });

      return;
    }
    setIndex((index) => index - 1);
    setState({
      ...state,
      translate: `${(index - 1) * 25}`,
    });
  };
  return (
    <div className="slider">
      <Arrow handleClick={prevSlide} direction="left" />
      <Arrow handleClick={nextSlide} direction="right" />
      <div
        className="slider_content"
        style={{
          transform: `translateX(-${state.translate}%)`,
          transition: `transform ease-out ${state.transition}s`,
        }}
      >
        {slides.map((slide, id) => (
          <Slide
            key={id + 1}
            content={slide}
            header={slideHeader[id]}
            para={slideParagraph[id]}
            btn={`slider_button${id + 1}`}
            click={`slider_button${id + 1}_pressed`}
          />
        ))}
      </div>
      <Dots slides={slides} activeIndex={index} />
    </div>
  );
}

export default Slider;
