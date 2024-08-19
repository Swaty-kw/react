import React from "react";
import products from "../products";
import "../assets/css/style.css";
import ProductItem from "./ProductItem";
const ProductList = () => {
  let productList = products.map((product) => {
    return <ProductItem />;
  });
  return <div className="products-tab">{productList}</div>;
};

export default ProductList;
