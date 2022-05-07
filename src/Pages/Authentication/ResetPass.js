import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import auth from "../../firbaseConfig";
import { async } from "@firebase/util";
import { toast } from "react-toastify";

const ResetPass = () => {
  const [cheacked, setCheacked] = useState(true);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();

  const handleResetEmail = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    await sendPasswordResetEmail(email);
    e.target.reset();
    toast("Email Sent");
  };

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
        <div></div>
        <div className="fs-1 text-capitalize">car manager</div>
      </div>
      {/* register form here */}
      <div className="authentication-form w-75 mx-auto">
        <h3 className="text-center text-light fs-1 my-5">
          <i>Reset Password</i>
        </h3>
        <form onSubmit={handleResetEmail} className=" w-75 mx-auto ">
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <input
              type="email"
              placeholder="User Email"
              name="email"
              required
              className=""
            />
          </div>
          <input
            type="checkbox"
            checked={cheacked}
            onChange={() => setCheacked(!cheacked)}
          />
          <span className="text-light ms-2">
            we will send you an password reset email
          </span>{" "}
          <br />
          <span className="text-danger">{error ? error.message : ""}</span>
          {/* input groups here */}
          <div className="input-group d-flex align-items-center">
            <input
              disabled={!cheacked}
              type="submit"
              value={"SEND"}
              required
              className={cheacked ? "submit-btn" : " btn text-light"}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ResetPass;
