import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Loading from "../loading/Loading";
import { useQuery } from "react-query";

const Products = () => {
  


    const { data, isLoading,isError } = useQuery("services", () =>
      fetch("http://localhost:5000/products", {
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
      console.log('error');
    }

  return (
    <div>
      <section className="products section" id="products">
        <h2 className="section__title section__title-gradient products__line">
          Choose <br /> Your Style
        </h2>

        <div className="products__container container grid">
          {data?.slice(0, 6)
            .map((product) => (
              <ProductCard key={product._id} product={product}></ProductCard>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

// {
//   data.map((product) => (
//     <ProductCard key={product._id} product={product}></ProductCard>
//   ));
// }
