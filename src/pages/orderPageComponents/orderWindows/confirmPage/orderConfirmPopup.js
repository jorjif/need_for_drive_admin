import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { confirmOrder, popupCloseOpen } from "../../../../store/order/confirmation";
import Button from "../../../mainComponents/standartButton";
export default function ConfirmationPopup() {
  const dispatch = useDispatch();
  const { popupOpen } = useSelector((store) => store.status);
  function confirmEvent() {
    dispatch(popupCloseOpen(false));
    dispatch(confirmOrder(true));
  }
  function cancelEvent() {
    dispatch(popupCloseOpen(false));
  }
  const classes = classNames({
    order_confirm_closedPopup: !popupOpen,
    order_confirm_popup: true,
  });
  return (
    <div className={classes}>
      <div className="order_confirm_popup_content">
        <h1>Подтвердить заказ</h1>
        <div className="order_confirm_popup_buttons">
          <Button
            classes="order_confirm_popup_accept"
            msg="Подтвердить"
            pressed="order_confirm_popup_accept_pressed"
            onClick={confirmEvent}
          />
          <Button
            classes="order_confirm_popup_cancel"
            pressed="order_confirm_popup_cancel_pressed"
            msg="Вернуться"
            onClick={cancelEvent}
          />
        </div>
      </div>
    </div>
  );
}
