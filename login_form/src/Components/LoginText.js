import React from "react";
import "./css/style.css";
// import { Link } from "react-router-dom";

function LoginText(props) {
  const { stateleft, stateright } = props;

  const [isleft, setLeft] = stateleft;
  const [isright, setRight] = stateright;

  const loginHandler = () => {
    setLeft(true);
    setRight(false);
  };

  return (
    <div className={`login-text  ${isright ? `popup` : ``}`} id="login-text">
      <h2>Welcome Back Fella</h2>
      <p>Login For More Fun</p>
      {/* <Link to="/"> */}
      <button onClick={loginHandler} id="overlay-signin">
        Sign In
      </button>
      {/* </Link> */}
    </div>
  );
}

export default LoginText;
