import { ReactComponent as Geo } from "../icons/geomark.svg";
import Button from "./standartButton.js";
import "./mainPage.scss";
import { Link } from "react-router-dom";
function MainPageContent() {
  return (
    <div className="main-page">
      <header className="main-page_header">
        <h1>Need for drive</h1>
        <div className="main-page_geo">
          <Geo />
          <p>Ульяновск</p>
        </div>
      </header>
      <main className="main-page_main">
        <h1>Каршеринг</h1>
        <h2>Need for drive</h2>
        <p>Поминутная аренда авто твоего города</p>
        <Link to="/order/adress">
          <Button
            classes="main-page_main_order "
            msg="Забронировать"
            pressed="main-page_main_order_pressed"
          />
        </Link>
      </main>
      <footer className="main-page_main_footer">
        <p>© 2016-2019 «Need for drive»</p>
        <p>
          <a href="tel:+7495-234-2244">8 (495) 234-22-44</a>
        </p>
      </footer>
    </div>
  );
}
export default MainPageContent;
