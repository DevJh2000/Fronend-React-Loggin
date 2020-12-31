import React, { useContext, useEffect, useState } from "react";
import Profile from "../assets/profile.webp";
import { Card, Image } from "react-bootstrap";
import AuthContext from "../context/AuthContext";
import { fetchData } from "../helpers/fetch";

export const PerfilView = () => {
  const { state } = useContext(AuthContext);
  const { nombres, apellidos, email, rol } = state.usuario;
  const [nombreRol, setNombreRol] = useState("");

  useEffect(() => {
    getRol(rol);
  }, [rol]);

  const getRol = async (id) => {
    const { data } = await fetchData(true, `admin/rol/${id}?campos=nombre`);
    setNombreRol(data.rol.nombre);
  };

  return (
    <>
      <div>
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Porfile</h1>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Image
              src={Profile}
              roundedCircle
              className="shadow"
              width="250px"
            />
          </div>
          <div className="col-md-8">
            <Card>
              <Card.Header>
                <Card.Title>Card Title</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Subtitle>Nombres</Card.Subtitle>
                <Card.Text>{nombres}</Card.Text>
                <Card.Subtitle>Apellidos</Card.Subtitle>
                <Card.Text>{apellidos} </Card.Text>
                <Card.Subtitle>E-mail</Card.Subtitle>
                <Card.Text>{email} </Card.Text>
                <Card.Subtitle>Rol:</Card.Subtitle>
                <Card.Text>{nombreRol}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};
