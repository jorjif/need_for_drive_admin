import OrderInfo from "../../orderInfo/orderInfo";
import OrderConfirm from "./orderConfirm";
import ConfirmationPopup from "./orderConfirmPopup";
import "./orderConfirm.scss";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, popupCloseOpen } from "../../../../store/order/confirmation";
import StatusHandler from "../commonComponents/statushandlerPage";
import { useGetOrderStatusQuery } from "../../../../store/order/carStore";

export default function OrderConfirmPage() {
  const { orderConfirmed } = useSelector((store) => store.status);
  const { error, isLoading, isFetching, isError } = useGetOrderStatusQuery();
  const dispatch = useDispatch();

  function confirmEvent() {
    dispatch(confirmOrder(false));
  }

  function handleOpen() {
    dispatch(popupCloseOpen(true));
  }

  return (
    <div className="page_order_content">
      <ConfirmationPopup />
      <StatusHandler
        error={error}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <OrderConfirm />
      </StatusHandler>
      <OrderInfo
        btnContent={orderConfirmed ? "Отменить" : "Заказать"}
        confirmation={true}
        btnClick={orderConfirmed ? confirmEvent : handleOpen}
      />
    </div>
  );
}
