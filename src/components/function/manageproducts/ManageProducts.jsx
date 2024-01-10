import React from 'react';
import Loading from './../loading/Loading';
import ManageProductCard from './ManageProductCard';
import { useQuery } from 'react-query';

const ManageProducts = () => {
        
    
    const {
      data: products,
      isLoading,
      refetch,
    } = useQuery("services", () =>
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
    return (
      <div className="container  py-16 ">
        <div className="">
          {products?.map((products, index) => (
            <ManageProductCard
              products={products}
              refetch={refetch}
            ></ManageProductCard>
          ))}
        </div>
      </div>
    );
};

export default ManageProducts;