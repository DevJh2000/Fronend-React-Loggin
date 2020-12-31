import logo from "../assets/global network.png";
import { Formulario } from "../components/Login/Formulario";
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
            <img src={logo} style={{ width: "150px" }} alt="logo" />
          </div>
          <div className="mb-4">
            <h2>Login</h2>
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  );
};
