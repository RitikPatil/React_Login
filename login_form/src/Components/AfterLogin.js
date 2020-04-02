import React, { useContext } from "react";
import { LoggedContext } from "../App";

function AfterLogin() {
  const [islogged, setLogged] = useContext(LoggedContext);

  const loginHandler = () => {
    setLogged(false);
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={loginHandler}>LogOut</button>
    </div>
  );
}

export default AfterLogin;
