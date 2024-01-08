import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <section className="products section" id="products">
        <h2 className="section__title section__title-gradient products__line">
          Choose <br /> Your Style
        </h2>

        <div className="products__container container grid">
          {data.map((product) => (
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
