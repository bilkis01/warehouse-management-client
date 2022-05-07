import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        height: "80vh",
      }}
    >
      <h1>404</h1>
      <p className="w-50 text-center">
        A 404 error is an HTTP status code that means that the page you were
        trying to reach on a website couldn't be found on their server.
      </p>
      <button
        className="border-0 bg-orangered p-2 text-light"
        onClick={() => navigate("/")}
      >
        Back To Home
      </button>
    </div>
  );
};

export default NotFound;
