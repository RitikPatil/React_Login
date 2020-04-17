import React, { useContext, useEffect } from "react";
import { LoggedContext, NameContext } from "../App";
import Cookie from "js-cookie";

function AfterLogin() {
  const [islogged, setLogged] = useContext(LoggedContext);
  const [name, setName] = useContext(NameContext);
  const Name = Cookie.get("name");

  const loginHandler = () => {
    setLogged(false);
    // Cookie.remove("user");
    Cookie.remove("name");
    setName("");
  };

  return (
    <div>
      <h1>Hello {Name}</h1>
      <button onClick={loginHandler}>LogOut</button>
    </div>
  );
}

export default AfterLogin;
