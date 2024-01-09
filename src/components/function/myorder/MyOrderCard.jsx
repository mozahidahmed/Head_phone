import React from 'react';
import { MdDelete } from "react-icons/md";
import { MdOutlinePayment } from "react-icons/md";

const MyOrderCard = ({ data }) => {
  const { productImg, productName, productPrice, pquantity, address, number,_id } =
    data;


const handleDelete = () => {

  fetch(`http://localhost:5000/myorder/${_id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.deletedCount) {
        
      }
    });
};







  return (
    <div>
      <div className="flex gap-12 bg p-5 items-center justify-around">
        <div className="">
          <img src={productImg} alt="" className="w-32" />
        </div>
        <div className="text-xl">
          <h1>Product Name : {productName}</h1>
          <h1>ProductPrice: {productPrice}</h1>
          <h1>Quantity: {pquantity}</h1>
          <h1>Address: {address}</h1>
          <h1>Number: {number}</h1>
        </div>
        <div className="flex text-4xl ">
          <MdDelete  onClick={()=>handleDelete()}  className='text-red-500'>
          </MdDelete >
          <MdOutlinePayment  className='text-red-500'>
          </MdOutlinePayment > 
         
        </div>
      </div>
    </div>
  );
};

export default MyOrderCard;