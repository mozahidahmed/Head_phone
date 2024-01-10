import React from 'react';
import { Link } from 'react-router-dom';

const AllProductCard = ({ product }) => {
  const { img, name, price, _id } = product;
  return (
    <div>
      <div>
        <article className="products__card">
          <div className="products__content">
            <img src={img} alt="" className="products__img" />
            <h3 className="products__title">{name}</h3>
            <span className="products__price">${price}</span>
            <Link to={`/shopnow/${_id}`}>
              <button className="button button--flex products__button">
                <i className="ri-shopping-bag-line button__icon"></i>
              </button>
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
};

export default AllProductCard;