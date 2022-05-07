import React from "react";
import "./AddItems.css";
import logo from "../../imges/logo5.png";
import { SiNamecheap } from "react-icons/si";
import { AiOutlineTags } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BsFillImageFill, BsCurrencyDollar } from "react-icons/bs";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firbaseConfig";
import { toast } from "react-toastify";

const AddItems = () => {
  const [user] = useAuthState(auth);

  // add new items
  const handleAddItem = (e) => {
    e.preventDefault();
    const author = user?.email;
    const name = e.target.iname.value;
    const supplier = e.target.sname.value;
    const quantity = e.target.quantity.value;
    const price = e.target.price.value;
    const img = e.target.link.value;
    const des = e.target.des.value;
    // console.log({ name, supplier, quantity, price, img, des });
    fetch("https://lit-headland-86154.herokuapp.com/cars/all", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        supplier,
        quantity,
        price,
        img,
        des,
        author,
      }),
    });
    toast("ITEM ADDED SUCCESSFULL");
    e.target.reset();
  };

  return (
    <div className="mt-5">
      {/* titlle here */}
      <div className="d-flex align-items-center justify-content-center ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="fs-3 text-capitalize text-orangered">Add New Item</div>
      </div>
      {/* add item form */}
      <div className="container mt-5">
        <div onSubmit={handleAddItem} className="from-wraper">
          <form className=" mx-auto">
            {/* input groups */}
            <div className="input-group">
              <span className="icons">
                <SiNamecheap />
              </span>
              <input
                type="text"
                name="iname"
                placeholder="Item Name"
                required
                className=""
              />
            </div>
            {/* input groups */}
            <div className="input-group">
              <span className="icons">
                <SiNamecheap />
              </span>
              <input
                type="text"
                name="sname"
                placeholder="Supplier Name"
                required
                className=""
              />
            </div>
            {/* input groups */}
            <div className="input-group">
              <span className="icons">
                <BsFillImageFill />
              </span>
              <input
                type="text"
                name="link"
                placeholder="Item Image Link"
                required
                className=""
              />
            </div>
            {/* input groups */}
            <div className="flex-group d-flex " style={{ gap: "10px" }}>
              <div className="input-group">
                <span className="icons">
                  <BsCurrencyDollar />
                </span>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  required
                  className=""
                />
              </div>
              <div className="input-group">
                <span className="icons">
                  <AiOutlineTags />
                </span>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  required
                  className=""
                />
              </div>
            </div>
            {/* input groups */}
            <div className="input-group">
              <span className="icons">
                <HiOutlinePencilAlt />
              </span>
              <textarea
                placeholder="Description"
                name="des"
                rows="5"
                required
                className="w-100 border-0"
              ></textarea>
            </div>
            {/* input groups here */}
            <div className="input-group d-flex align-items-center">
              <input
                type="submit"
                value={"ADD"}
                required
                className="submit-btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
