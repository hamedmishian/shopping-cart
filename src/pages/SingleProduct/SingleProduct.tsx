import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

interface StateType {
  products: any;
}

export default function SingleProduct() {

  let { id } = useParams();
  const products = useSelector((state: StateType) => state.products);
  const selectedProduct = products.find((product: any) => product.id === id);
  const { image, title, description, price } = selectedProduct;

  return (
    <>
      <p style={{ fontSize: "50px", textAlign: "center", margin: "40px 0" }}>
        {title}
      </p>
      <article className="product-container">
        <img src={image.substring(1)} alt="pic" />
        <span>
          <h2>Details :</h2>
          <h3>{description}</h3>
          <h2>{`Price : ${price}`}</h2>
          <Link to="/">
            <button className="banner-btn" style={{ margin: "40px 40px" }}>
              Back to Products
            </button>
          </Link>
        </span>
      </article>
    </>
  );
}
