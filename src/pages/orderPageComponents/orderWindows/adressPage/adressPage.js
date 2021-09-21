import AdressSelect from "./adressSelect";
import OrderInfo from "../../orderInfo/orderInfo";
import "./adressPage.scss";
import StatusHandler from "../commonComponents/statushandlerPage";
import { useGetAdressInfoQuery } from "../../../../store/order/carStore";

function AdressPage() {
  const { isFetching, isError, error, isLoading } = useGetAdressInfoQuery();
  return (
    <div className="page_order_content">
      <StatusHandler
        error={error}
        isError={isError}
        isLoading={isLoading}
        isFetching={isFetching}
      >
        <AdressSelect />
      </StatusHandler>
      <OrderInfo link="/order/cars" form="adress_form" btnContent="Выбрать модель" />
    </div>
  );
}
export default AdressPage;
