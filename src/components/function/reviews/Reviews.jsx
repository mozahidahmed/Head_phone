import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Reviews = () => {
     const [data, setData] = useState([]);

     useEffect(() => {
       fetch("http://localhost:5000/reviews")
         .then((res) => res.json())
         .then((data) => setData(data));
     }, []);
    return (
      <div>
        <section className=" py-24 ">
          <h2 className="section__title section__title-gradient products__line">
            People <br /> Saw
          </h2>
          <div className="grid lg:grid-cols-3 gap-5 justify-center container ">
            {data.map((data) => (
              <>
                <div className="bg p-5 rounded-xl">
                  <h1 className="font-bold">{data?.name}</h1>
                  <p className="mt-2">{data?.messege}</p>
                </div>
              </>
            ))}
          </div>
        </section>
      </div>
    );
};

export default Reviews;