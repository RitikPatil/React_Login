import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import AfterLogin from "./Components/AfterLogin";
import Cookie from "js-cookie";

export const LoggedContext = createContext();

function App() {
  const [islogged, setLogged] = useState(false);

  const readCookie = () => {
    const cook = Cookie.get("user");
    if (cook) {
      setLogged(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);
  return (
    <div className="App">
      <LoggedContext.Provider value={[islogged, setLogged]}>
        {islogged ? <AfterLogin /> : <LoginForm />}
      </LoggedContext.Provider>
    </div>
  );
}

export default App;
