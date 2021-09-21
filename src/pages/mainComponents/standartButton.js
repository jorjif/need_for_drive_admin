import { useState } from "react";
import React from "react";
import classNames from "classnames";
//это кнопка,  которая меняет цвет при нажатии и наведении
function Button({ classes, pressed, onClick, msg, disable }) {
  const [pressedBtn, setPressed] = useState(false);
  const btnClass = classNames({
    button: true,
    [`${classes}`]: classes, // получает аргументом класс, обычно содержит цвет
    [`${pressed}`]: pressedBtn, //получает аргументом класс, меняющий при нажатии цвет
    //!важно для изменения цвета надо перекрыть значение в :hover, просто background не сработает
  });
  //она получает значение внури в качестве аргумента msg
  return (
    <button
      className={btnClass}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
      disabled={disable}
    >
      {msg}
    </button>
  );
}

export default Button;
