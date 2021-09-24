import NavElement from "./navPiece";
import "./navigation.scss";
import { ReactComponent as Blog } from "../../images/Blog.svg";
export default function AdminNav() {
  return (
    <div className="admin_control_nav">
      <NavElement svg={<Blog />}>Карточка автомобиля</NavElement>
    </div>
  );
}
