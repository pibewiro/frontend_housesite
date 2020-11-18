import React, { Component } from "react";
import Navbar from "../Template/Navbar";
import InputComponent from "../Template/InputComponent";
import RegisterInput from "./data/RegisterInputData";
import "./css/register.css";

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      RegisterInput,
    };
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="register-container">
          <div className="register-form">
            <h1 className="center-text">Register</h1>
            {this.state.RegisterInput.map((data, i) => (
              <InputComponent
                key={i}
                inputDivClass={data.inputDivClass}
                id={data.id}
                label={data.label}
                type={data.type}
                inputClass={data.inputClass}
                name={data.name}
                onChange={this.handleChange}
                errorClass={"error-text"}
              />
            ))}

            <div className="btn-div">
              <button className="site-btn-dark block-btn">Register</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
