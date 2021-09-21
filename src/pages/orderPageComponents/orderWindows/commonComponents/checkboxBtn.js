import { ReactComponent as CheckboxMark } from "../../../icons/checkboxMark.svg";
/**
 *
 * @param {*} props {onClick, id, name, value, children} получает на вхoд стандартные
 * для чекбокса данные
 * @returns кастомный чекбокс
 */
function CheckboxBtn({ onChange, id, name, value, children }) {
  return (
    <label htmlFor={id} className="checkbox">
      <span className="checkbox_input">
        <input
          type="checkbox"
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        />
        <span className="checkbox_control">
          <CheckboxMark />
        </span>
      </span>
      <label htmlFor={id} className="checkbox_label">
        {children}
      </label>
    </label>
  );
}
export default CheckboxBtn;
