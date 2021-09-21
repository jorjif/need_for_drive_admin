function OrderOptions(props) {
  return (
    <li className="order_price_list">
      <p className="order_price_list_name">{props.optionName}</p>
      <div className="order_price_list_dots" />
      <p className="order_price_list_value">{props.optionValue}</p>
    </li>
  );
}
export default OrderOptions;
