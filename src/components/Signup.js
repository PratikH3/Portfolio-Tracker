import React from "react";
import Navbar from "./Navbar";

export default function Signup() {
    
  return (
    <>
      <Navbar title="Portfolio Tracker" />
      <h2 className="d-flex justify-content-center mt-5">Sign Up</h2>

      <div className="d-flex justify-content-center flex-column">
        <div className="row g-3 align-items-center justify-content-center mt-3">
          <div className="col-auto">
            <label htmlFor="inputPassword" className="col-form-label">
              Email Address
            </label>
          </div>
          <div className="col-auto">
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div>
        </div>

        <div className="row g-3 align-items-center justify-content-center mt-3">
          <div className="col-auto">
            <label htmlFor="inputPassword" className="col-form-label">
              Password
            </label>
          </div>
          <div className="col-auto">
            <input
              type="password"
              id="inputPassword"
              className="form-control"
              aria-describedby="passwordHelpInline"
            />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-center mt-5">
          <input className="btn btn-primary" type="submit" value="Submit" onSubmit=""></input>
        </div>
      </div>
    </>
  );
}
