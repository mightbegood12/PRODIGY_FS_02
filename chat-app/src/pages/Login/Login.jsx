import React, { useState } from "react";
import "./Login.css";
import assets from "../../assets/assests";
import { signup, login, resetPass } from "../../config/firebase";

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === "Sign up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className="login">
      <img src={assets.logo} alt="" className="logo" />
      <form
        onSubmit={onSubmitHandler}
        id="login"
        name="login"
        className="login-form"
      >
        <h2>{currState}</h2>
        {currState === "Sign up" ? (
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            placeholder="Username"
            className="form-input"
            required
          />
        ) : null}
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email Address"
          className="form-input"
          required
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="form-input"
          required
        />
        <button type="submit">
          {currState === "Sign up" ? "Register" : "Login"}
        </button>
        <div className="login-term">
          {currState === "Sign up" ? (
            <p>
              <input type="checkbox" />
              Agree to terms of use & privacy policy.
            </p>
          ) : null}
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
          {currState === "Login" ? (
            <p className="login-toggle">
              Forgot Password?
              <span onClick={() => resetPass(email)}>Reset here</span>
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
};

export default Login;
