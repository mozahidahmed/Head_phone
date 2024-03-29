import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./../loading/Loading";
import { useQuery } from "react-query";

const Reviews = () => {
  const { data, isLoading, isError } = useQuery("reviews", () =>
    fetch("https://mozababa.onrender.com/reviews", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    console.log("error");
  }
  return (
    <div>
      <section className=" py-24 ">
        <h2 className="section__title section__title-gradient products__line">
          People <br /> Said
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 justify-center container ">
          {data?.map((data) => (
            <>
              <div className="bg p-5 rounded-xl">
                <h1 className="font-bold">{data?.name}</h1>
                <p className="mt-2">{data?.messege}</p>
              </div>
            </>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Reviews;
