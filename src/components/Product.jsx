import img1 from '../assets/product1.png'
import img2 from '../assets/product2.png'
import img3 from '../assets/product3.png'
import img4 from '../assets/product4.png'
import img5 from '../assets/product5.png'

const Product = () => {
    return (
      <div>
        <section className="products section" id="products">
          <h2 className="section__title section__title-gradient products__line">
            Choose <br /> Your Style
          </h2>

          <div className="products__container container grid">
            <article className="products__card">
              <div className="products__content">
                <img src={img1} alt="" className="products__img" />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img src={img2} alt="" className="products__img" />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img
                  src={img3}
                  alt=""
                  className="products__img"
                />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img
                  src={img4}
                  alt=""
                  className="products__img"
                />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img
                  src={img5}
                  alt=""
                  className="products__img"
                />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
            <article className="products__card">
              <div className="products__content">
                <img
                  src={img2}
                  alt=""
                  className="products__img"
                />

                <h3 className="products__title">Black</h3>
                <span className="products__price">$249</span>

                <button className="button button--flex products__button">
                  <i className="ri-shopping-bag-line button__icon"></i>
                </button>
              </div>
            </article>
           
          
          

          
          </div>
        </section>
      </div>
    );
};

export default Product;