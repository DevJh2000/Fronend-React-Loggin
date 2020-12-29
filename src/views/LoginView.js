import { Col, Container, Form, Row, Button, FormGroup } from "react-bootstrap";
import logo from "../assets/WhatsApp Image 2020-12-29 at 4.49.22 PM.jpeg";
export const LoginView = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://www.wallpapertip.com/wmimgs/3-34628_blue-and-white-background-hd.jpg)",
      }}
    >
      <div
        className="d-flex align-items-center"
        style={{
          width: "100%",
          maxWidth: "920px",
          height: "100%",
          maxHeight: "500px",
          margin: "auto",
          border: "5px solid white",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://www.petrogas.sm/wp-content/uploads/2019/04/parabolic-solar-concentrator-stirling.jpg)",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "rgb(31,83,159,0.5)",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "100%",
            maxWidth: "400px",
            height: "100%",
            backgroundColor: "#F5F7FE",
          }}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="mb-3">
            <img src={logo} style={{ width: "150px" }}></img>
          </div>
          <div className="mb-4">
            <h2>Login</h2>
          </div>

          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>DNI</Form.Label>
              <Form.Control type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};
