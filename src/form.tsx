import { useState } from "react";
import { Loader } from "./loader";

export const Login = () => {
  const [isLoader, setIsLoader] = useState(false);
  return (
    <>
      {isLoader ? (
        <Loader />
      ) : (
        <>
          <div className="login-wrapper">
            <form action="">
              <h2>Login</h2>
              <div className="input-field">
                <input type="text" required />
                <label>Enter your email</label>
              </div>
              <div className="input-field">
                <input type="password" required />
                <label>Enter your password</label>
              </div>
              <div className="password-option">
                <label htmlFor="remember">
                  <input type="checkbox" id="remember" />
                  <p>Remember me</p>
                </label>
                <a href="#">forgot password</a>
              </div>
              <button type="submit">Log in</button>
              <div className="account-options">
                <p>
                  Don't have an acount? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>

          <div className="form-wrapper">
            <h2>My Form</h2>
            <form action="" className="my-form">
              <div className="input-value">
                <input type="text" required />
                <label className="label" htmlFor="">
                  Name
                </label>
              </div>
              <div className="input-value">
                <input type="email" required />
                <label className="label" htmlFor="">
                  Email
                </label>
              </div>
              <div className="input-value">
                <input type="password" required />
                <label className="label" htmlFor="">
                  Password
                </label>
              </div>
              <div className="rememberMe">
                <label htmlFor="remember" className="remember">
                  <input type="checkbox" id="remember" />
                  <p>Remember me</p>
                </label>
                <a href="#">Forgot password</a>
              </div>
              <label htmlFor="" className="button-label input-value">
                <input type="submit" className="submit" />
              </label>
              <div className="register">
                <p>
                  Don't have an account yet? <a href="#">Register</a>
                </p>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};
