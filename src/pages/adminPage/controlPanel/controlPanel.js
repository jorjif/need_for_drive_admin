import { Route, Switch } from "react-router";
import AdminBackground from "../mainComponents/pageBackground";
import AdminNav from "./navbar/nav";
import "./controlPanel.scss";
import SearchPanel from "./navbar/searchInput";
import ChangeCar from "./carSetting/carSetting";

function ControlPanel() {
  return (
    <AdminBackground>
      <AdminNav />
      <SearchPanel />
      <Switch>
        <Route path="/admin/panel/card">
          <ChangeCar />
        </Route>
      </Switch>
    </AdminBackground>
  );
}
export default ControlPanel;
