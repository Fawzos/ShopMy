import React from "react";
import { Link } from "react-router-dom";
import Product from "./Product";

function Category(props) {
  const { category, products } = props;
  return (
    <div key={category?.id} className="category">
      {products ? (
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={category?.image}
                alt={category?.name}
              />
            </div>
          </div>
        </div>
      ) : (
        <Link to={`/categories/${category?.id}`}>
          <img className="medium" src={category?.image} alt={category?.name} />
        </Link>
      )}

      <div>
        <Link to={`/categories/${category?.id}`}>
          <p className="category-name">{category?.name}</p>
        </Link>
      </div>
      {products
        ? products.map((product) => {
            return (
              <>
                <Product product={product} />
              </>
            );
          })
        : null}
    </div>
  );
}

export default Category;
