import React from "react";
import "./Blogs.css";
import thumb from "../../imges/banner.jpg";
import b1 from "../../imges/blogs/1.jpg";
import b2 from "../../imges/blogs/2.png";
import b3 from "../../imges/blogs/3.jpg";
import b4 from "../../imges/blogs/4.png";

const Blogs = () => {
  return (
    <div className="container my-5 pb-5 ">
      {/* blog */}
      <div className="blog">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={b1} alt="blog" className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <h4 className="qus">Difference between javascript and nodejs</h4>
            <p className="ans">
              JavaScript is a simple programming language that runs in any
              browser JavaScript Engine. Whereas Node JS is an interpreter or
              running environment for a JavaScript programming language that
              holds many excesses, it requires libraries that can easily be
              accessed from JavaScript programming for better use{" "}
              <a href="#">read more</a>.
            </p>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="blog">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={b2} alt="blog" className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <h4 className="qus">
              When should you use nodeJs and when should you use mongodb
            </h4>
            <p className="ans">
              There are many web servers built with nodejs that will then use
              MongoDB for storing data. MongoDB offers an API library that runs
              within a Nodejs application to give you programmatic access to
              MongoDB so you can create databases and then add, query, update or
              delete data from the MongoDB database
              <a href="#">read more</a>.
            </p>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="blog">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={b3} alt="blog" className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <h4 className="qus">
              Differences between sql and nosql databases.
            </h4>
            <p className="ans">
              SQL databases are vertically scalable, while NoSQL databases are
              horizontally scalable. SQL databases are table-based, while NoSQL
              databases are document, key-value, graph, or wide-column stores.
              SQL databases are better for multi-row transactions, while NoSQL
              is better for unstructured data like documents or JSON.{" "}
              <a href="#">read more</a>.
            </p>
          </div>
        </div>
      </div>
      {/* blog */}
      <div className="blog">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-12">
            <img src={b4} alt="blog" className="img-fluid" />
          </div>
          <div className="col-lg-8 col-md-8 col-12">
            <h4 className="qus">
              What is the purpose of jwt and how does it work
            </h4>
            <p className="ans">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.{" "}
              <a href="#">read more</a>.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center ">
        <button className="bg-orangered border-0 text-light">VIEW MORE</button>
      </div>
    </div>
  );
};

export default Blogs;
