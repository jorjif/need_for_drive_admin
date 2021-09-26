import userAvatar from "../../images/user-avatar.png";
import { ReactComponent as DropdownIcon } from "../../images/Dropdown.svg";
import { useState } from "react";
import classNames from "classnames";

export default function AdminProfile() {
  const [hidden, setHidden] = useState(true);
  const popupClasses = classNames({
    admin_control_header_wrapper_user_dropdown: !hidden,
    admin_control_header_wrapper_user_dropdown_hidden: hidden,
  });

  function openClosePopup() {
    setHidden(!hidden);
  }

  const userName = "Admin";
  return (
    <div className="admin_control_header_wrapper_user">
      <div
        className="admin_control_header_wrapper_user_visible"
        onClick={openClosePopup}
      >
        <div className="admin_control_header_wrapper_user_visible_main">
          <img src={userAvatar} alt="user avatar" />
          <div className="admin_control_header_wrapper_user_visible_main_name admin_p">
            {userName}
          </div>
        </div>
        <DropdownIcon />
      </div>
      <div className={popupClasses}>
        <div>Выйти из системы</div>
      </div>
    </div>
  );
}
