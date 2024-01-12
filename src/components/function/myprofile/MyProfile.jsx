import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { MdOutlineRateReview } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { GrUpdate } from "react-icons/gr";
import { Link } from 'react-router-dom';
import useAdmin from './../../../hooks/useAdmin';
import { IoMdAddCircle } from "react-icons/io";

const MyProfile = () => {
    const [user]=useAuthState(auth);
    const [admin] = useAdmin(user);
    
    
    return (
      <div className="py-16">
        {!admin && (
          <h2 className="section__title section__title-gradient products__line">
            User <br /> Dashboard
          </h2>
        )}

        {admin && (
          <h2 className="section__title section__title-gradient products__line">
            Admin <br /> Dashboard
          </h2>
        )}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 container gap-5">
          <div className="bg p-5 rounded-xl">
            <h1 className="text-2xl">Hi, </h1>
            <h1 className="text-2xl">{user?.email} </h1>
            <p className="py-2">Welcome your Dashboard </p>
            <p className="button button--flex">
              <GrUpdate /> Update Now
            </p>
          </div>

          <div className="bg p-5 rounded-xl">
            <h1 className="text-2xl">Waiting</h1>
            <h1 className="text-2xl">
              For Your <span className="text-[#56d156] font-bold">Review</span>{" "}
            </h1>
            <p className="py-2">Help me with your review </p>
            <Link to="/addreview" className="button  button--flex text-xl">
              <MdOutlineRateReview /> Review Now
            </Link>
          </div>

          <div className="bg p-5 rounded-xl">
            <h1 className="text-2xl">Explore</h1>
            <h1 className="text-2xl">
              {" "}
              Your <span className="text-[#56d156] font-bold">Order</span>{" "}
            </h1>
            <p className="py-2">Happy Shoping</p>
            <Link to="/myorder" className="button button--flex text-xl">
              <LuShoppingCart /> Your Cart
            </Link>
          </div>

          {admin && (
            <>
              <div className="bg p-5 rounded-xl">
                <h1 className="text-2xl">Explore</h1>
                <h1 className="text-2xl">
                  {" "}
                  Make <span className="text-[#56d156] font-bold">
                    Admin
                  </span>{" "}
                </h1>
                <p className="py-2">Happy Shoping</p>
                <Link to="/users" className="button button--flex text-xl">
                  <GrUpdate /> Manage User
                </Link>
              </div>
              <div className="bg p-5 rounded-xl">
                <h1 className="text-2xl">Explore</h1>
                <h1 className="text-2xl">
                  {" "}
                  Manage{" "}
                  <span className="text-[#56d156] font-bold">
                    Products
                  </span>{" "}
                </h1>
                <p className="py-2">Happy Shoping</p>
                <Link
                  to="/manageproducts"
                  className="button button--flex text-xl"
                >
                  <GrUpdate /> Manage Products
                </Link>
              </div>
              <div className="bg p-5 rounded-xl">
                <h1 className="text-2xl">Add</h1>
                <h1 className="text-2xl">
                  {" "}
                  New <span className="text-[#56d156] font-bold">
                    Products
                  </span>{" "}
                </h1>
                <p className="py-2">Happy Shoping</p>
                <Link
                  to="/addproduct"
                  className="button button--flex text-xl"
                >
                  <IoMdAddCircle />  Add Product
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    );
};

export default MyProfile;