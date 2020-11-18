import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../Redux/auth/actions";
import Navbar from "../Template/Navbar";
import registerImg from "../../assets/registration.png";
import "./css/login.css";
import InputComponent from "../Template/InputComponent";
import loginInputData from "./data/LoginInutData";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      loginInputData,
    };
  }

  componentDidMount() {
    if (localStorage.getItem("housesite")) {
      this.props.history.push("/dashboard");
    }
    document.title = "House Site - Login";
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRegisterPage = () => {
    this.props.history.push("/register");
  };

  handleLogin = async () => {
    await this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
    console.log(this.props.loginData);
    if (this.props.loginData.userAuth) {
      localStorage.setItem(
        "housesite",
        JSON.stringify(this.props.loginData.userAuth)
      );

      this.props.history.push("/dashboard");
    }
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="login-container">
          <div className="login-section">
            <div className="login-form">
              <div className="lf1">
                <h1 className="center-text">Login</h1>
                {this.state.loginInputData.map((data, i) => (
                  <InputComponent
                    key={i}
                    inputDivClass={data.inputDivClass}
                    id={data.id}
                    label={data.label}
                    type={data.type}
                    inputClass={data.inputClass}
                    name={data.name}
                    onChange={this.handleChange}
                    error={
                      this.props.loginData.error
                        ? this.props.loginData.error[data.name]
                        : null
                    }
                    errorClass={"error-text"}
                  />
                ))}
                <div className="btn-div">
                  <button
                    className="site-btn-dark block-btn"
                    onClick={this.handleLogin}
                  >
                    Login
                  </button>
                </div>
                <div className="center-text forgot-password">
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
              </div>
            </div>
            <div className="ls-register">
              <div className="lr-1">
                <h1 className="center-text">
                  <Link to="/register" className="registerLink">
                    Click here to Register
                  </Link>
                </h1>
                <div className="registerImage">
                  <img src={registerImg} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loginData: state.auth,
  };
};
export default connect(mapStateToProps, { login })(index);
