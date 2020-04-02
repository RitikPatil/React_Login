import React, { useState } from "react";
import "./css/style.css";

import SignUpOnly from "./SignUpOnly";
import LoginOnly from "./LoginOnly";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginText from "./LoginText";
import SignupText from "./SignupText";

function LoginForm(props) {
  const [isleft, setLeft] = useState(true);
  const [isright, setRight] = useState(false);

  const loginHandler = (e) => {
    setLeft(true);
    setRight(false);
  };

  const signupHandler = (e) => {
    setRight(true);
    setLeft(false);
  };

  return (
    <div className="container">
      {/* <Router> */}
      <div className="form-panel">
        {/* Using Switch */}
        {/* <Switch>
            <Route
              path="/"
              exact
              component={() => <LoginOnly isleft={isleft} isright={isright} />}
            />
            <Route
              path="/signup"
              exact
              component={() => <SignUpOnly isleft={isleft} isright={isright} />}
            />
          </Switch> */}

        <LoginOnly isleft={isleft} isright={isright} />
        <SignUpOnly isleft={isleft} isright={isright} />
      </div>
      <div className="overlay-container">
        <div className="overlay">
          {/* Login Text */}

          <LoginText
            stateleft={[isleft, setLeft]}
            stateright={[isright, setRight]}
          />

          {/* <div
              className={`login-text  ${isright ? `popup` : ``}`}
              id="login-text"
            >
              <h2>Welcome Back Fella</h2>
              <p>Login For More Fun</p>
              <Link to="/login">
                {console.log("Login")}
                <button onClick={loginHandler} id="overlay-signin">
                  Sign In
                </button>
              </Link>
            </div> */}

          {/* SignUp Text */}

          <SignupText
            stateleft={[isleft, setLeft]}
            stateright={[isright, setRight]}
          />

          {/* <div
              className={`signup-text ${isleft ? `popup` : ``}`}
              id="signup-text"
            >
              <h1>Sign Up</h1>
              <p>We Will Not Share Ur Credentioal ! Its Free</p>
              <Link to="/signup">
                {console.log("Signup")}
                <button onClick={signupHandler} id="overlay-signup">
                  Sign Up
                </button>
              </Link>
            </div> */}
        </div>
      </div>
      {/* </Router> */}
    </div>
  );
}

export default LoginForm;
