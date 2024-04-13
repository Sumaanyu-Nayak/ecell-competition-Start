import "../../styles/login.css";
import loginForm from "../../assets/login/LoginForm.png";
import google from "../../assets/login/google.png";
import facebook from "../../assets/login/face.png";
import github from "../../assets/login/github.png";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()

  return (
    <div className="mainContent">
      <div className="loginform">
        <div className="image">
          <img src={loginForm} alt="" />
        </div>

        <div className="login">
          <div className="selector">
            <button type="button" className="profile">
              Club
            </button>
            <button type="button" className="profile">
              College
            </button>
            <button type="button" className="profile">
              Vendor
            </button>
            <button type="button" className="profile">
              Student
            </button>
          </div>
          <div className="method">
            <button type="button">
              <img src={facebook} alt="" />
            </button>
            <button type="button">
              <img src={google} alt="" />
            </button>
            <button type="button">
              <img src={github} alt="" />
            </button>
          </div>

          <div className="form1">
            <center>
              <p style={{ color: "#d3d3d3" }}>Login with Email</p>
            </center>
            <form>
              <div className="form-group">
                <label
                  htmlFor="exampleInputEmail1"
                  style={{ color: "#d3d3d3" }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  style={{ border: "1px black solid", height: "50px" }}
                />
              </div>
              <div className="form-group">
                <label
                  htmlFor="exampleInputPassword1"
                  style={{ color: "#d3d3d3" }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  style={{ border: " 1px black solid", height: "50px" }}
                />
              </div>
              <div className="final">
                <button
                  type="button"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  Submit
                </button>
                <button
                  type="button"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  Don't Have An Account? Create Now!
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
