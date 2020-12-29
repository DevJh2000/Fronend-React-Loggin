import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LoginView } from "../views/LoginView";
import { NoMatchView } from "../views/NotMatchView";
import IntranetRoutes from "./IntranetRoute";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginView} />
          <Route path="/" component={IntranetRoutes} />
          <Route path="*" component={NoMatchView} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
