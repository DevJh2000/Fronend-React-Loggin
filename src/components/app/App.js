import React, { useEffect, useReducer } from "react";
import AuthContext from "../../context/AuthContext";
import authReducer from "../../reducer/authReducer";
import AppRouter from "../../routes/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";
const init = () => {
  return JSON.parse(localStorage.getItem("usuario")) | { isLogged: false };
};
const App = () => {
  const [state, dispatch] = useReducer(authReducer, {}, init);
  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(state));
  }, [state]);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
