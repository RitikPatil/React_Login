import React from "react";
import "./css/style.css";
// import { Link } from "react-router-dom";

function SignupText(props) {
  const { stateleft, stateright } = props;

  const [isleft, setLeft] = stateleft;
  const [isright, setRight] = stateright;

  const signupHandler = () => {
    setRight(true);
    setLeft(false);
  };

  return (
    <div className={`signup-text ${isleft ? `popup` : ``}`} id="signup-text">
      <h1>Sign Up</h1>
      <p>We Will Not Share Ur Credentioal ! Its Free</p>
      {/* <Link to="/signup"> */}
      <button onClick={signupHandler} id="overlay-signup">
        Sign Up
      </button>
      {/* </Link> */}
    </div>
  );
}

export default SignupText;
