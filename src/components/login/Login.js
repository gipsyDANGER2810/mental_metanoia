import React, { useState } from "react";
import "./Login.css";
import logo from "../../photos/logo2.png";

function Login() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleSignUpClick = (event) => {
    event.preventDefault();
    setShowRegisterForm(true);
  };

  const LoginClick = (event) => {
    event.preventDefault();
    setShowRegisterForm(false);
  };

  return (
    <div className="container-fluid main-body">
      <div className="login_form">
        {showRegisterForm}
        <div className="login_form_left">
          <img src={logo} alt=""></img>
        </div>
        <div className="login_form_right">
          {showRegisterForm && (
            <>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  First Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  Last Name
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <select class="form-select" aria-label="Default select example">
                <option selected>Sex</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">Other</option>
              </select>
              <div class="mb-3">
                <label htmlFor="exampleFormControlInput1" class="form-label">
                  Date of Birth
                </label>
                <input
                  type="date"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
            </>
          )}
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div class="mb-3">
            <label htmlFor="exampleFormControlInput1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>

          {!showRegisterForm && (
            <>
              <button type="submit" class="btn btn-primary">
                Login
              </button>
              <a href="/">Forgot Password</a>
              <div className="forget_password">
                <label>
                  <input type="checkbox" />
                  Remember Me
                </label>
              </div>
              <div className="register">
                <p>
                  Dont have an Account?{" "}
                  <a href="/" onClick={handleSignUpClick}>
                    {" "}
                    Sign Up
                  </a>
                </p>
              </div>
            </>
          )}
          {showRegisterForm && (
            <>
              <button type="submit" class="btn btn-primary">
                Sign Up
              </button>
              <a href="/" onClick={LoginClick}>
                Login instead?
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
