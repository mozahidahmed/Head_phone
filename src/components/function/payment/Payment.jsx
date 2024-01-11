
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from './../loading/Loading';
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51L1TpWGU2wvIXevfvFRcsBQjwexj7jfBVXtIVfJMic9qLe84kJtLckTeyRjmYUkjuKnwOWwSYDcEuHZTeFAsjuvo00vgKyksoX"
);



const Payment = () => {
  const {id}=useParams()   
  const url = `http://localhost:5000/myorder/${id}`;
  const { data: product, isLoading } = useQuery(["product", id], () =>
    fetch(url, {}).then((res) => res.json())
  );
  if (isLoading){
    return <Loading></Loading>
  }
    return (
      <div>
        <div className="flex gap-12 bg p-5 items-center py-32 container justify-around">
          <div className="">
            <img src={product?.productImg} alt="" className="w-32" />
          </div>
          <div className="text-2xl">
            <h1>Product Name : {product?.productName}</h1>
            <h1>Number: {product?.number}</h1>
          </div>
          <h1 className="text-red-500 mt-2 text-2xl">
            Please-Pay: {product?.productPrice}
          </h1>
        </div>
        <div className="card w-96 bg container rounded-xl mt-2 text-black shadow-xl p-6">
          <Elements stripe={stripePromise}>
            <CheckOutForm product={product} />
          </Elements>
        </div>
      </div>
    );
};

export default Payment;
