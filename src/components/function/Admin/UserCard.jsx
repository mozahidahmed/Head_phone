import React from "react";
import { MdDelete } from "react-icons/md";

const UserCard = ({ user, refetch }) => {
  const { email, role, _id } = user;
  const makeAdmin = () => {
    fetch(`https://mozababa.onrender.com/user/admin/${email}`, {
      method: "PUT",
      headers: {
        // 'content-type': 'application/json'
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
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
    <div className="bg p-5 grid lg:grid-cols-3 justify-center  gap-4 ">
      <h1 className="text-2xl">{email}</h1>
      <div className="flex justify-center ">
        <MdDelete className="text-red-500 text-5xl bg-black p-2 rounded-full"></MdDelete>
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
