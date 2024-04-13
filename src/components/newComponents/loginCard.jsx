import "../../styles/loginForm.css";
import back from "../../assets/login/border-vector-image.webp";
import logo from "../../assets/logo/Logo.png";
import facebook from "../../assets/login/facebook.png";
import google from "../../assets/login/google.png";
import github from "../../assets/login/github.png";

const LoginForm = () => {
  return (
    <div className="loginform">
      <div className="loginform-child" />
      <div className="rectangle-parent">
        <button className="frame-child" />
        <img className="border-vector-image-1-icon" alt="" src={back} />
        <img className="logo1-icon" alt="" src={logo} />
      </div>
      <div className="select-parent">
        <div className="select">
          <nav className="club-parent">
            <button className="club" id="club">
              <div className="club-child" />
              <div className="club1">Club</div>
            </button>
            <button className="college" id="college">
              <div className="college-child" />
              <div className="college1">College</div>
            </button>
            <button className="vendor" id="vendor">
              <div className="vendor-child" />
              <div className="vendor1">Vendor</div>
            </button>
          </nav>
          <div className="student-wrapper">
            <button className="student" id="student">
              <div className="student-child" />
              <div className="student1">Student</div>
            </button>
          </div>
        </div>
        <div className="frame-wrapper">
          <form className="frame-parent">
            <div className="frame-container">
              <div className="frame-group">
                <div className="frame-div">
                  <div className="frame-wrapper1">
                    <div className="facebook-parent">
                      <button className="facebook" id="facebook">
                        <img
                          className="facebook-icon"
                          loading="lazy"
                          alt=""
                          src={facebook}
                        />
                        <div className="facebook-child" />
                      </button>
                      <button className="google" id="google">
                        <img
                          className="google-icon"
                          loading="lazy"
                          alt=""
                          src={google}
                        />
                        <div className="google-child" />
                      </button>
                    </div>
                  </div>
                  <div className="frame-parent1">
                    <div className="frame-parent2">
                      <div className="line-wrapper">
                        <div className="frame-item" />
                      </div>
                      <div className="login-with-email">Login with email</div>
                    </div>
                    <div className="email-id-wrapper">
                      <b className="email-id">Email Id</b>
                    </div>
                  </div>
                </div>
                <div className="frame-parent3">
                  <div className="github-wrapper">
                    <button className="github" id="github">
                      <img
                        className="github-icon"
                        loading="lazy"
                        alt=""
                        src={github}
                      />
                      <div className="github-child" />
                    </button>
                  </div>
                  <div className="frame-inner" />
                </div>
              </div>
            </div>
            <div className="rectangle-wrapper">
              <input className="rectangle-input" type="text" />
            </div>
            <b className="password">Password</b>
            <div className="rectangle-container">
              <input className="frame-child1" type="text" />
            </div>
            <div className="forgot-password-wrapper">
              <b className="forgot-password">Forgot Password</b>
            </div>
            <div className="student-container">
              <button className="student2">
                <div className="student-item" />
                <div className="login">Login</div>
              </button>
            </div>
            <div className="student-frame">
              <button className="student3">
                <div className="student-inner" />
                <div className="dont-have-an-container">
                  <span>
                    <span className="dont-have-an">{`Don’t have an account? `}</span>
                    <span className="sign-up">Sign up</span>
                  </span>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
