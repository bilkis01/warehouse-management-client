import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firbaseConfig";
import "./MyItems.css";
import { GrUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const MyItems = () => {
  const [items, setItems] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  // delet item
  const handleRemoveItem = (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      const url = `https://lit-headland-86154.herokuapp.com/cars/all/${id}`;
      fetch(url, {
        method: "DELETE",
      });
      const remainingItems = items.filter((item) => item._id !== id);
      setItems(remainingItems);
      toast("DELETED SUCCESSFULL");
    }
  };

  // load items by author
  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const url = `https://lit-headland-86154.herokuapp.com/cars/myitems?author=${user?.email}&access_token=${accessToken}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // chek if token not valid
        if (data.message) {
          signOut(auth);
        } else {
          setItems(data);
        }
      });
  }, [user]);

  return (
    <div className="container my-5" style={{ minHeight: "80vh" }}>
      <h3 className="my-5 text-uppercase">
        The Items You Added Is{" "}
        <span className="text-danger">{items.length}</span>
      </h3>
      <div className="inventory-items ">
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
                    <button
                      onClick={() => handleRemoveItem(_id)}
                      className="update-btn mt-2 px-3 py-2"
                    >
                      <AiFillDelete />
                      <span> DELETE</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MyItems;
