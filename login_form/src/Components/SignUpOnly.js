import React, { useState } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import swal from "sweetalert";

import axios from "axios";

function SignUpOnly(props) {
  const [signup, setSignup] = useState({
    firstname: "",
    lastname: "",
    newemail: "",
    password: ""
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    setSignup({
      ...signup,
      [name]: e.target.value
    });
  };

  const userSignup = {
    firstname: signup.firstname,
    lastname: signup.lastname,
    email: signup.newemail,
    password: signup.password
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(signup);

    axios
      .post("/login-signup/signup", userSignup)
      .then((resp) => {
        // swal(resp.data);
        if (resp.data == "User_Created") {
          swal({
            title: "User Created",
            text: "Login For More Stuff",
            icon: "success"
          });
        } else {
          swal({
            title: resp.data,
            icon: "warning",
            dangerMode: true
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const opa = {
    zIndex: 300
  };

  const { isright, isleft } = props;
  return (
    <div className="form-panel">
      <div
        className={`signup-form form-css ${isright ? `right` : ``} `}
        style={isleft ? null : opa}
        id="signup"
      >
        <form onSubmit={submitHandler}>
          <h1>Sign Up</h1>
          <div className="social">
            <a
              href="https://www.facebook.com/profile.php?id=100009139706224"
              target="_blank"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              href="https://www.instagram.com/my__self__ritik/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://github.com/RitikPatil" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="input-feild">
            <input
              type="text"
              id="name"
              name="firstname"
              placeholder="FirstName"
              onChange={inputHandler}
              value={signup.firstname}
            />
            <br />
            <input
              type="text"
              id="lastname"
              placeholder="Lastname"
              name="lastname"
              onChange={inputHandler}
              value={signup.lastname}
            />
            <br />

            <input
              type="email"
              id="email"
              name="newemail"
              placeholder="Email"
              onChange={inputHandler}
              value={signup.newemail}
            />
            <br />
            <input
              type="password"
              id="pass"
              placeholder="Password"
              name="password"
              onChange={inputHandler}
              value={signup.password}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default React.memo(SignUpOnly);
