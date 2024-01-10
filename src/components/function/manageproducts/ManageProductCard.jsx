import React from 'react';
import { MdDelete } from "react-icons/md";

const ManageProductCard = ({ products, refetch }) => {
  const { name, img, price,_id } = products;


  
    const handleDelete=()=>{
      fetch(`http://localhost:5000/products/${_id}`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            console.log('deleted product');
            refetch();
          }
        });
    }
  return (
    <div>
      <div className="flex  gap-12 bg p-5 items-center justify-around">
        <div className="">
          <img src={img} alt="" className="w-32" />
        </div>
        <div className="text-xl">
          <h1>Product Name : {name}</h1>
          <h1>Product Name : {price}</h1>
        </div>
        <div className="flex text-4xl ">
          <MdDelete
            onClick={() => handleDelete()}
            className="text-red-500"
          ></MdDelete>
        </div>
      </div>
    </div>
  );
};

export default ManageProductCard;