import MainPage from "./pages/mainComponents/mainPage.js";
import Order from "./pages/orderPageComponents/orderPage.js";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { YMaps } from "react-yandex-maps";
import Login from "./pages/adminPage/loginPage/login.js";

function App(props) {
  return (
    <Provider store={store}>
      <YMaps>
        <Router>
          <Switch>
            <Route path="/admin" render={(props) => <Login />} />
            <Route path="/order/" render={(props) => <Order />} />
            <Route path="/" render={(props) => <MainPage />} />
          </Switch>
        </Router>
      </YMaps>
    </Provider>
  );
}
export default App;
