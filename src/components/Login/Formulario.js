import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import Swal from "sweetalert2";
import validator from "validator";
import { fetchData } from "../../helpers/fetch";
import { browserName, deviceType } from "react-device-detect";
import { validateFetchData } from "../../helpers/validate";
import AuthContext from "../../context/AuthContext";
import types from "../../configs/types";
import { GoSignIn } from "react-icons/go";

export const Formulario = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const initValues = {
    username: "",
    password: "",
    dispositivo: browserName,
    navegador: deviceType,
  };
  const [formValues, handleInputChange, resetForm] = useForm(initValues);
  const { username, password } = formValues;
  // console.log(browserName, deviceType);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await fetchData(false, "auth/login", "POST", formValues);
      if (validateFetchData(result)) {
        const { usuario, token } = result.data;
        // localStorage.setItem("usuario", JSON.stringify(ususario));
        // localStorage.setItem("token", token);
        dispatch({
          type: types.login,
          payload: { usuario, token },
        });
        resetForm(initValues);
        // useHistory.push("/");
        history.replace("/");
      }
    }
  };
  const validateForm = () => {
    if (validator.isEmpty(username)) {
      Swal.fire({
        title: "Hey!",
        text: "Todos los campos deben ser llenados.",
        icon: "warning",
      });

      return false;
    }
    if (!validator.isLength(username, { min: 8, max: 8 })) {
      Swal.fire({
        title: "Hey!",
        text: "El DNI debe tener 8 Digitos",
        icon: "warning",
      });

      return false;
    }
    return true;
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>DNI</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          name="password"
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        <GoSignIn /> log in
      </Button>
    </Form>
  );
};
