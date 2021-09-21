import { format } from "date-fns";
function OrderCard({ carImg, date, fuel, plate, carModel }) {
  return (
    <div className="order_confirm">
      <div className="order_confirm_info">
        <h1 className="order_confirm_info_car">{carModel}</h1>
        <p className="order_confirm_info_plate">{plate}</p>
        <p className="order_confirm_info_additional">
          <span>Топливо </span>
          {fuel}%
        </p>
        <p className="order_confirm_info_additional">
          <span>Доступна с </span>
          {format(date, "dd/MM/yyyy HH:mm").toString()}
        </p>
      </div>
      <div className="order_confirm_car">
        <img src={carImg} alt="Фото машины" />
      </div>
    </div>
  );
}

export default OrderCard;
