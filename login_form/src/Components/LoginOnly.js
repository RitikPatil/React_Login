import React, { useState, useContext } from "react";
import "./css/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import { json } from "body-parser";
import swal from "sweetalert";
import swal2 from "sweetalert2";
import AfterLogin from "./AfterLogin";
import Cookies from "js-cookie";

import { LoggedContext, NameContext } from "../App";

function LoginOnly(props) {
  const [islogged, setLogged] = useContext(LoggedContext);
  const [name, setName] = useContext(NameContext);

  const [isProcessing, setProcessing] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const inputHandler = (e) => {
    const name = e.target.name;
    setLogin({
      ...login,
      [name]: e.target.value,
    });
  };

  const userLogin = {
    email: login.email,
    password: login.password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setProcessing(true);
    axios
      .post("/login-signup/login", userLogin)
      .then((resp) => {
        // swal2.fire("Please Wait");
        // swal2.showLoading();
        if (resp.data == "Success") {
          swal({
            title: "SuccessFully Loged In",
            icon: "success",
          });
          // Cookies.set("user", "LoggedIn", { expires: 7 });

          axios.post("/login-signup/token", userLogin).then((resp) => {
            // Cookie
            Cookies.set("name", resp.data, { expires: 7 });

            setName("R");
          });
          setLogged(true);
        } else {
          swal({
            title: resp.data,
            icon: "warning",
            dangerMode: true,
          });
          setProcessing(false);
        }
      })
      .catch((err) => console.log(err));
    // const name = e.target.name;
    // setLogin({
    //   [name]: ""
    // });
  };

  const { isleft, isright } = props;
  return (
    <div className="form-panel">
      <div
        className={`login-form form-css ${isright ? `right` : ``}`}
        id="login"
      >
        <form onSubmit={submitHandler}>
          <h1>Login</h1>
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
              type="email"
              placeholder="Email"
              name="email"
              value={login.email}
              onChange={inputHandler}
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={login.password}
              onChange={inputHandler}
            />
            <br />
          </div>
          {isProcessing ? (
            <button type="submit" disabled>
              Processing ...
            </button>
          ) : (
            <button type="submit">Login</button>
          )}
        </form>
      </div>
    </div>
  );
}

export default React.memo(LoginOnly);
