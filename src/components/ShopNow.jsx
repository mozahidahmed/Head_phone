
import { Link } from 'react-router-dom';
import img from '../assets/discount.png'

const ShopNow = () => {
    return (
      <div>
        <section className="discount section">
          <div className="discount__container container grid">
            <div className="discount__animate">
              <h2 className="discount__title">
                Immerse yourself in <br /> your music
              </h2>
              <p className="discount__description">
                Get it now, up to 50% off.
              </p>
              <Link to="/products" className="button button--flex">
                <i className="ri-shopping-bag-line button__icon"></i> Shop Now
              </Link>
            </div>

            <img src={img} alt="" className="discount__img" />
          </div>
        </section>
      </div>
    );
};

export default ShopNow;