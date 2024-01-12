import React from "react";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://mozababa.onrender.com/products")
  );

  const img_key = "580ee4f2433e50615da0337b4c45ad0b";
  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${img_key}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const img = result.data.url;
          const product = {
            name: data.name,
            price: data.price,
            img: img,
          };
          fetch("https://mozababa.onrender.com/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((inserted) => {
              if (inserted.insertedId) {
                navigate("/successfullyAdded");
              }
            });
        }
      });
  };
  return (
    <div className="py-16">
      <h2 className="section__title section__title-gradient products__line ">
        Add Product
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="">
        <div className="container bg p-5">
          <input
            type="name"
            {...register("name", { required: true })}
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className=" text-sm rounded-lg bg-black block w-full p-2.5  mt-4 py-4"
            placeholder="Product Name"
          />
          <input
            type="number"
            {...register("price", { required: true })}
            id="helper-text"
            aria-describedby="helper-text-explanation"
            className=" text-sm rounded-lg bg-black block w-full p-2.5  mt-4 py-4"
            placeholder="Product Price"
            required
          />

          <input
            className="bg mt-4"
            {...register("image", { required: true })}
            aria-describedby="file_input_help"
            id="file_input"
            type="file"
          />
          <p
            className="mt-1 text-sm text-gray-500  dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>

          <button type="submit" className=" button button--flex mt-2">
            Submit Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
