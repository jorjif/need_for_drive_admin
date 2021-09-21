import { Route, Switch } from "react-router-dom";
import AdressPage from "./orderWindows/adressPage/adressPage";
import CarsPage from "./orderWindows/carPage/carSelectPage";
import OptionsPage from "./orderWindows/optionsPage/optionsPage";
import OrderConfirmPage from "./orderWindows/confirmPage/orderConfirmPage";
import ConfirmedOrderPage from "./orderWindows/confirmPage/confirmedOrderPage";
function OrderContent() {
  return (
    <Switch>
      <Route path="/order/confirm/:id" render={() => <ConfirmedOrderPage />} />
      <Route path="/order/confirm/" render={() => <OrderConfirmPage />} />
      <Route path="/order/options/" render={() => <OptionsPage />} />
      <Route path="/order/cars/" render={() => <CarsPage />} />
      <Route path="/order/adress/" render={() => <AdressPage />} />
      <Route path="/order/" render={() => <AdressPage />} />
    </Switch>
  );
}

export default OrderContent;
