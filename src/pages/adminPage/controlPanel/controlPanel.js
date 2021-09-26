import AdminBackground from "../mainComponents/pageBackground";
import AdminNav from "./navbar/nav";
import SearchPanel from "./navbar/searchInput";

function ControlPanel() {
  return (
    <AdminBackground>
      <AdminNav />
      <SearchPanel />
    </AdminBackground>
  );
}
export default ControlPanel;
