import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckOutForm = ({ product }) => {
  const stripe = useStripe();
  const { productPrice, name, email, _id } = product;
  const [cardError, setCardError] = useState("");
  const elements = useElements();
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch("https://mozababa.onrender.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ productPrice }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [productPrice]);

  //handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    //not got element
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    //send data
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: email,
          },
        },
      });

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      console.log(paymentIntent);
      setTransactionId(paymentIntent.id);
      setSuccess("Congrats! your payment is success");
      const payment = {
        order: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`https://mozababa.onrender.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log(data);
        });
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-white px-6 mt-5  rounded-xl"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-500">{cardError}</p>}
      {success && (
        <>
          <p className="text-green-500">{success}</p>
          <p className="text-white">
            Transaction ID:{" "}
            <span className="text-orange-500">{transactionId}</span>
          </p>
        </>
      )}
    </div>
  );
};

export default CheckOutForm;
