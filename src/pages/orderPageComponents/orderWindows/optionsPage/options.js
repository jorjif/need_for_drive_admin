import { ReactComponent as Delete } from "../../../icons/deleteCross.svg";
import DateTimePicker from "react-datetime-picker";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeStatus,
  changeColor,
  changeStartDate,
  changeEndDate,
  changeDateDifference,
  changeTariff,
  changeTariffId,
  setOption,
} from "../../../../store/order/options";
import { userAccess } from "../../../../store/order/orderAcess";
import dateDifference from "./dateDifference";
import { useGetTariffInfoQuery } from "../../../../store/order/carStore";
import CheckboxBtn from "../commonComponents/checkboxBtn";
import RadioButton from "../commonComponents/radioBtn";
//import { format } from "date-fns";
import { addPrice } from "../../../../store/order/price";
import { shouldStateLoad } from "../../../../store/order/confirmation";

export default function Options() {
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
  const { color, tariff } = useSelector((store) => store.options);
  const { colors } = useSelector((store) => store.car);
  const { data } = useGetTariffInfoQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeStatus("in progress"));
    return () => {
      dispatch(changeStatus("complete"));
      dispatch(shouldStateLoad(false));
    };
  }, [dispatch]);

  useEffect(() => {
    //если начальная дата меньше конечной - отправляет значение в стор, пропускает в следующий шаг
    if (dateFrom < dateTo) {
      const formatedDateTo = dateTo.getTime();
      const formatedDateFrom = dateFrom.getTime();
      dispatch(changeStartDate(formatedDateFrom));
      dispatch(changeEndDate(formatedDateTo));
      const difference = dateDifference(dateFrom, dateTo);
      dispatch(changeDateDifference(difference));
      dispatch(userAccess(true));
    }
    //если пользователь после этого меняет дату на неправильную - доступ закрывается
    if (dateFrom > dateTo) {
      dispatch(userAccess(false));
    }
  }, [dateFrom, dateTo, dispatch]);

  function getColor(e) {
    dispatch(changeColor(e.target.value));
  }

  function getTariff(e, id) {
    dispatch(changeTariff(e.target.value));
    dispatch(changeTariffId(id));
  }

  function setOptionEvent(e) {
    dispatch(setOption(e.target.name));
    dispatch(addPrice(e.target.value));
  }

  return (
    <div className="order_options">
      <form>
        <div className="order_options_color">
          <fieldset name="цвет">
            <legend>Цвет:</legend>
            <div className="order_options_color_inpField">
              <RadioButton
                name="color"
                id="any"
                value=""
                checked={!color}
                onChange={getColor}
              >
                Любой
              </RadioButton>
              {colors.map((colorOfCar) => {
                return (
                  <RadioButton
                    name="color"
                    id={colorOfCar}
                    value={colorOfCar}
                    checked={colorOfCar === color}
                    onChange={getColor}
                    key={colorOfCar}
                  >
                    {colorOfCar}
                  </RadioButton>
                );
              })}
            </div>
          </fieldset>
        </div>
        <div className="order_options_date">
          <fieldset>
            <legend>Дата аренды</legend>
            <div className="order_options_date_form">
              <div className="order_options_date_form_input">
                <label htmlFor="order_date_from">С</label>
                <DateTimePicker
                  minDate={new Date()}
                  calendarIcon={null}
                  value={dateFrom}
                  onChange={setDateFrom}
                  type="datetime-local"
                  list="order_date_from"
                  className="order_options_date_form_input_textfield"
                  clearIcon={<Delete />}
                  format="dd.MM.y hh:mm"
                />
              </div>
              <div className="order_options_date_form_input">
                <label htmlFor="order_date_to">По</label>
                <DateTimePicker
                  minDate={new Date()}
                  calendarIcon={null}
                  value={dateTo}
                  onChange={setDateTo}
                  type="datetime-local"
                  list="order_date_from"
                  className="order_options_date_form_input_textfield"
                  format="dd.MM.y hh:mm"
                  clearIcon={<Delete />}
                />
              </div>
            </div>
          </fieldset>
        </div>
        <div className="order_options_tariff">
          <fieldset>
            <legend>Тариф</legend>
            {
              //
              data.data.map((tariffUnit) => {
                const {
                  price,
                  rateTypeId: { name, unit },
                  id,
                } = tariffUnit;
                return (
                  <RadioButton
                    name="tariff"
                    id={name}
                    value={name}
                    checked={tariff === name}
                    onChange={(e) => {
                      getTariff(e, id);
                    }}
                    key={id}
                  >{`${name}, ${price}₽/${unit}`}</RadioButton>
                );
              })
            }
          </fieldset>
        </div>
        <div className="order_options_options">
          <fieldset>
            <legend>Доп услуги</legend>
            <CheckboxBtn
              type="checkbox"
              id="full"
              name="fullTank"
              value="500"
              onChange={setOptionEvent}
            >
              Полный бак, 500р
            </CheckboxBtn>
            <CheckboxBtn
              type="checkbox"
              id="childseat"
              name="needChildChair"
              value="200"
              onChange={setOptionEvent}
            >
              Детское кресло, 200р
            </CheckboxBtn>
            <CheckboxBtn
              type="checkbox"
              id="jdm"
              name="rightWheel"
              value="1600"
              onChange={setOptionEvent}
            >
              Правый руль, 1600р
            </CheckboxBtn>
          </fieldset>
        </div>
      </form>
    </div>
  );
}
