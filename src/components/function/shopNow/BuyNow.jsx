import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";

const BuyNow = () => {
  const [user] = useAuthState(auth);
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);


  //fetch single data
  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);


  //increment button 
  const handleIncrement = () => {
    const result = quantity + 1;
    setQuantity(result);
  };
  const handleDecrement = () => {
    const result = quantity - 1;
    if (result>0){
   setQuantity(result);
    }
     
  };


  //post order
    const navigate = useNavigate();
    const handleOrder = (event) => {
      event.preventDefault();
       
     
        const order = {
       name:event.target.name.value,
       userMail:user?.email,
       productName:product?.name,
       productSinglePrice:product?.price,
       productImg:product?.img,
       productPrice:quantity*product.price,
       number : event.target.number.value,
       address : event.target.address.value,
       pquantity : event.target.pquantity.value
        };

     
     
      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.acknowledged) {
            navigate("/welcome");
          }
        });
    
   



    }    
   
   



  return (
    <form onSubmit={handleOrder} className="">
      <section className="discount section">
        <div className="discount__container container grid">
          <img src={product.img} alt="" className="discount__img" />
          <div className="discount__animate">
            <h2 className="discount__title">
              Immerse yourself in <br /> your music
            </h2>

            <p className="discount__description text-xl">
              {" "}
              Single price ${product.price}
            </p>
            <div className="grid gap-2 cursor-pointer">
              <div className="button button--flex text-2xl flex gap-4">
                <p onClick={handleDecrement}>-</p>
                <input
                  type="number"
                  name="pquantity"
                  value={quantity}
                  className="bg  w-12 rounded-xl text-center "
                />
                <h6 onClick={handleIncrement}>+</h6>
              </div>

              <p className="text-xl">
                total Price: ${" "}
                <span name="name" className="text-red-500">
                  {product.price * quantity}{" "}
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="discount section">
        <div className="container bg p-5">
          <input
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class=" text-sm rounded-lg bg-black block w-full p-2.5 py-4 "
            value={user?.email}
            readOnly
            disabled
          />
          <input
            type="name"
            name="name"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class=" text-sm rounded-lg bg-black block w-full p-2.5  mt-4 py-4"
            placeholder="Your Name"
            required
          />
          <input
            type="number"
            name="number"
            id="helper-text"
            aria-describedby="helper-text-explanation"
            class=" text-sm rounded-lg bg-black block w-full p-2.5  mt-4 py-4"
            placeholder="Your Phone"
            required
          />
          <textarea
            type="text"
            id="helper-text"
            name="address"
            aria-describedby="helper-text-explanation"
            class=" text-sm rounded-lg bg-black block w-full p-2.5  mt-4 py-4 "
            placeholder="Write full address"
            required
          />
          <button type="submit" className="hover:bg-[#ff33cc] button button--flex mt-2">
            <i className="ri-shopping-bag-line button__icon"></i> Shop Now
          </button>
        </div>
      </section>
    </form>
  );
};

export default BuyNow;
