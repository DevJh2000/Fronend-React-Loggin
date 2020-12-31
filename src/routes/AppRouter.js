import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { LoginView } from "../views/LoginView";
import { NoMatchView } from "../views/NotMatchView";
import IntranetRoutes from "./IntranetRoute";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { state } = useContext(AuthContext);
  const { isLogged } = state.usuario;
  // console.log(isLogged);

  return (
    <Router>
      <div>
        <Switch>
          {/*  <Route exact path="/login" component={LoginView} />
          <Route path="/" component={IntranetRoutes} /> */}
          <PublicRoute
            path="/login"
            isLogged={isLogged}
            component={LoginView}
          />
          <PrivateRoute
            path="/"
            isLogged={isLogged}
            component={IntranetRoutes}
          />
          <Route path="*" component={NoMatchView} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
