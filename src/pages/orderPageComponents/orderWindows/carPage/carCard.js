import classNames from "classnames";

export default function CarCard({
  name,
  startPrice,
  endPrice,
  image,
  onClick,
  selected,
}) {
  const cardState = classNames({
    order_card: true,
    order_card_focused: selected,
  });
  return (
    <div className={cardState} onClick={onClick}>
      <div>
        <h1 className="order_card_name">{name}</h1>
        <p className="order_card_price">
          {startPrice}-{endPrice}
        </p>
      </div>
      <div className="order_card_image_container">
        <img src={image} alt="Фото машины" className="order_card_image" />
      </div>
    </div>
  );
}
