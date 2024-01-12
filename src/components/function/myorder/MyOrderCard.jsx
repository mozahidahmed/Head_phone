import React from "react";
import { MdDelete } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiHandshakeLight } from "react-icons/pi";

const MyOrderCard = ({ order, refetch }) => {
  const {
    productImg,
    productName,
    productPrice,
    pquantity,
    address,
    number,
    _id,
    paymentmethod,
  } = order;

  const handleDelete = () => {
    fetch(`https://mozababa.onrender.com/myorder/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          refetch();
        }
      });
  };

  return (
    <div>
      <div className="flex gap-12 bg p-5 items-center justify-around">
        <div className="">
          <img src={productImg} alt="" className="w-32" />
        </div>
        <div className="">
          <h1>Product Name : {productName}</h1>
          <h1>ProductPrice: {productPrice}</h1>
          <h1>Quantity: {pquantity}</h1>
          <h1>Address: {address}</h1>
          <h1>Number: {number}</h1>
        </div>
        {!order.paid && (
          <>
            <div className="flex text-4xl ">
              <MdDelete
                onClick={() => handleDelete()}
                className="text-red-500"
              ></MdDelete>
            </div>
          </>
        )}

        {order.paid && (
          <>
            {paymentmethod == "Online" && (
              <div className=" flex justify-center items-center gap-2">
                <MdOutlinePayment className="text-[#66ff66] text-4xl"></MdOutlinePayment>
                <p>Paid</p>
              </div>
            )}
          </>
        )}
        {!order.paid && (
          <>
            {paymentmethod == "Online" && (
              <Link to={`/payment/${_id}`}>
                <div className=" flex justify-center items-center gap-2">
                  <MdOutlinePayment className="text-[#66ff66] text-4xl"></MdOutlinePayment>
                  <p>Sent Payment</p>
                </div>
              </Link>
            )}
          </>
        )}
        {paymentmethod === "Cash" && (
          <div className=" flex justify-center items-center gap-2">
            <PiHandshakeLight className="text-[#66ff66] text-4xl"></PiHandshakeLight>
            <p>Cash Payment</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrderCard;
