import NavBar from "../mainComponents/nav";
import OrderContent from "./orderContent";
import "../../index.scss";
import OrderHeader from "./orderHeader/orderHeader";
function Order() {
  return (
    <div className="page">
      <NavBar />
      <div className="page_order">
        <OrderHeader />
        <OrderContent />
      </div>
    </div>
  );
}
export default Order;
