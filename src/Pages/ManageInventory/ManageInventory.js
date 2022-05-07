import React, { useEffect, useState } from "react";
import { Spinner, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./ManageInventory.css";

const ManageInventory = () => {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  // initila count for table row number
  let x = 0;

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

  // load all items
  useEffect(() => {
    fetch("https://lit-headland-86154.herokuapp.com/cars/all")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  // loading spiner
  if (items.length <= 0) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  }

  return (
    <section className="manage-inventory">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center my-5">
          <div className="fs-3 ">All The Items You Are Managing</div>
          <div
            onClick={() => navigate("/add_items")}
            className="bg-orangered text-light shadow-lg p-2"
            style={{ cursor: "pointer" }}
          >
            <BsPlusLg />
            <span className="pe-1 "> ADD NEW ITEM</span>
          </div>
        </div>

        {/* all items here */}

        <Table hover bordered className="my-5">
          <thead className="shadow-lg">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Supplier</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              const { name, img, supplier, quantity, price, _id } = item;
              return (
                <tr key={_id}>
                  <td>{(x = x + 1)}</td>
                  <td>
                    <img src={img} alt="pd" width={"50px"} />
                    <span className="pe-2"> {name}</span>
                  </td>
                  <td>{supplier}</td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td title="REMOVE ITEM">
                    <button
                      onClick={() => handleRemoveItem(_id)}
                      className="text-danger border-0 delet-btn"
                    >
                      {" "}
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default ManageInventory;
