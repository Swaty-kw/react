import React from "react";
import products from "../products";
import "../assets/css/style.css";
const ProductItem = ({ product }) => {
  return (
    <div className="product-Info">
      <img height={100} width={100} src={product.img} alt="pc products" />
      <h3>{product.title}</h3>
      <p1>{products.price}</p1>
    </div>
  );
};
export default ProductItem;
