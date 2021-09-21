import { ReactComponent as Delete } from "../../../icons/deleteCross.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  cityChanged,
  streetChanged,
  changeStatus,
} from "../../../../store/order/adress";
import { userAccess } from "../../../../store/order/orderAcess";
import { useEffect, useState } from "react";
import { useGetAdressInfoQuery } from "../../../../store/order/carStore";
import MapElem from "./map";

function AdressSelect() {
  const [cityInput, setCityInput] = useState("");
  const [streetInput, setStreetInput] = useState("");
  const { city, street } = useSelector((store) => store.adress);
  const dispatch = useDispatch();
  const { data } = useGetAdressInfoQuery();
  //useEffect при маунте и анмаунте компонента устанавливает его статус
  useEffect(() => {
    dispatch(changeStatus("in progress"));
    setCityInput(city);
    setStreetInput(street);
    return () => dispatch(changeStatus("complete"));
  }, []);

  //useEffect для проверки допуска на следующий шаг и отправки значений в стор
  useEffect(() => {
    //проверяет соответствует ли инпут доступным городам
    const comparedCity = data.find((elem) => elem.city === cityInput);
    const comparedStreet = comparedCity?.streets.find(
      ({ street }) => street === streetInput
    );
    //если инпут соответствует - отправляет стейт в стор
    if (comparedCity) {
      dispatch(cityChanged({ name: cityInput, id: comparedCity.id }));
    }
    //если город выставлен, но изменен на неверное значение - стор отчищается
    if (city && !comparedCity) {
      dispatch(cityChanged({ name: "", id: "" }));
    }
    if (comparedStreet) {
      dispatch(streetChanged({ name: streetInput, id: comparedStreet.id }));
    }
    if (street && !comparedStreet) {
      dispatch(streetChanged({ name: "", id: "" }));
    }
    // eslint-disable-next-line
  }, [streetInput, cityInput]);
  useEffect(() => {
    if (street && city) {
      dispatch(userAccess(true));
    }
  });
  useEffect(() => {}, []);
  function cityOnChange(e) {
    const value = e.target.value;
    setCityInput(value);
  }
  function streetOnChange(e) {
    const value = e.target.value;
    setStreetInput(value);
  }

  function deleteButtonClick(e, type) {
    e.preventDefault();
    if (type === "city") {
      setCityInput("");
      dispatch(cityChanged({ name: "", id: "" }));
      return;
    }
    setStreetInput("");
    dispatch(streetChanged({ name: "", id: "" }));
  }

  function onSubmit(e) {
    e.preventDefault();
  }

  function optionsWithCity(adressArr) {
    const cityIndex = adressArr.find((elem) => elem.city === city);
    return cityIndex?.streets.map(({ street, id }) => (
      <option value={street} key={id} />
    ));
  }
  return (
    <div className="order_adress">
      <form id="adress_form" className="order_adress_search" onSubmit={onSubmit}>
        <div className="order_adress_search_input">
          <label htmlFor="order_adress_city">Город:</label>
          <input
            list="order_adress_city"
            className="order_adress_search_input_textfield"
            value={cityInput}
            onChange={cityOnChange}
            required
          />
          <datalist id="order_adress_city">
            {data.map((adressObj) => {
              return <option value={adressObj.city} key={adressObj.id} />;
            })}
          </datalist>
          <button
            className="order_adress_search_input_delete"
            onClickCapture={(e) => deleteButtonClick(e, "city")}
          >
            <Delete />
          </button>
        </div>
        <div className="order_adress_search_input">
          <label htmlFor="order_adress_street">Пункт выдачи:</label>
          <input
            list="order_adress_street"
            className="order_adress_search_input_textfield"
            value={streetInput}
            onChange={streetOnChange}
            required
          />
          <datalist id="order_adress_street">{optionsWithCity(data)}</datalist>
          <button
            className="order_adress_search_input_delete street"
            onClick={deleteButtonClick}
          >
            <Delete />
          </button>
        </div>
      </form>
      <div className="order_adress_map">
        <p>Пункт выдачи</p>
        <MapElem data={data} />
      </div>
    </div>
  );
}
export default AdressSelect;
