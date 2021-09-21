import classNames from "classnames";
import { useState } from "react";
import "./adminInputs.scss";

function AdminButton({ style, pressedStyle, onClick, children }) {
  const [pressed, setPressed] = useState(false);

  const classes = classNames({
    "admin-button": true,
    "admin-button-pressed": pressed,
    [`${style}`]: true,
    [`${pressedStyle}`]: pressed,
  });

  return (
    <button
      className={classes}
      onMouseDown={() => setPressed(true)}
      onMouseUp={() => setPressed(false)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default AdminButton;
