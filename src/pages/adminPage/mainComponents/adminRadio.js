import "./adminInputs.scss";

function AdminRadio({
  name,
  id,
  value,
  defaultChecked,
  children,
  checked,
  onChange,
}) {
  return (
    <label className="admin-radio_container">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        className="order_radio"
        defaultChecked
        onChange={onChange}
      />
      <label htmlFor={id} className="admin-radio_label">
        {children}
      </label>
      <span className="admin-radio_checkmark"></span>
    </label>
  );
}

export default AdminRadio;
