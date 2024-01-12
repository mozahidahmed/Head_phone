import React from "react";
import { useQuery } from "react-query";
import AllProductCard from "./AllProductCard";
import Loading from "../loading/Loading";

const AllProducts = () => {
  const { data, isLoading } = useQuery("services", () =>
    fetch("https://mozababa.onrender.com/products", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <section className="products section" id="products">
        <h2 className="section__title section__title-gradient products__line">
          Choose <br /> Your Style
        </h2>

        <div className="products__container container grid">
          {data?.map((product) => (
            <AllProductCard
              key={product._id}
              product={product}
            ></AllProductCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllProducts;
