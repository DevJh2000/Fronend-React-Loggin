import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { fetchData } from "../helpers/fetch";

export const Registrar = () => {
  //ROLES
  const [roles, setRoles] = useState([{}]);
  //TRABAJADORES
  const [trabajadores, setTrabajadores] = useState([]);
  const [dni, setDni] = useState("");

  const [form, setForm] = useState({
    trabajador: "",
    password: "",
    rol: "",
  });
  const { trabajador, password, rol } = form;

  //Roles
  useEffect(() => {
    getRol(setRoles);
  }, [setRoles]);
  //Trabajadores
  useEffect(() => {
    getTrabajador(setTrabajadores);
  }, [setTrabajadores]);

  //Get Rol
  const getRol = async () => {
    const { data } = await fetchData(true, `admin/roles?campos=nombre _id`);
    setRoles(data.roles, ...roles);
  };
  //Get Trabajador
  const getTrabajador = async () => {
    const { data } = await fetchData(
      true,
      `rrhh/trabajadores?campos=_id dni nombres apellidos`
    );
    setTrabajadores(data.trabajadores, ...trabajadores);
  };
//Evento para capturar valores del formulario
  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setForm({
      ...form,
      [name]: value,
    });
    //Imprimimos un valor de la data en un input
    if (name === "trabajador") {
      trabajadores.map((ele) => {
        if (ele._id === value) {
          setDni(ele.dni);
        }
      });
    }
  };

  return (
    <Row>
      <Col xs lg="4"></Col>
      <Col xs lg="4">
        <Form style={{ marginTop: "20px" }}>
          <Form.Group>
            <Form.Label>Employee:</Form.Label>
            <Form.Control
              as="select"
              custom
              name="trabajador"
              value={trabajador}
              onChange={handleInputChange}
            >
              {trabajadores.map(({ _id, nombres, apellidos }) => {
                return (
                  <option key={_id} value={_id}>
                    {nombres} {apellidos}
                  </option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>User:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Usuario"
              value={dni}
              readOnly
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Rol of User:</Form.Label>
            <Form.Control
              as="select"
              custom
              name="rol"
              value={rol}
              onChange={handleInputChange}
            >
              {roles.map(({ _id, nombre }) => {
                // console.log(_id, nombre);
                return <option key={_id}>{nombre}</option>;
              })}
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
      <Col xs lg="4"></Col>
    </Row>
  );
};
