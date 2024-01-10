import React from 'react';
import { FcApproval } from "react-icons/fc";

const SuccessFullyAdded = () => {
    return (
      <div>
        <section className="discount section">
          <div className="discount__container container grid">
            <div className="">
              <div className="flex justify-center items-center">
                <FcApproval className="text-7xl"></FcApproval>
                <h2 className="text-2xl text-[#1affa3]">Product Added!</h2>
              </div>

              
            </div>
          </div>
        </section>
      </div>
    );
};

export default SuccessFullyAdded;