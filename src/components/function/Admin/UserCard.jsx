import React from 'react';
import { MdDelete } from "react-icons/md";


const UserCard = ({ user, refetch }) => {
  const { email, role, _id } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        // 'content-type': 'application/json'
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          console.log("soryyy must be admin");
        }

        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
        }
      });
  };
  return (
    <div className="bg p-5 flex  justify-around ">
      <h1 className="text-2xl">{email}</h1>
      <div className="">
        <MdDelete className="text-red-500 text-2xl"></MdDelete>
      </div>

      {role !== "admin" && (
        <button onClick={makeAdmin} className="button">
          Make_Admin
        </button>
      )}
    </div>
  );
};

export default UserCard;