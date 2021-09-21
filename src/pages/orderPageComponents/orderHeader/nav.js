import { useSelector } from "react-redux";
import { ReactComponent as Arrow } from "../../icons/orderArrow.svg";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function NavbarElement() {
  const adressStatus = useSelector((store) => store.adress.status);
  const carSelectStatus = useSelector((store) => store.car.status);
  const optionsStatus = useSelector((store) => store.options.status);
  const confirmationStatus = useSelector((store) => store.status.status);
  const isConfirmed = useSelector((store) => store.status.orderConfirmed);
  const [id, setId] = useState("");
  useEffect(() => {
    const url = document.URL;
    const orderId = url.split("/");
    setId(orderId[orderId.length - 1]);
  }, []);

  function classForMenu(status) {
    return classNames({
      order_header_nav_element: true,
      order_header_nav_element_isActive: status === "in progress",
      order_header_nav_element_complete: status === "complete",
      order_header_nav_element_blocked: status === "blocked",
    });
  }

  function isDisabled(e, status) {
    if (status === "blocked") {
      e.preventDefault();
    }
  }

  if (isConfirmed) {
    return (
      <nav className="order_header_nav">
        <p className="order_header_nav_element_first_order-number">
          Номер заказа RU {id}
        </p>
      </nav>
    );
  }

  return (
    <nav className="order_header_nav">
      <Link to="/order/adress" onClick={(e) => isDisabled(e, adressStatus)}>
        <p className={classForMenu(adressStatus)}>Местоположение</p>
      </Link>
      <Arrow />
      <Link to="/order/cars" onClick={(e) => isDisabled(e, carSelectStatus)}>
        <p className={classForMenu(carSelectStatus)}>Модель</p>
      </Link>
      <Arrow />
      <Link to="/order/options" onClick={(e) => isDisabled(e, optionsStatus)}>
        <p className={classForMenu(optionsStatus)}>Дополнительно</p>
      </Link>
      <Arrow />
      <Link to="/order/confirm" onClick={(e) => isDisabled(e, confirmationStatus)}>
        <p className={classForMenu(confirmationStatus)}>Итоги</p>
      </Link>
    </nav>
  );
}

export default NavbarElement;
