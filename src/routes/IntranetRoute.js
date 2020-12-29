import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { ModulosView } from "../views/ModulosView";
import { PerfilView } from "../views/PerfilView";
import { Registrar } from "../views/Registrar";

const IntranetRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/perfil" component={PerfilView} />
        <Route exact path="/registrar" component={Registrar} />
        <Route exact path="/modulos" component={ModulosView} />
        <Redirect to="/perfil" />
      </Switch>
    </div>
  );
};
export default IntranetRoutes;
