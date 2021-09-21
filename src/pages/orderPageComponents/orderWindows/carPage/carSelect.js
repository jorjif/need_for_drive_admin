import CarCard from "./carCard";
import { selectCar, changeStatus } from "../../../../store/order/carSelect";
import { userAccess } from "../../../../store/order/orderAcess";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCarsQuery } from "../../../../store/order/carStore";
import { setMaxPrice, setStartPrice } from "../../../../store/order/price";
import RadioButton from "../commonComponents/radioBtn";

function CarSelect() {
  const dispatch = useDispatch();
  const selectedCar = useSelector((store) => store.car);
  const [chosenCathegory, setChosenCathegory] = useState("");
  const {
    data: { carData, carCategories },
  } = useGetCarsQuery();

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => dispatch(changeStatus("complete"));
  }, [dispatch]);
  //распределяет фильтрованную с сервера инфу

  function setCarOnclick({
    name,
    priceMax,
    priceMin,
    imgUrl,
    id,
    number,
    colors,
    tank,
  }) {
    const carObject = {
      carModel: name,
      carImg: imgUrl,
      id,
      plate: number,
      colors: [...colors],
      fuel: tank,
    };
    dispatch(selectCar(carObject));
    dispatch(setMaxPrice(priceMax));
    dispatch(setStartPrice(priceMin));
    dispatch(userAccess(true));
  }
  function setCathegoryOnclick(e) {
    setChosenCathegory(e.target.value);
  }
  return (
    <div className="order_cars">
      <form className="order_cars_form ">
        <RadioButton
          name="class"
          id="any"
          value=""
          onChange={setCathegoryOnclick}
          checked={!chosenCathegory}
        >
          Все модели
        </RadioButton>
        {carCategories.map((cathegory) => {
          return (
            <RadioButton
              name="class"
              id={cathegory}
              value={cathegory}
              key={cathegory}
              onChange={setCathegoryOnclick}
              checked={chosenCathegory === cathegory}
            >
              {cathegory}
            </RadioButton>
          );
        })}
      </form>
      <div className="order_cars_list">
        {carData
          .filter(({ categoryId }) => categoryId.name.includes(chosenCathegory))
          .map((car) => {
            const { name, id, priceMax, priceMin, thumbnail } = car;
            const path = thumbnail.path;
            const imgUrl = `https://api-factory.simbirsoft1.com${path}`;
            return (
              <CarCard
                key={id}
                name={name}
                image={imgUrl}
                startPrice={priceMin}
                endPrice={priceMax}
                onClick={() => setCarOnclick({ ...car, imgUrl })}
                selected={selectedCar.id === id}
              />
            );
          })}
      </div>
    </div>
  );
}
export default CarSelect;
