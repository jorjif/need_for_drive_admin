import classNames from "classnames";
import "./adminInputs.scss";

function AdminInput({ children, isError = false, error }) {
  const inputClasses = classNames({
    "admin-input_textfield": true,
    "admin-input_textfield_error": isError,
  });
  return (
    <div className="admin-input_container">
      <label className="admin-input_label">{children}</label>
      <input type="text" className={inputClasses} />
      <div className="admin-input_error">{isError ? error : null}</div>
    </div>
  );
}

export default AdminInput;
