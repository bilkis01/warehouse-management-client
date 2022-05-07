import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { FcGoogle } from "react-icons/fc";
import auth from "../../firbaseConfig";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  // navigation
  if (user) {
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
      });
  }

  return (
    <div className="text-center">
      <button onClick={() => signInWithGoogle()} className="border-0 p-3  mt-5">
        <span className="">
          <FcGoogle />
        </span>
        <span className="text-uppercase"> continue with google </span>
      </button>
      <span className="d-block text-danger">{error ? error.message : ""}</span>
    </div>
  );
};

export default Social;
