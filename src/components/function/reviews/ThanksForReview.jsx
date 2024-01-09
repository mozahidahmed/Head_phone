import React from 'react';
import { FcApproval } from "react-icons/fc";

const ThanksForReview = () => {
    return (
      <div>
        <section className="discount section">
          <div className="discount__container container grid">
            <div className="">
              <div className="flex justify-center items-center">
                <FcApproval className="text-7xl"></FcApproval>
                <h2 className="text-4xl text-[#1affa3]">Thanks!</h2>
              </div>

              <h2 className=" text-xl mt-2 ">Your Review Submitted!</h2>
              <p className="discount__description mt-2">Happy shoping</p>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ThanksForReview;