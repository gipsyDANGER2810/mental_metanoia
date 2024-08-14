import React, { useState } from "react";
import "./Login.css";
import logo from "../../photos/logo2.png";
import loginGif from "../../photos/login.gif";

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
          <img src={loginGif} alt=""></img>
        </div>
        <div className="login_form_right">
          {showRegisterForm && (
            <>
              <div className="input-group col-lg-6 mb-3">
                <div className="input-group-prepend">
                  <span class="input-group-text bg-white px-4 border-md border-right-0">
                    <i class="fa fa-user text-muted"></i>
                  </span>
                </div>
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
          <div className="input-group col-lg-6 mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text bg-white px-4 border-md border-right-0">
                <i className="fa fa-envelope text-muted"></i>
              </span>
            </div>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Email Address"
              className="form-control bg-white border-left-0 border-md ms-0"
            ></input>
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
