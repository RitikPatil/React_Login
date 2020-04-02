import React, { useState, createContext } from "react";
import "./App.css";
import LoginForm from "./Components/LoginForm";
import AfterLogin from "./Components/AfterLogin";

export const LoggedContext = createContext();

function App() {
  const [islogged, setLogged] = useState(false);
  return (
    <div className="App">
      <LoggedContext.Provider value={[islogged, setLogged]}>
        {islogged ? <AfterLogin /> : <LoginForm />}
      </LoggedContext.Provider>
    </div>
  );
}

export default App;
