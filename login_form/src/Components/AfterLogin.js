import React, { useContext, useEffect } from "react";
import { LoggedContext } from "../App";
import Cookie from "js-cookie";

function AfterLogin() {
  const [islogged, setLogged] = useContext(LoggedContext);
  const Name = Cookie.get("name");

  const loginHandler = () => {
    setLogged(false);
    // Cookie.remove("user");
    Cookie.remove("name");
    localStorage.removeItem("user");
  };

  return (
    <div>
      <h1>Hello {Name}</h1>
      <button onClick={loginHandler}>LogOut</button>
    </div>
  );
}

export default AfterLogin;
