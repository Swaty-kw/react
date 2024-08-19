import React from "react";
import products from "../products";
import "../assets/css/style.css";
const ProductItem = () => {
  return (
    <div className="products-tab">
      <img height={100} width={100} src={products[0].img} alt="pc products" />
      <h3>{products[0].title}</h3>
      <p1>{products[0].price}</p1>
    </div>
  );
};
export default ProductItem;
