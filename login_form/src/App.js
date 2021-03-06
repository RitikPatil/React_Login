import React, { useState, createContext, useEffect } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import AfterLogin from "./Components/AfterLogin";
import Cookie from "js-cookie";

export const LoggedContext = createContext();
export const NameContext = createContext();

function App() {
  const [islogged, setLogged] = useState(false);
  const [name, setName] = useState("");

  const readCookie = () => {
    const cookieFound = Cookie.get("name");
    if (cookieFound) {
      setLogged(true);
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  return (
    <div className="App">
      <LoggedContext.Provider value={[islogged, setLogged]}>
        <NameContext.Provider value={[name, setName]}>
          {islogged ? <AfterLogin /> : <LoginForm />}
        </NameContext.Provider>
      </LoggedContext.Provider>
    </div>
  );
}

export default App;
