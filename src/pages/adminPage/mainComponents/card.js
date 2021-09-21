import classNames from "classnames";
import "./backgrounds.scss";

function PaperCard({ style, children }) {
  const classes = classNames({
    paper: true,
    [`${style}`]: true,
  });

  return <div className={classes}>{children}</div>;
}

export default PaperCard;
