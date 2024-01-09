import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostReview = () => {
      const navigate = useNavigate();



      const handleReview = (event) => {
        event.preventDefault();

        const order = {
          name: event.target.name.value,
          review: event.target.review.value,
        };

        fetch("http://localhost:5000/reviews", {
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
              navigate("/thanksforreview");
            }
          });
      };   
    return (
      <div>
        <form onSubmit={handleReview} className="discount section">
          <div className="container bg p-5">
            <input
              type="name"
              name="name"
              id="helper-text"
              aria-describedby="helper-text-explanation"
              class=" text-sm rounded-lg bg-black block w-full p-2.5  mt-4 py-4"
              placeholder="Your Name"
              required
            />

            <textarea
              type="text"
              id="helper-text"
              name="review"
              aria-describedby="helper-text-explanation"
              class=" text-sm rounded-lg bg-black block  w-full p-2.5  mt-4 py-4"
              placeholder="Write Feedback"
              required
            />
            <button type="submit" className=" button button--flex mt-2">
              Submit your review
            </button>
          </div>
        </form>
      </div>
    );
};

export default PostReview;