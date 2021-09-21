import { ReactComponent as Geo } from "../../icons/geomark.svg";
import "./orderHeader.scss";
import NavbarElement from "./nav";

function OrderHeader() {
  return (
    <div className="order_header">
      <header className="order_header_header">
        <h1>Need for drive</h1>
        <div className="main-page_geo">
          <Geo />
          <p>Ульяновск</p>
        </div>
      </header>
      <NavbarElement />
    </div>
  );
}
export default OrderHeader;
