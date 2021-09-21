import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { changeStatus } from "../../../../store/order/confirmation";
import {
  useGetOrderQuery,
  useGetOrderStatusQuery,
  usePostOrderQuery,
} from "../../../../store/order/carStore";
import { format } from "date-fns";
import { Redirect, useHistory, useParams } from "react-router";
import OrderCard from "./orderCard";

export default function OrderConfirm() {
  const { carModel, carImg, plate, fuel } = useSelector((store) => store.car);
  const { from, to, difference } = useSelector((store) => store.options.date);
  const dispatch = useDispatch();

  //данные для отправки заказа
  const { cityId, pointId } = useSelector((store) => store.adress);
  const { id } = useSelector((store) => store.car);
  const { color, tariffId, isFullTank, isNeedChildChair, isRightWheel } =
    useSelector((store) => store.options);
  const { startPrice } = useSelector((store) => store.price);
  const { orderConfirmed } = useSelector((store) => store.status);

  //url параметры
  const history = useHistory();
  const params = useParams();

  //сборка заказа
  const status = useGetOrderStatusQuery();
  const { data, isSuccess } = usePostOrderQuery(
    {
      orderStatusId: status.data.data[1],
      cityId: { id: cityId },
      pointId: { id: pointId },
      carId: { id: id },
      color: color,
      dateFrom: from,
      dateTo: to,
      rateId: { id: tariffId },
      price: startPrice,
      isFullTank: isFullTank.status,
      isNeedChildChair: isNeedChildChair.status,
      isRightWheel: isRightWheel.status,
    },
    { skip: !orderConfirmed && !params.id }
  );
  //
  const existingOrder = useGetOrderQuery(params.id, { skip: !params.id });

  useEffect(() => {
    if (isSuccess) {
      history.push(data.data.id);
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
  }, [dispatch]);

  if (!difference && params.id) {
    return <Redirect to="/order/adress" />;
  }

  return (
    <OrderCard
      carImg={carImg}
      date={from}
      fuel={fuel}
      plate={plate}
      carModel={carModel}
    />
  );
}
