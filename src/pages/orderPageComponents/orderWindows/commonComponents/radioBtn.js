/**
 *
 * @param {*} props получает на вход name, id, value, checked, onChange
 *  и использует проп children для текста в кнопке
 * @returns радио кнопку, которые можно через name объединить в один сет
 */
function RadioButton({
  name,
  id,
  value,
  defaultChecked,
  children,
  checked,
  onChange,
}) {
  return (
    <label className="order_cars_input radio_container">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="order_radio"
        defaultChecked={defaultChecked}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className="radio_label">
        {children}
      </label>
      <span className="radio_checkmark"></span>
    </label>
  );
}

export default RadioButton;
