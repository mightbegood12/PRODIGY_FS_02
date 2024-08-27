import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assests";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");

  return (
    <div className="login">
      <img src={assets.logo} alt="" className="logo" />
      <form id="login" name="login" className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          placeholder="Email Address"
          className="form-input"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign up" ? "Register" : "Login"}
        </button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to terms of use & privacy policy.</p>
        </div>
        <div className="login-forgot">
          {currState === "Sign up" ? (
            <p className="login-toggle">
              Already have an Account?
              <span onClick={() => setCurrState("Login")}>Login Here</span>
            </p>
          ) : (
            <p className="login-toggle">
              New user?
              <span onClick={() => setCurrState("Sign up")}>
                Create an account
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
