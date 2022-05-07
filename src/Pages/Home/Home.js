import React, { useEffect, useState } from "react";
import { GrUpdate } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import { AiFillCar } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { GiShakingHands } from "react-icons/gi";
import { BsBox } from "react-icons/bs";
import about from "../../imges/about1.png";
import { Spinner } from "react-bootstrap";
const Home = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // load items from server
  useEffect(() => {
    fetch("https://lit-headland-86154.herokuapp.com/cars/home")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // loading spiner
  // if (items.length <= 0) {
  //   return (
  //     <div
  //       className="d-flex justify-content-center align-items-center"
  //       style={{ height: "100vh" }}
  //     >
  //       <Spinner animation="grow" variant="warning" />
  //     </div>
  //   );
  // }
  return (
    <section>
      {/* banner here */}
      <div className="h-banner container-fluid d-flex justify-content-center align-items-center ">
        <h1 className="h-banner-title display-3 text-uppercase text-center text-light">
          the car manager wearhouse <br /> limited{" "}
        </h1>
      </div>
      {/* about section here */}
      <div className="container about my-5">
        <div className=" a-section-title text-center my-5">
          <div className="fs-1 fw-bold">
            About <span className="text-orangered"> Car Manager</span>{" "}
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-6 col-12">
            <div className="abot-title">
              <span> We are a Trusted Name in Auto Industry</span>
              <span>Visited by Million of Car Buyers Every Month</span>
            </div>
            <p className="about-des ">
              Car Manager is nisi aliquip consequat duis velit esse cillum
              dolore fugiat nulla pariatur excepteur sint occaecat. Lorem ipsum
              amet consectetur adipisicing elit sed eiusmod tempor incididuntu
              labore et dolore magna aliqua enim ad minim veniam quis nostrud
              exercitation ullamco laboris nisi aliquip. Duis aute irure dolor
              in reprehenderit in voluptate velit ese cillum dolore fugiat nulla
              pariatur excepteur sint occaecat cupidatat non proident. Duis aute
              irure in reprehenderit in voluptate velit ese cillum dolore fugiat
              nulla pariatur excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="about-info">
              <div className="">
                <span className="text-orangered">
                  <BsBox />
                </span>
                <div>
                  <h5>Affordable Auto Prices</h5>
                  <p>AutoDrive is nisi aliquip consequat duis velit esse</p>
                </div>
              </div>
              <div className="">
                <span className="text-orangered">
                  <BsBox />
                </span>
                <div>
                  <h5>10 Years in Business</h5>
                  <p>AutoDrive is nisi aliquip consequat duis velit esse</p>
                </div>
              </div>
              <div className="">
                <span className="text-orangered">
                  <BsBox />
                </span>
                <div>
                  <h5>Affordable Auto Prices</h5>
                  <p>AutoDrive is nisi aliquip consequat duis velit esse</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12">
            <img src={about} alt="thumb" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* inventoy items here */}
      <div className="container my-5 py-5">
        <h3 className="my-5">Recently Listed Vehicles</h3>
        <div className="inventory-items ">
          {items.length ? (
            ""
          ) : (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <Spinner animation="grow" variant="warning" />
            </div>
          )}
          {items.map((item) => {
            const { name, img, des, price, quantity, supplier, _id } = item;
            return (
              <div className="row mb-5 item" key={_id}>
                <div className="col-lg-4 col-md-4 col-12">
                  {/* item img here */}
                  <img src={img} alt={name} className="img-fluid" />
                </div>
                <div className="col-lg-8 col-md-8 col-12">
                  {/* item ino here */}
                  <div className="row align-items-center">
                    <div className="col-lg-8 col-md-8 col-12">
                      <h4 className="item-name bg-light">{name}</h4>
                      <p className="item-des">{des}</p>
                      <p>
                        <b>Supplier : {supplier}</b>
                      </p>
                      <p className="item-quantity">Stocks : {quantity}</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                      <h4 className="item-price">${price}</h4>
                      <button
                        onClick={() => navigate(`/inventory/${_id}`)}
                        className="update-btn px-3  py-2"
                      >
                        <GrUpdate className="text-light" />
                        <span>Update</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* navigato to manage inventory page */}
      <div className="text-center">
        <button
          onClick={() => navigate("/inventory")}
          className="h-navigate-btn p-2"
        >
          Manage Inventories
        </button>
      </div>
      {/* overvew about total vehicles,sells,stocks,customer */}
      <div className="container-fluid overview my-5">
        <div className="row align-items-center justify-content-center w-100 text-center py-5">
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 text-light">
            <div>
              {" "}
              <AiFillCar className="fs-1" />
            </div>
            <span className="mt-2 fs-3">324</span>
            <div className="mt-2 fs-3">VEHICLES</div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 text-light">
            {" "}
            <div>
              {" "}
              <IoIosPeople className="fs-1" />
            </div>
            <span className="mt-2 fs-3">500</span>
            <div className="mt-2 fs-3">CUSTOMERS</div>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-4 col-12 text-light">
            {" "}
            <div>
              {" "}
              <GiShakingHands className="fs-1" />
            </div>
            <span className="mt-2 fs-3">13</span>
            <div className="mt-2 fs-3">SUPPLIER</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
