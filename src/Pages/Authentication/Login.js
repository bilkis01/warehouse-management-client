import React from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../imges/logo5.png";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firbaseConfig";
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import Social from "./Social";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();
  const [logedUser] = useAuthState(auth);
  let from = location.state?.from?.pathname || "/";

  // for login
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  // loading spiner
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }
  // navigation
  if (logedUser || user) {
    const url = `https://lit-headland-86154.herokuapp.com/signin`;
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: user?.user?.email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("access_token", data.token);
        toast("LOGIN SUCCESS");
        navigate(from, { replace: true });
      });
  }

  return (
    <section className="authentication">
      <button
        onClick={() => navigate("/")}
        className="naviget-btn px-5 fs-1 "
        title="Back to home"
      >
        <IoArrowBackCircleOutline />
      </button>
      {/* titlle here */}
      <div className="authentication-title d-flex align-items-center justify-content-center ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="fs-1 text-capitalize">car manager</div>
      </div>
      {/* login form here */}
      <div className="authentication-form w-75 mx-auto">
        <h3 className="text-center text-light fs-1 my-5">
          <i>LOGIN</i>
        </h3>
        <form onSubmit={handleLogin} className=" w-75 mx-auto ">
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <span className="icons">
              <MdEmail />
            </span>
            <input
              type="email"
              placeholder="Email"
              name="email"
              required
              className=""
            />
          </div>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <span className="icons">
              <FaLock />
            </span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              className=""
            />
          </div>

          <span className="text-danger  mt-5">
            {error ? error.message : ""}
          </span>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <input
              type="submit"
              value={"LOGIN"}
              required
              className="submit-btn"
            />
          </div>
          {/* navigate to register if haven't an accout */}
          <div className="text-light d-flex justify-content-between">
            <span>
              {" "}
              New To Car Manager? <Link to={"/register"}>REGISTER NOW</Link>
            </span>
            <span>
              <Link to="/forgot-password">Forgot Password?</Link>
            </span>
          </div>
        </form>
      </div>
      <Social />
    </section>
  );
};

export default Login;
