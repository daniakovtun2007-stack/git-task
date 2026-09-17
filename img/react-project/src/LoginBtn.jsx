import React from "react";
import "./App.css";
let LogBtn = () => {
  alert('You logged in!');
}
export function LoginBtn() {
  return (
    <button onClick={LogBtn} className="login-btn ">
      Login
    </button>
  );
}