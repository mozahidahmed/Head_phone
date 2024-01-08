


const ProductCard = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div>
      <article className="products__card">
        <div className="products__content">
          <img src={img} alt="" className="products__img" />

          <h3 className="products__title">Black</h3>
          <span className="products__price">${price}</span>

          <button className="button button--flex products__button">
            <i className="ri-shopping-bag-line button__icon"></i>
          </button>
        </div>
      </article>
    </div>
  );
};

export default ProductCard;
