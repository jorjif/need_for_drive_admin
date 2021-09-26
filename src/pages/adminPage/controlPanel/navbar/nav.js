import NavElement from "./navPiece";
import "./navigation.scss";
import { ReactComponent as Blog } from "../../images/Blog.svg";
import { ReactComponent as SmolLogo } from "../../images/SmolLogo.svg";
import { ReactComponent as BlogPost } from "../../images/BlogPost.svg";
import { ReactComponent as AddFile } from "../../images/AddFile.svg";
import { ReactComponent as Forms } from "../../images/FormsComponents.svg";
import { ReactComponent as Overview } from "../../images/Overview.svg";

export default function AdminNav() {
  return (
    <div className="admin_control_nav">
      <header className="admin_control_nav_header">
        <SmolLogo />
        <h1 className="admin_h2">Need for Drive</h1>
      </header>
      <NavElement svg={<Blog />}>Карточка автомобиля</NavElement>
      <NavElement svg={<BlogPost />}>Список авто</NavElement>
      <NavElement svg={<AddFile />}>Заказы</NavElement>
      <NavElement svg={<Forms />}>Тарифы</NavElement>
      <NavElement svg={<Overview />}>Доступные пункты</NavElement>
    </div>
  );
}
