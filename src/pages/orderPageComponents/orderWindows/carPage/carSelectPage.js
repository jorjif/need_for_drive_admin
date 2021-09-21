import OrderInfo from "../../orderInfo/orderInfo";
import CarSelect from "./carSelect";
import StatusHandler from "../commonComponents/statushandlerPage";
import { useGetCarsQuery } from "../../../../store/order/carStore";
import "./carSelect.scss";

function CarsPage() {
  const { error, isLoading, isFetching, isError } = useGetCarsQuery();
  return (
    <div className="page_order_content">
      <StatusHandler
        error={error}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <CarSelect />
      </StatusHandler>
      <OrderInfo btnContent="Дополнительно" link="/order/options" />
    </div>
  );
}

export default CarsPage;
