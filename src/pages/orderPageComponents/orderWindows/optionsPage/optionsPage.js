import Options from "./options";
import OrderInfo from "../../orderInfo/orderInfo";
import "./optionsPage.scss";
import StatusHandler from "../commonComponents/statushandlerPage";
import { useGetTariffInfoQuery } from "../../../../store/order/carStore";

export default function OptionsPage() {
  const { error, isLoading, isFetching, isError } = useGetTariffInfoQuery();
  return (
    <div className="page_order_content">
      <StatusHandler
        error={error}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <Options />
      </StatusHandler>
      <OrderInfo btnContent="Итого" link="/order/confirm/" />
    </div>
  );
}
