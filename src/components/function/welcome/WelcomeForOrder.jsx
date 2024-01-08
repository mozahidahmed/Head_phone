import { FaRegHandPointRight } from "react-icons/fa";

const WelcomeForOrder = () => {
  return (
    <div>
      <section className="discount section">
        <div className="discount__container container grid">
          <div className="discount__animate">
            <h2 className=" text-5xl text-[#1affa3]">Congratulations!</h2>
            <h2 className=" text-3xl mt-2 ">Order Submitted!</h2>
            <p className="discount__description mt-2">Happy shoping</p>
            <a href="/myorder" className="button button--flex ">
              See Order Details <FaRegHandPointRight className="text-xl"></FaRegHandPointRight>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomeForOrder;
