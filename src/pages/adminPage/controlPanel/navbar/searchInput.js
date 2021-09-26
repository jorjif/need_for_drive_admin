import { ReactComponent as SearchIcon } from "../../images/searchIcon.svg";
import { ReactComponent as Notifications } from "../../images/Notifications.svg";
import AdminProfile from "./userProfile";

export default function SearchPanel() {
  return (
    <div className="admin_control_header">
      <div className="admin_control_header_wrapper">
        <div className="admin_control_header_wrapper_search">
          <SearchIcon />
          <input
            placeholder="Поиск..."
            className="admin_control_header_wrapper_search_input"
          />
        </div>
        <div className="admin_control_header_wrapper_notifications">
          <Notifications />
        </div>
        <AdminProfile />
      </div>
    </div>
  );
}
