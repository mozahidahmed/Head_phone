import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../../firebase.init";
import { useState, useEffect } from "react";
import MyOrderCard from "./MyOrderCard";
import Loading from "../loading/Loading";
import { useQuery } from "react-query";

const MyOrder = () => {
  const [data,setData]=useState([])
  const [user] = useAuthState(auth);
  console.log(data);
 
useEffect(() => {
 if(user){
   fetch(`http://localhost:5000/myorder?email=${user?.email}`)
     .then((res) => res.json())
     .then((data) => setData(data));
 }
 else if(!user){
  <p>loading</p>
 }
 else console.log('success')
 
}, [user]);

   

  return (
    <div className="container h-screen py-16 grid gap-2">
      {data.length > 0 ? (
        <>
          {data?.map((order, index) => (
            <MyOrderCard data={order}></MyOrderCard>
          ))}
        </>
      ) : (
        <div className=" grid h-screen justify-center items-center ">
          <div className="">
            <h1 className="text-red-600 font-bold text-3xl">
              Sorry Sir Not Fount Item{" "}
            </h1>
            <a href="products">
              <h1  className="button button--flex mt-2">
                <i className="ri-shopping-bag-line button__icon"></i> Shop Now
              </h1>
             
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyOrder;
