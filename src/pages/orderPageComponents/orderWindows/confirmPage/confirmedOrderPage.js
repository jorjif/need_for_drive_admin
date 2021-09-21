import ConfirmedOrder from "./confirmedOrder";
import OrderInfo from "../../orderInfo/orderInfo";
import StatusHandler from "../commonComponents/statushandlerPage";
import { useGetOrderQuery } from "../../../../store/order/carStore";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder } from "../../../../store/order/confirmation";
import { useParams } from "react-router";

function ConfirmedOrderPage() {
  const { id } = useParams();
  const { stateShouldLoad } = useSelector((store) => store.status);
  const { error, isLoading, isFetching, isError } = useGetOrderQuery(id, {
    skip: !id && !stateShouldLoad,
  });
  const dispatch = useDispatch();

  function confirmEvent() {
    dispatch(confirmOrder(false));
  }

  return (
    <div className="page_order_content">
      <StatusHandler
        error={error}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <ConfirmedOrder />
      </StatusHandler>
      <OrderInfo
        btnContent={"Отменить"}
        confirmation={true}
        btnClick={confirmEvent}
      />
    </div>
  );
}

export default ConfirmedOrderPage;
