import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  cityChanged,
  streetChanged,
  changeStatus as adressStatus,
} from "../../../../store/order/adress";
import {
  selectCar,
  changeStatus as carStatus,
} from "../../../../store/order/carSelect";
import { useGetOrderQuery } from "../../../../store/order/carStore";
import { confirmOrder } from "../../../../store/order/confirmation";
import {
  changeDateDifference,
  changeStartDate,
  setOption,
  changeTariff,
  changeStatus as optionsStatus,
} from "../../../../store/order/options";
import dateDifference from "../optionsPage/dateDifference";
import OrderCard from "./orderCard";

function ConfirmedOrder() {
  const { id } = useParams();
  const { stateShouldLoad } = useSelector((store) => store.status);
  const {
    data: { data },
    isSuccess,
  } = useGetOrderQuery(id, { skip: !id && !stateShouldLoad });
  const dispatch = useDispatch();

  //здесь стор заполняется данными заказа
  useEffect(() => {
    if (isSuccess) {
      dispatch(confirmOrder(true));
      dispatch(cityChanged({ name: data.cityId.name, id: data.cityId.id }));
      dispatch(streetChanged({ name: data.pointId.address, id: data.pointId.id }));
      const carDataToDispatch = {
        carImg: `https://api-factory.simbirsoft1.com${data.carId?.thumbnail?.path}`,
        carModel: data.carId?.name,
        colors: data.carId?.colors,
        plate: data.carId?.number,
        fuel: data.carId?.tank,
      };
      dispatch(selectCar(carDataToDispatch));
      dispatch(changeStartDate);
      if (data.isFullTank) {
        dispatch(setOption("isFullTank"));
      }
      if (data.needChildChair) {
        dispatch(setOption("needChildChair"));
      }
      if (data.isRightWheel) {
        dispatch(setOption("rightWheel"));
      }
      dispatch(changeStartDate(data.dateFrom));
      const diff = dateDifference(data.dateFrom, data.dateTo);
      dispatch(changeDateDifference(diff));
      dispatch(changeTariff(data.rateId.rateTypeId.name));
      dispatch(optionsStatus("loaded"));
      dispatch(carStatus("loaded"));
      dispatch(adressStatus("loaded"));
    }
  }, [isSuccess]);

  //здесь извлекаются необходимые для заполнения заказа данные
  const { carModel, carImg, plate, fuel } = useSelector((store) => store.car);
  const { from } = useSelector((store) => store.options.date);

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
export default ConfirmedOrder;
